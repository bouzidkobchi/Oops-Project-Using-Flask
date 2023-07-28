from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# M2M relational tables :

saved_posts = db.Table(
    'saved_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

hidden_posts = db.Table(
    'hidden_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

reported_posts = db.Table(
    'reported_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

liked_posts = db.Table(
    'liked_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

disliked_posts = db.Table(
    'disliked_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

liked_comments = db.Table(
    'liked_comments' ,
    db.Column('user_id' , db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('comment_id' , db.Integer , db.ForeignKey('comment.id') , primary_key = True) ,
)

disliked_comments = db.Table(
    'disliked_comments' ,
    db.Column('user_id' , db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('comment_id' , db.Integer , db.ForeignKey('comment.id') , primary_key = True) ,
)

class User(UserMixin , db.Model) :
    id = db.Column(db.Integer , primary_key = True)

    # personal info :
    user_name = db.Column(db.String(30) , nullable = False , unique = True)
    first_name = db.Column(db.String(20) , nullable = True)
    family_name = db.Column(db.String(20) , nullable = True)
    card_number = db.Column(db.String(12) , nullable = False , unique = True)

    # account info :
    email = db.Column(db.String(50) , nullable = False , unique = True)
    password_hash = db.Column(db.String(200))
    picture_path = db.Column(db.String(200))
    favorite_lang = db.Column(db.String(2) , default = 'en')        # ar : arabic , en : english , fr : french
    signup_time = db.Column(db.DateTime)
    user_type = db.Column(db.String(1), default = 's')              # a : admin , w : worker , t : teacher , s : student
    is_blocked = db.Column(db.Boolean , default = False)
    
    # data references (account actions) :
        # posts :
    created_posts = db.relationship('Post')
    liked_posts = db.relationship('Post' , secondary=liked_posts , backref = 'likers')
    disliked_posts = db.relationship('Post' , secondary=disliked_posts , backref='dislikers')
    saved_posts = db.relationship('Post' , secondary=saved_posts , backref='savers')
    hidden_posts  = db.relationship('Post' , secondary=hidden_posts , backref='hidders')
    reported_posts  = db.relationship('Post' , secondary=reported_posts , backref='reporters')

        # comments :
    created_comments = db.relationship('Comment')
    liked_comments = db.relationship('Comment' , secondary = liked_comments , viewonly=True)
    disliked_comments = db.relationship('Comment' , secondary = disliked_comments , viewonly=True)

class Post(db.Model) :
    id = db.Column(db.Integer , primary_key = True)

    # general info :
    auther = db.Column(db.Integer , db.ForeignKey('user.id'))
    content = db.Column(db.String(2000))
    media_files = db.relationship('Media')
    created_time = db.Column(db.DateTime)

    # additional info 
    is_public = db.Column(db.Boolean  , default = True) # true => public , false => private
    edited = db.Column(db.Boolean , default = False)
    situation = db.Column(db.String(1) , default = 'n') # s : solved , w : working on it , n : not solved
    is_left_dir = db.Column(db.Boolean , default = True)

    # post relations :
    comments = db.relationship('Comment')
    # likers = db.relationship('User' , secondary=liked_posts , overlaps="liked_posts")
    # dislikers = db.relationship('User' , secondary=disliked_posts , overlaps="disliked_posts")
    # savers = db.relationship('User' , secondary=saved_posts , overlaps="saved_posts")
    # reporters = db.relationship('User' , secondary=reported_posts , overlaps="reported_posts")
    # hidders = db.relationship('User' , secondary=hidden_posts , overlaps="hidden_posts")

class Comment(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    auther = db.Column(db.Integer , db.ForeignKey('user.id'))
    content = db.Column(db.String(500))
    media_files = db.relationship('Media')
    parent_post = db.Column(db.Integer , db.ForeignKey('post.id'))
    created_time = db.Column(db.DateTime)

    # comment relations :
    likers = db.relationship('User' , secondary=liked_comments , overlaps="liked_comments")
    dislikers = db.relationship('User' , secondary=disliked_comments , overlaps="disliked_comments")


class Media(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    file_path = db.Column(db.String(200))
    file_size = db.Column(db.Integer)
    
    prent_post = db.Column(db.Integer , db.ForeignKey('post.id'))    
    prent_comment = db.Column(db.Integer , db.ForeignKey('comment.id'))    

class Shortcuts(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    default_url = db.Column(db.String(200))
    short_url = db.Column(db.String(50))
