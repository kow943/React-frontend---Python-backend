from flask import Flask

app = Flask(__name__)

@app.route("/loanInfo", methods = ['GET'])
def loanYears():
    LoanList = {
        "company":['10', '15', '20']
            }
    return LoanList

if __name__ == '__main__':
    app.run(debug=True)