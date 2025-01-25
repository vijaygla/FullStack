from flask import Flask 
request = "http://127.0.0.1:5000/s?bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=09862cb8-4f91-424e-8c47-6eb24e7b88ed&pd_rd_w=tA3Ki&pd_rd_wg=1rowJ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=006N0JB0FZ5FXY25PJ0E&ref=pd_hp_d_atf_unk"

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

