# builtin modules :
import os
from datetime import timedelta

# external modules :
from flask import Flask , render_template , request , url_for , make_response , json
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import current_user

# third party modules :
from models import *
from views import Oops
from RestApi import Oops_api 
from auth import login_manager

app = Flask(__name__)
app.app_context().push()
app.register_blueprint(Oops)
app.register_blueprint(Oops_api)
cors = CORS(app)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_NAME = 'Oops.db'

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'bouzidandhissupersecretkey'

migrate = Migrate(db=db)

db.init_app(app)
login_manager.init_app(app)
migrate.init_app(app)

# create db if not exists :
if DB_NAME not in os.listdir(os.path.join(BASE_DIR , 'instance')) :
    db.create_all()

@app.route('/')
def index() :
    if not current_user.is_anonymous :
        return render_template('main.html',path=request.host_url)

    return render_template('intro.html')


if __name__ == '__main__' :
    app.run(debug = True)