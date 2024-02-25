from flask import Flask, Response, jsonify
import csv
import json
app = Flask(__name__)

csv_file_path = "api/data.csv"
@app.route('/api/data')
def get_csv_file():
    data = []
    with open(csv_file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    json_data = json.dumps(data, indent=4)

    # Return the CSV data as a response with the appropriate content type
    return Response(json_data)

if __name__ == '__main__':
    app.run(debug=True)
