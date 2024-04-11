class UserView:
    @staticmethod
    def get_username():
        user = input("user: ").strip()
        if user:
            return user
        else:
            return False

    @staticmethod
    def get_email():
        email = input("email: ").strip()
        if email:
            return email
        else:
            return False

    @staticmethod
    def get_password():
        password = input("password: ").strip()
        if password:
            return password
        else:
            return False

    @staticmethod
    def confirm_password():
        password = input("confirm password: ").strip()
        if password:
            return password
        else:
            return False

    @staticmethod
    def show_message(message):
        print(message)

    @staticmethod
    def show_error(error):
        print(f"Error: {error}")

    @staticmethod
    def show_user(user, email):
        print(f"user: {user}, email: {email}")
