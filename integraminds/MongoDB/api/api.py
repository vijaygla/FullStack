# App main file

from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

# call home 
from home import Home
api.add_resource(Home, '/')

# call login
from login import Login
api.add_resource(Login, '/login')

# call user
from users import Users
api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(debug=True)

