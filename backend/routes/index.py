from flask import redirect
from . import bp
import os
import subprocess
import time
import requests

#Function to start the React development server if it is not running.
def start_react():
    try:
        #Verify if the React server is already running on port 3000
        requests.get('http://localhost:3000')
        print("O servidor React já está rodando.")
    except requests.ConnectionError:
        print("Servidor React não encontrado. Iniciando o servidor React...")
        #Start the React server in the frontend folder by running the npm start command
        subprocess.Popen(['npm', 'start'], cwd=os.path.join(os.path.dirname(__file__), '../../frontend'), shell=True)

        time.sleep(5)  #Await 5 seconds for the server to start

@bp.route('/')
def index():
    #Try to start the React server when accessing the "/" route
    start_react()
    #Redirect to the React server running on port 3000
    return redirect('http://localhost:3000/')
