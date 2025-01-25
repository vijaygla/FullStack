from flask import request
from flask_restful import Resource
from db import mdb


class Login(Resource):
    def post(self):
        from users import Users
        input = request.get_json()
        print("input:",input)

        #email = input.get("email")
        email = input["email"]
        print("email:",email)

        password = input.get("password")
        print("password:",password)

        user = mdb.users.find_one({"email": email})

        if not (user and "_id" in user):
            return {
                "status":0,
                "cls": "danger",
                "msg": "Given Account not exists. kindly use the signup link to create an account",
                "playload": {
                    "input": input,
                    "user": user,
                },
            }
        
        status = user["status"]
        dbpass = user["password"]

        if status != "active":
            return {
                "status": 0,
                "cls": "danger",
                "msg": "Email exist but status is not active",
                "playload": {
                    "input": input,
                    "user": user,
                },
            }
        
        if password != dbpass:
            return {
                "status": 0,
                "cls": "danger",
                "msg": "Email and password is not correct",
                "playload": {
                    "input": input,
                    "user": user,
                },
            }
        
        return {
            'status': 1,    
            "cls":"success",
            "msg": "User List Api",
            "playload":{
                "input": input,
                "user": user,
            },
        }
    

