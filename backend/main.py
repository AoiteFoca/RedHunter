from flask import Flask
#from database.dbFunctions import init_app, init_db
from routes import bp

app = Flask(__name__, static_folder="../frontend/build")
app.config["SECRET_KEY"] = "random string"

# Inicializar o banco de dados
#init_app(app)

# Registrar o Blueprint das rotas
app.register_blueprint(bp)

# @app.route('/initdb')
# def initialize_db():
#     init_db()
#     return "<a href='/'>Banco de dados inicializado!</a>"

#Starts server in debug mode
if __name__ == '__main__':
    app.run(debug=True, port=5000)