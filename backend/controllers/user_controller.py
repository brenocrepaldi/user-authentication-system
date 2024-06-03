from flask import jsonify

from backend.models.user import User
from backend.views.user_view import UserView


class UserController:
    @classmethod
    def authenticate_user(cls, data):
        UserView.show_message("Creating new user...")

        username = data.get("username")
        if not username:
            return jsonify({"error": "Invalid username"}), 400

        email = data.get("email")
        if not email:
            return jsonify({"error": "Invalid email"}), 400

        password = data.get("password")
        if not password:
            return jsonify({"error": "Invalid password"}), 400

        max_attempts = 3
        for attempt in range(max_attempts):
            password_verification = data.get("confirm_password")
            if password_verification == password:
                break
            else:
                if attempt == max_attempts - 1:
                    return (
                        jsonify({"error": "Maximum attempts reached. Exiting..."}),
                        400,
                    )
                else:
                    return (
                        jsonify({"error": "Passwords don't match. Please try again."}),
                        400,
                    )

        cls.create_user(username, email, password)
        return jsonify({"message": f"Authenticated user: {username}"}), 200

    @classmethod
    def create_user(cls, username, email, password):
        User(username, email, password)
        UserView.show_message(f"Authenticated user: {username}")

    @classmethod
    def show_users_list(cls):
        users = User.users_list
        return users
