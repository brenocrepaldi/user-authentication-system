class User:
    def __init__(self, username, email, password) -> None:
        self.username = username
        self._email = email
        self.password = password

    def __str__(self) -> str:
        print(f"user: {self.username}, email: {self._email}")
