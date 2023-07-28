# builtin modules :
import os
from datetime import datetime , timedelta
import datetime as dt

# external modules :
from flask import Blueprint , request ,  render_template , session , abort , make_response , redirect , url_for , json
from werkzeug.security import check_password_hash 
from flask_login import login_user , current_user , login_required , logout_user
import jwt

# third party modules :
from settings import BASE_DIR
from extensions import add_user , add_media
from extensions import *
from settings import SECRET_KEY


Oops = Blueprint('Oops' , __name__)

@Oops.route('/signup' , methods= ['GET','POST'])
@Oops.route('/join' , methods= ['GET','POST'])
def signup() :
    if request.method == 'POST' :

        user_name = request.form.get('user_name')
        card_number = request.form.get('card_number')
        email = request.form.get('email')
        password = request.form.get('password')
        picture = request.files.get('profile_pic')

        if user_name and card_number and email and password :
            picture_path = None
            if picture :
                extension = picture.filename.split('.')[-1]
                if extension in ('png' , 'jpg' , 'jpeg') :
                    picture_path = os.path.join(BASE_DIR , 'static' , 'imgs' , str(datetime.utcnow()).replace(':','-').replace(' ','_') , extension)
                    picture.save(picture_path)
                    add_media(picture_path , os.path.getsize(picture_path))


            add_user(user_name , card_number , email , password , picture_path)

            return 'user added seccufuly !'

    return render_template('signup.html')

@Oops.route('/signin' , methods = ['GET' , 'POST'])
@Oops.route('/login' , methods = ['GET' , 'POST'])
def signin() :
    if request.method == 'POST' :
        card_number = request.form.get('card_number')
        password = request.form.get('password')

        exist = get_user(card_number = card_number)
        if exist :
            if check_password_hash(exist.password_hash , password) :
                login_user(exist)

                user_info = {
                    'id' : current_user.id ,
                    'name' : current_user.user_name ,
                    'email' : current_user.email ,
                }

                token = jwt.api_jwt.encode(user_info , SECRET_KEY)

                response = make_response(redirect('/'))
                response.set_cookie('token',token , timedelta(days = 365) , secure=True)

                return response
            
            return 'wrong password'
        return 'card_number not found'

    return render_template('signin.html')

@Oops.route('/send-reset-password-email' , methods = ['GET','POST'])
def send_reset_password_email() :
    if request.method == 'POST' :
        email = request.form.get('email')
        if email :
            session['email'] = email
            return render_template('send_reset_password_email.html') # here send that the email sent
    return render_template('send_reset_password_email.html')

@Oops.route('/reset_password')
def reset_password() :
    # if session.get('email') :
    #     return render_template('reset_password.html')
    # abort(401) # page not authorized
    return render_template('reset_password.html')

@login_required
@Oops.route('/logout')
def logout() :
    logout_user()
    return redirect(url_for('Oops.signin'))

