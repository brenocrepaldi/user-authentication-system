from flask import Flask, request

from backend.controllers.user_controller import UserController

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    print(data)
    return UserController.authenticate_user(data)


if __name__ == "__main__":
    app.run(debug=True)
