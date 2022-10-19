from flask import Flask, request, json
from flask_admin import Admin

app = Flask(__name__)
# set optional bootswatch theme
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'

admin = Admin(app, name='microblog', template_mode='bootstrap3')
# Add administrative views here

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
