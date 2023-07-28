from app import User , Post , db
from extensions import like_post , get_post , get_user
def del_posts() :
    for post in Post.query.all() :
        db.session.delete(post)
    db.session.commit()

def like(post , user):
    like_post(get_post(post),get_user(user))

like(1,1)
# del_posts()
# from extensions import like_post , get_post , get_user

# # like_post(get_post(1),get_user(1))

# print(get_post(4).likers)
# print(get_user(1).liked_posts)