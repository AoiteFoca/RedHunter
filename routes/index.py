from flask import render_template, request, jsonify
from . import bp
#from database.dbFunctions import get_db

@bp.route('/')
def home():
    return render_template ("index.html")