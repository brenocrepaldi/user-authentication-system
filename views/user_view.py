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
        return input("email: ")

    @staticmethod
    def get_password():
        return input("password: ")

    @staticmethod
    def confirm_password():
        return input("confirm password: ")

    @staticmethod
    def show_message(message):
        print(message)

    @staticmethod
    def show_error(error):
        print(f"Error: {error}")
