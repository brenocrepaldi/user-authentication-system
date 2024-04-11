from models.user import User
from views.user_view import UserView


class UserController:
    @classmethod
    def authenticate_user(cls):
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

        max_attempts = 3
        for attempt in range(max_attempts):
            password_verification = UserView.confirm_password()

            if password_verification == password:
                break
            else:
                if attempt == max_attempts - 1:
                    return UserView.show_message("Maximum attempts reached. Exiting...")
                else:
                    UserView.show_message("Passwords don't match. Please try again.")

        cls.create_user(username, email, password)

    @classmethod
    def create_user(cls, username, email, password):
        User(username, email, password)
        UserView.show_message(f"authenticated user: {username}")
        cls.show_users_list()

    def show_users_list():
        users = User.users_list
        for user in users:
            UserView.show_user(user["username"], user["email"])
