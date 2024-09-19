from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'



@app.route('./home')
def home(name='vijay'):
    return '<h1>This is home page</h1>'.format(name)
