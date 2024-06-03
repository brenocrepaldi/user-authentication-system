from flask import Flask, request

from backend.controllers.user_controller import UserController

app = Flask(__name__)


@app.route("/user", methods=["GET", "POST"])
def user():
    # Auth new user
    if request.method == "POST":
        data = request.json
        return UserController.authenticate_user(data)

    # Show user list
    if request.method == "GET":
        return UserController.show_users_list()


if __name__ == "__main__":
    app.run(debug=True)
