from flask import Flask, request, json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return json.dumps({'ip': request.remote_addr, 'headers': {k:v for k, v in request.headers.items()}})
@app.route("/add")
def add():
    a = request.args['a']
    b = request.args['b']
    return str(int(a) + int(b))

@app.route("/telegram/webhook", methods = ['GET', 'POST', 'DELETE'])
def webhook():
    print(request.json)
    return request.json
