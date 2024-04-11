from models.user import User
from views.user_view import UserView


class UserController:
    def __init__(self):
        pass

    def authenticate_user(self):
        UserView.show_message("creating new user...")
        username = UserView.get_username()
        email = UserView.get_email()
        password = UserView.get_password()
        password_verification = UserView.confirm_password()
