# builtin modules :
import asyncio

# external modules :
from flask import Blueprint , request , render_template
from flask_login import current_user , login_required
import jwt

# third party modules :
from extensions import *
from models import *
from settings import SECRET_KEY
from auth import token_required

Oops_api = Blueprint('Oops_api' , __name__)

class user_issues :
    
    @token_required
    @Oops_api.get('/user/<string:user_name>')
    def user_profile(user_name) :
        target = get_user(user_name = user_name)
        user = {
            f'id' : target.id ,
            f'user_name' : target.user_name ,
            f'family_name' : target.family_name ,
            f'first_name' : target.first_name ,
            f'email' : target.email ,
            f'signup_time' : target.signup_time ,
            f'user_type' : target.user_type ,
        }
        created_posts = {}
        for post in target.created_posts :
            first_comment_auther = get_user(post.comments[0].auther) if post.comments else None
            created_posts[f'post{post.id}'] = {
                'id' : post.id ,
                'content' : post.content ,
                'media_files' : post.media_files ,
                'created_time' : post.created_time ,
                'is_public' : post.is_public ,
                'edited' : post.edited ,
                'situation' : post.situation ,
                'comments' : len(post.comments) ,
                'first_comment' : {
                    'id' : post.comments[0].id ,
                    'auther' : {
                        'id' : first_comment_auther.id ,
                        'user_name' : first_comment_auther.user_name ,
                        'profile_pic' : first_comment_auther.picture_path ,
                        } ,
                    'content' : post.comments[0].content ,
                    'media_files' : post.comments[0].media_files ,
                    'created_time' : post.comments[0].created_time ,
                    'likes' : len(post.comments[0].likers) ,
                    'dislikes' : len(post.comments[0].likers) 

                    } if post.comments else None ,
                'likes' : len(post.likers) ,
                'dislikes' : len(post.dislikers) ,
                }
        user['created_posts'] = created_posts
        return user

    @Oops_api.get('/users')
    def get_users() :
        page = request.args.get('page' , 1 , type = int)
        per_page = request.args.get('per_page' , 1 , type = int)
        
        all_users = request.args.get('all_users' , type = bool)
        users = {'total':User.query.count()}

        for rank , user in enumerate(User.query.paginate(per_page = per_page , page = page) if not all_users else User.query.all()) :
            users[f'{rank}'] = {
            f'id' : user.id ,
            f'user_name' : user.user_name ,
            f'family_name' : user.family_name ,
            f'first_name' : user.first_name ,
            f'email' : user.email ,
            f'signup_time' : user.signup_time ,
            f'user_type' : user.user_type ,
            }

        return users
    
    @Oops_api.get('/hai')
    def hai() :
        if request.cookies.get('token') :
            decoded_token = jwt.api_jwt.decode(request.cookies.get('token') , SECRET_KEY , algorithms = "HS256")
            login_user(get_user(decoded_token.get('id')))
        return render_template('test.html')

    # --------------------------------------------- new functions ------------------------------------------ #

    @Oops_api.post('/is_it_valid_email')
    def is_it_valid_email() :
        email = request.json.get('email')
        if email :
            pass # use an api to check the email existance
    
    @Oops_api.post('/login_api')
    def is_it_registred_email() :
        card_number = request.json.get('card_number')
        password = request.json.get('password')
        if card_number and password :
            return { 'issue' : user_login(card_number , password)}
        return {'issue':'post_id parameter not entered'}    

class post_issues :

    @Oops_api.get('/posts')
    def get_posts() :
        page = request.args.get('page' , 1 , type = int)
        per_page = request.args.get('per_page' , 1 , type = int)

        all_posts = request.args.get('all_posts' , True, type = bool)
        posts = []

        for post in Post.query.paginate(per_page = per_page , page = page) if not all_posts else Post.query.all() :
            post_auther = get_user(post.auther)
            first_comment_auther = get_user(post.comments[0].auther) if post.comments else None

            if post not in current_user.hidden_posts :
                posts.append({
                    'id' : post.id ,
                    'auther' : {
                        'id' : post_auther.id ,
                        'user_name' : post_auther.user_name ,
                        'profile_pic' : post_auther.picture_path ,
                        } ,
                    'l' : current_user in post.likers , # liked
                    'd' : current_user in post.dislikers , # disliked
                    's' : current_user in post.savers , #save
                    'r' : current_user in post.reporters , #report
                    'h' : current_user in post.hidders , #report
                    'comments' : len(post.comments) ,
                    'ild' : True if post.is_left_dir == None else post.is_left_dir ,
                    'content' : post.content ,
                    'media_files' : post.media_files ,
                    'created_time' : post.created_time ,
                    'is_public' : post.is_public ,
                    'edited' : post.edited ,
                    'situation' : post.situation ,
                    'first_comment' : {
                        'id' : post.comments[0].id ,
                        'auther' : {
                            'id' : first_comment_auther.id ,
                            'user_name' : first_comment_auther.user_name ,
                            'profile_pic' : first_comment_auther.picture_path ,
                            } ,
                        'content' : post.comments[0].content ,
                        'media_files' : post.comments[0].media_files ,
                        'created_time' : post.comments[0].created_time ,
                        'likes' : len(post.comments[0].likers) ,
                        'dislikes' : len(post.comments[0].likers) 

                        } if post.comments else None ,
                    'likes' : len(post.likers) ,
                    'dislikes' : len(post.dislikers) ,
                        })
        return {'posts':posts , 'total':len(posts)}
    
    @Oops_api.post('/add_post')
    @login_required
    def add_new_post() :
        content = request.json.get('content')
        is_public = request.json.get('is_public')
        situation = request.json.get('situation')

        if content :
            id = add_post(content , current_user , is_public , situation )

        return {'id' : id} if type(id) == int else {'issue':'auther or content parameters not entered'}
    
    @Oops_api.delete('/delete_post')
    @login_required
    def delete_post_api() :
        post_id = request.json.get('post_id')
        if post_id :
            try : delete_post(get_post(post_id) , current_user)
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}
    
    @Oops_api.post('/like_post')
    @login_required
    def like_post_api() :
        post_id = request.json.get('post_id')
        if post_id :
            try : like_post(get_post(post_id) , current_user)
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}
    
    @Oops_api.post('/unlike_post')
    @login_required
    def unlike_post_api() :
        post_id = request.json.get('post_id')
        if post_id :
            try : unlike_post(get_post(post_id) , current_user)
            except : return {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/dislike_post')
    @login_required
    def dislike_post_api() :
        post_id = request.json.get('post_id')
        if post_id :
            try : dislike_post(get_post(post_id) , current_user)
            except : return {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/undislike_post')
    @login_required
    def undislike_post_api() :
        print('there is a request here ')
        post_id = request.json.get('post_id')
        if post_id :
            undislike_post(get_post(post_id) , current_user)
            # except : return {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/save_post')
    @login_required
    def save_post_api() :
        post_id = request.json.get('post_id')
        if post_id :
            try : save_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/unsave_post')
    @login_required
    def unsave_post_api() :
        post_id = request.json.get('post_id')
        if post_id :

            try : unsave_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/hide_post')
    @login_required
    def hide_post_api() :
        post_id = request.json.get('post_id')
        if post_id :

            try : hide_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/unhide_post')
    @login_required
    def unhide_post_api() :
        post_id = request.json.get('post_id')
        if post_id :

            try : unhide_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/report_post')
    @login_required
    def report_post_api() :
        post_id = request.json.get('post_id')
        if post_id :

            try : report_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}

    @Oops_api.post('/unreport_post')
    @login_required
    def unreport_post_api() :
        post_id = request.json.get('post_id')
        if post_id :

            try : unreport_post(get_post(post_id) , current_user )
            except : {'issue':'targeted post was deleted'}

            return {'issue':'done'}
        return {'issue':'post_id parameter not entered'}
    

class comment_issues :
    
    @Oops_api.post('/add_comment')
    @login_required
    def add_comment_api() :
        post_id = request.json.get('post_id')
        content = request.json.get('content')
        if post_id and content :
            id = add_comment(content , current_user , post_id)
        return {'id' : id} if type(id) == int else {'issue':'auther or content or post_id parameters not entered'}
    
    @Oops_api.post('/edit_comment')
    @login_required
    def edit_comment() :
        comment_id = request.json.get('comment_id')
        new_content = request.json.get('new_content')
        if comment_id and new_content :
            edit_comment(comment_id , new_content)
            return {'issue':'done'}
        return {'issue':'comment_id or new_content parameters not entered'}

    @token_required
    @Oops_api.get('/comments')
    def get_comments() :
        post_id = request.args.get('post_id' , type = int)
        page = request.args.get('page', 1 , type = int)
        per_page = request.args.get('per_page', 1 , type = int)

        if post_id :
            comments = {}

            for comment in get_post(post_id).comments[page*per_page:(page+1)*per_page] :
                comments[f'{comment.id}'] = {
                    'id' : comment.id ,
                    'auther' : {
                        'id' : comment.auther.id ,
                        'user_name' : comment.auther.user_name ,
                        'profile_pic' : comment.auther.picture_path
                    } ,
                    'content' : comment.content ,
                    'media_files' : comment.media_files ,
                    'created_time' : comment.created_time ,
                    'likes' : len(comment.likers) ,
                    'dislikes' : len(comment.dislikers) ,

                }

            return comments
        
    @Oops_api.post('/like_comment')
    @login_required
    def like_comment_api() :
        comment_id = request.json.get('comment_id')
        if comment_id :
            like_comment(get_comment(comment_id) , current_user)
            return {'issue':'done'}
        return {'issue':'comment_id parameter not entered'}
    
    @Oops_api.post('/unlike_comment')
    @login_required
    def unlike_comment_api() :
        comment_id = request.json.get('comment_id')
        if comment_id :
            unlike_comment(get_comment(comment_id) , current_user)
            return {'issue':'done'}
        return {'issue':'comment_id parameter not entered'}
    
    @Oops_api.post('/dislike_comment')
    @login_required
    def dislike_comment_api() :
        comment_id = request.json.get('comment_id')
        if comment_id :
            dislike_comment(get_comment(comment_id) , current_user)
            return {'issue':'done'}
        return {'issue':'comment_id parameter not entered'}
    
    @Oops_api.post('/undislike_comment')
    @login_required
    def undislike_comment_api() :
        comment_id = request.json.get('comment_id')
        if comment_id :
            undislike_comment(get_comment(comment_id) , current_user)
            return {'issue':'done'}
        return {'issue':'comment_id parameter not entered'}


# test3
    @Oops_api.get('/test')
    @token_required
    def test() :
        return f'hello : {current_user.user_name}'