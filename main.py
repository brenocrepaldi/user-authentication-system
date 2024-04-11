from controllers.user_controller import Auth


def main():
    auth = Auth()
    auth.authenticate_user()


if __name__ == "__main__":
    main()
