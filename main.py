from controllers.user_controller import UserController


def main():
    auth = UserController()
    auth.authenticate_user()


if __name__ == "__main__":
    main()
