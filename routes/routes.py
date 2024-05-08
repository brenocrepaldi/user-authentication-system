from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/login", methods=["GET", "POST"])
def handle_form_data():
    if request.method == "POST":
        data = request.json
        # Faça algo com os dados recebidos, por exemplo, salvar em um banco de dados
        print("Dados recebidos:", data)
        # Retorna uma resposta opcional para o cliente
        return jsonify({"message": "Dados recebidos com sucesso!"})


if __name__ == "__main__":
    app.run(debug=True)
