from flask import Flask, request
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

# a1 is the database name
db = client.a1

app = Flask(__name__)

@app.route("/")
def Home():
    return {
        "status": 1, 
        "message": "Home!", 
        "playload": {}
    }

@app.route("/about")
def about():
    return {
        "status": 1, 
        "message": "About!", 
        "playload": {}
    }


# Dyanmoic path 
@app.route("/profile/<profileId>")
def profile(profileId):
    return {
        "status": 1, 
        "message": "profile",
        "playload": {"profileId": profileId}
    }



@app.route("/product/<categoryId>/<productId>")
def product(categoryId, productId):
    return {
        "status": 1, 
        "message": "product!",
        "playload": {"categoryId": categoryId,"productId":productId}
    }


# Accending query parameter 
@app.route("/search")
def search():
    q1 = request.args.get("q1")
    print("request.args: ",request.args)

    return {
        "status": 1

    }

