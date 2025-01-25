from flask import request
from flask_restful import Resource

from db import mdb 

class Users (Resource) :
    def get(self):
        users = []
        for item in mdb.users.find({}):
            users.append(item)
        return {
            "status": 1,
            "cls": "success",
            "msg": "User List API",
            "payload": {
                "users": users,
            },
        }

