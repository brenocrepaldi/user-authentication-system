class UserView:
    @staticmethod
    def show_message(message):
        return {"message": message}

    @staticmethod
    def show_error(error):
        return {"error": error}
