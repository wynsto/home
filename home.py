from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!!</p>"
@app.route("/add")
def add():
    a = request.args['a']
    b = request.args['b']
    return str(int(a) + int(b))
