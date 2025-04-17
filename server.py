from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def serve_scraped_data():
    try:
        with open('scraped_data.json') as file:
            data = json.load(file)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
