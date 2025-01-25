from flask import Flask,request
from pymongo import MongoClient


from flask_cors import CORS   #pip install flask_cors

app = Flask(__name__)

cors=CORS(app,resources={r"/*":{"origins":"*"}})

client=MongoClient('mongodb://localhost:27017/')

mdb=client['pro123']

@app.route("/register", methods=['POST'])
def register():
    input_data = request.get_json()
    name = input_data.get('username')
    email = input_data.get('email')
    password = input_data.get('password')
    phonenumber = input_data.get('phonenumber')
    user = mdb.users.find_one({'email':email})
    print(user)
    if user and '_id' in user:
        return {
            'status': 0,
            'msg':"user exit",
            'class':"success"
        }
    count = mdb.users.count_documents({})
    users={
        "_id":count+1,
        "name":name,
        "email":email,
        "password":password,
        "Phonenumber" : phonenumber,
    }
    mdb.users.insert_one(users)
    return "inserted successfully"

@app.route("/getdata")
def getData():
    users = []
    for user in mdb.users.find():
        users.append(user)
    return users

