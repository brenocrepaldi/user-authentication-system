from models.user import User
from views.user_view import UserView


class UserController:
    def __init__(self):
        pass

    def authenticate_user(self):
        UserView.show_message("creating new user...")
        username = UserView.get_username()
        if not username:
            return UserView.show_error("Invalid username")
        email = UserView.get_email()
        if not email:
            return UserView.show_error("Invalid email")
        password = UserView.get_password()
        if not password:
            return UserView.show_error("Invalid password")
        password_verification = UserView.confirm_password()
