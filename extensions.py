# builtin modules :
import os
import math
from datetime import datetime
import asyncio

# external modules :
from shutil import make_archive
from werkzeug.security import generate_password_hash , check_password_hash
from flask_login import login_user

# third party modules :
from models import *

def create_db() :
    db.create_all()

# ------------------------------------------------- user functions ----------------------------------------------------------- #

def get_user(id:int=None , user_name:str = None , email:str = None , card_number:int = None) -> User :
    if id : return User.query.get(id)
    if user_name : return User.query.filter_by(user_name=user_name).first()
    if email : return User.query.filter_by(email=email).first()
    if card_number :
        items = User.query.filter_by(card_number = card_number) 
        if items : return items.first()
        return None

# ----- wait for mysql to run this : ------------------- #

# def email_found(email) :
#     return User.query.filter_by(email = email)

# def card_number_found(card_number) :
#     return User.query.filter_by(card_number = card_number)

# def user_name_found(user_name) :
#     return User.query.filter_by(user_name = user_name)

# def add_user(user_name , card_number , email , password , picture = None) :
#     if user_name and card_number and email and password :
#         new_user = User(
#                 user_name =  user_name , 
#                 card_number = card_number ,
#                 email = email ,
#                 password_hash = generate_password_hash(password) , 
#                 picture_path = picture ,
#                 signup_time = datetime.utcnow()
#                 )
        
#         db.session.add(new_user)
#         db.session.commit()
#         return True
#     return False

# ----- wait for mysql to run this : ------------------- #

def add_user(user_name , card_number , email , password , picture = None) :
    if user_name and card_number and email and password :

        if get_user(email=email) :
            return 'email exist before'
        
        if get_user(card_number=card_number) :
            return 'card_numbre exist before'
        
        if get_user(user_name=user_name) :
            return 'user_name exist before'
        
        new_user = User(
                user_name =  user_name , 
                card_number = card_number ,
                email = email ,
                password_hash = generate_password_hash(password) , 
                picture_path = picture ,
                signup_time = datetime.utcnow()
                )
        
        db.session.add(new_user)
        db.session.commit()
        return True
    return False

def change_user_type(modifier:User , target_user:User , new_type:str) :
    if modifier.user_type == 'a' and new_type in ('a','t','w','s') :
        target_user.user_type = new_type
        db.session.commit()
        return True
    return False

def block_user(modifier:User , target_user:User) :
    if modifier.user_type == 'a' and target_user.is_blocked != True :
        target_user.is_blocked = True
        db.session.commit()
        return True
    return False

def disblock_user(modifier:User , target_user:User) :
    if modifier.user_type == 'a' and modifier.is_blocked != True and target_user.is_blocked != False :
        target_user.is_blocked = False
        db.session.commit()
        return True
    return False

def change_favorite_language(target_user:User , new_lang:str) :
    if new_lang in ('ar','fr','en') :
        target_user.favorite_lang = new_lang
        db.session.commit()
        return True
    return False

def change_password(target_user:User , new_password:str , old_password = None) :
    if (old_password and check_password_hash(generate_password_hash(old_password) , target_user.password_hash)) or old_password == 'confirmed' :
        target_user.password_hash = generate_password_hash(new_password)
        db.session.commit()
        return True
    return False

def change_profile_picture(target_user:User , new_picture_path:str) :
    old_picture_path = target_user.picture_path
    if old_picture_path :
        if os.path.exists(old_picture_path) : os.remove(old_picture_path)
        else : return 'the new picture path is wrong'
    if os.path.exists(new_picture_path) :
        target_user.picture_path = new_picture_path
        db.session.commit()
        return True
    return 'new path is wrong'

def change_email(target_user:User , new_email:str) :
    target_user.email = new_email
    db.session.commit()

def change_family_name(target_user : User , new_family_name:str) :
    target_user.family_name = new_family_name
    db.session.commit()

def change_fisrt_name(target_user : User , new_first_name:str) :
    target_user.first_name = new_first_name
    db.session.commit()

def change_username(target_user:User , new_user_name:str) :
    target_user.user_name = new_user_name
    db.session.commit()

def user_login(card_number , password) :
    if (user := get_user(card_number=card_number)) :
        if check_password_hash( user.password_hash , password) :
            login_user(user)
            return 'done'
        return 'invalid password'
    return 'invalid card_number'

# ---------------------------------------------- post functions ------------------------------------------------------------ #

def add_post(content:str , auther:User , is_public:bool = True , situation:str = 'n') :
    if content and auther :
        new_post = Post(
                content = content , 
                auther = auther.id , 
                is_public = is_public ,
                situation = situation , 
                created_time = datetime.utcnow()
                )
        
        db.session.add(new_post)
        db.session.commit()
        return new_post.id
    return None

def get_post(id:int) -> Post :
    return Post.query.get(id)

def edit_post(post_object:Post , content:str = None , is_public:bool = None , situation:str = None) :
    change = False
    if content :
        post_object.content = content
        change = True
    if is_public in (True , False) : 
        post_object.target = is_public
        change = True
    if situation in ('n','w','s') :
        post_object.situation = situation
        change = True
    if change :
        post_object.edited = True
        db.session.commit()

def like_post(post_object:Post , liker:User) :
    if post_object not in liker.liked_posts :
        liker.liked_posts.append(post_object)
    if post_object in liker.disliked_posts :
        liker.disliked_posts.remove(post_object)
    db.session.commit()

def unlike_post(post_object:Post , liker:User) :
    if post_object in liker.liked_posts :
        liker.liked_posts.remove(post_object)
    db.session.commit()

def dislike_post(post_object:Post , liker:User) :
    if post_object not in liker.disliked_posts :
        liker.disliked_posts.append(post_object)
    if post_object in liker.liked_posts :
        liker.liked_posts.remove(post_object)
    db.session.commit()

def undislike_post(post_object:Post , liker:User) :
    if post_object in liker.disliked_posts :
        liker.disliked_posts.remove(post_object)
        db.session.commit()

def hide_post(post_object:Post , target_user:User) :
    if post_object not in target_user.hidden_posts :
        target_user.hidden_posts.append(post_object)
        if post_object in target_user.saved_posts : 
            target_user.saved_posts.remove(post_object)
        db.session.commit()

def unhide_post(post_object:Post , target_user:User) :
    if post_object in target_user.hidden_posts :
        target_user.hidden_posts.remove(post_object)
        db.session.commit()

def save_post(post_object:Post , target_user:User) :
    if post_object not in target_user.saved_posts :
        target_user.saved_posts.append(post_object)
        db.session.commit()

def unsave_post(post_object:Post , target_user:User) :
    if post_object in target_user.saved_posts :
        target_user.saved_posts.remove(post_object)
        db.session.commit()


def report_post(post_object:Post , target_user:User) :
    if post_object not in target_user.reported_posts :
        target_user.reported_posts.append(post_object)
        db.session.commit()

def unreport_post(post_object:Post , target_user:User) :
    if post_object in target_user.reported_posts :
        target_user.reported_posts.remove(post_object)
        db.session.commit()

def delete_post(post_object:Post , modifier:User) :
    if modifier.user_type == 'a' or post_object.auther == modifier.id :
        # delete post from liked posts :
        for liker in post_object.likers :
            liker.liked_posts.remove(post_object)

        # delete post from disliked posts :
        for disliker in post_object.dislikers :
            disliker.disliked_posts.remove(post_object)

        # delete post from saved posts :
        for saver in post_object.savers :
            saver.saved_posts.remove(post_object)
            
        # delete post from reported posts :
        for reporter in post_object.reporters :
            reporter.reported_posts.remove(post_object)

        # delete post from hidden posts :
        for hidder in post_object.hidders :
            hidder.hidden_posts.remove(post_object)

        # delete the post_object from auther posts
        get_user(post_object.auther).created_posts.remove(post_object)

        # delete the post from post model
        db.session.delete(post_object)

        db.session.commit()

# ----------------------------------------------- comment functions ---------------------------------------------------------- #

def add_comment(content:str , auther:User , parent_post_id:int) :
    if content and auther and parent_post_id :
        new_comment = Comment(
                parent_post = parent_post_id  ,
                content = content ,
                auther = auther.id ,
                created_time = datetime.utcnow()
                )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.id
    return None

def edit_comment(modifier:User , comment_id:int , content:str) :
    if content and comment_id and modifier.id == get_comment(comment_id).auther :
        get_comment(comment_id).content = content
        db.session.commit()

def get_comment(id) -> Comment :
    return Comment.query.get(id)

def like_comment(comment_object:Comment , liker:User) :
    if comment_object not in liker.liked_comments :
        liker.liked_comments.append(comment_object)

    if comment_object in liker.disliked_comments :
        liker.disliked_comments.remove(comment_object)
    db.session.commit()

def unlike_comment(comment_object:Comment , liker:User) :
    if comment_object in liker.liked_comments :
        liker.liked_comments.remove(comment_object)
        db.session.commit()

def dislike_comment(comment_object:Comment , disliker:User) :
    if comment_object not in disliker.disliked_comments :
        disliker.disliked_comments.append(comment_object)

    if comment_object in disliker.liked_comments :
        disliker.liked_comments.remove(comment_object)
    db.session.commit()

def undislike_comment(comment_object:Comment , disliker:User) :
    if comment_object in disliker.disliked_comments :
        disliker.disliked_comments.remove(comment_object)
        db.session.commit()

def delete_comment(comment_object:Comment , modifier:User) :
    if modifier.user_type == 'a' or comment_object.auther == modifier.id :
        # delete from liked comments :
        for liker in comment_object.likers :
            liker.liked_comments.remove(comment_object)
        
        # delete from disliked comments :
        for disliker in comment_object.dislikers :
            disliker.disliked_comments.remove(comment_object)

        # delete comment from parent post :
        get_post(comment_object.parent_post).comments.remove(comment_object)

        # delete comment from auther comments
        get_user(comment_object.auther).created_comments.remove(comment_object)

        # delete comment from comment model
        db.session.delete(comment_object)

        db.session.commit()


# ----------------------------------------------- media functions ------------------------------------------------------------ #

def add_media(file_path:str) :
    if os.path.exists(file_path) :
        new_media =  Media()

# ----------------------------------------------- website functions ---------------------------------------------------------- #


def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

def directory_size(path) :
    total_size = 0
    for root , dirs , files in os.walk(path) :
        for file in files :
            total_size += os.path.getsize(os.path.join(root , file))
    return total_size

def create_zip(folder =  os.path.dirname(__file__)) :
    arch = make_archive( os.path.join(os.path.dirname(__file__) , 'zipped') , 'zip' , folder)
    return arch

