from models.user import User
from views.user_view import UserView


class UserController:
    def __init__(self):
        pass

    def authenticate_user():
        UserView.show_message("creating new user...")
        username = UserView.get_username()
        email = UserView.get_email()
        password = UserView.create_password_input()
        password_verification = UserView.confirm_password_input()
