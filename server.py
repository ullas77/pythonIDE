from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run_code():
    code = request.json.get("code")
    try:
        output = subprocess.check_output(['python', '-c', code], stderr=subprocess.STDOUT, timeout=5)
        return jsonify({"output": output.decode()}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"output": e.output.decode()}), 400

if __name__ == "__main__":
    app.run(debug=True)
