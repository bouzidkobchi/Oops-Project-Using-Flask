from flask_login import LoginManager , login_user
from flask import request , abort
import jwt
from settings import SECRET_KEY
from extensions import get_user

login_manager = LoginManager()

@login_manager.user_loader
def load_user(id) : return get_user(id)

def token_required(view) :
    def wrapper(*args , **kwargs) :
        if (token := request.cookies.get('token')) and set(jwt.api_jwt.decode(token , SECRET_KEY , 'HS256').keys()) == {'id' , 'name' , 'email'} :
            login_user(get_user(jwt.api_jwt.decode(token , SECRET_KEY , 'HS256').get('id')))
            return view(*args , **kwargs)
        else : abort(401)
    return wrapper