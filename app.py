from flask import Flask, request
from flask_cors import CORS
from backend.calculation import calculate

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello World"

@app.route("/info", methods = ['POST', 'GET'])
def info():
    if request.method == "POST":
        infoLog = request.get_json()
        c = calculate(infoLog)
        print(c)

    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)