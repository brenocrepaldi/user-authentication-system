# models/user.py
class User:
    users_list = []

    def __init__(self, username, email, password):
        self.username = username
        self._email = email
        self._password = password
        self.users_list.append(
            {
                "username": self.username,
                "email": self._email,
                "password": self._password,
            }
        )

    def __str__(self):
        return f"user: {self.username}, email: {self._email}"
