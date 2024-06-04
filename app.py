from flask import Flask, request

from backend.controllers.user_controller import UserController

app = Flask(__name__)


# Authenticate new user
@app.route("/user/authenticate", methods=["POST"])
def authenticate_user():
    data = request.json
    return UserController.authenticate_user(data)


# Show user list
@app.route("/user/list", methods=["GET"])
def list_users():
    return UserController.show_users_list()


if __name__ == "__main__":
    app.run(debug=True)
