from flask import Flask, request
from flask_cors import CORS
from backend.calculation import calculate
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:sony2014@localhost/postgres'
db = SQLAlchemy(app)

class Loan(db.Model):
    __tablename__ = 'loans'
    id = db.Column(db.BigInteger, primary_key = True)
    totalAm = db.Column(db.Float(10,2))
    loanAm = db.Column(db.Float(10,2))
    interestAm = db.Column(db.Float(10,2))
    perMonthIntAm = db.Column(db.Float(10,2))

    def __init__(self, a, b, c, d):
        self.totalAm = a
        self.loanAm = b
        self.interestAm = c
        self.perMonthIntAm = d
    

@app.route("/")
def index():
    return "Hello World"

@app.route("/info", methods = ['POST', 'GET'])
def info():
    display = "none"
    if request.method == "POST":
        infoLog = request.get_json()
        permonth, totalAm, intAm, amount = calculate(infoLog)

        new = Loan(totalAm, amount, intAm, permonth)
        db.session.add(new)
        db.session.commit()

        print(permonth)
    
    if request.method == "GET":
        return {'sums':'', 'display':display}

    return "Backend"

if __name__ == '__main__':
    app.run(debug=True)