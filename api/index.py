from flask import Flask, Response
import csv
import json
import os
app = Flask(__name__)
csv_file_path = os.getcwd() + "/api/data.csv"
@app.route('/api/data')
def get_csv_file():
    data = []
    with open(csv_file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    json_data = json.dumps(data)
    return Response(json_data)