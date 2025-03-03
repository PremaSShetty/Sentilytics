from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_cors import CORS 
import mysql.connector
import hashlib  # For password hashing

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
app.secret_key = '436c90dbca600d1b38fe6262fb375ef9e57f76c163774c915646bce31c78e0cd80d00a57a8ad7b11e6e04b05a9a7ebf00325959871b61a69eb2ef302ca6ecbb41cb4d222b5fa73e8f099f99b5bea55db8e8a52a8eca7939fd46d023bec9250b0b92522af69052aff33f190c5cd42465c073fd921511dbcd9ff996230435084dac293bc1ef12149c5bdbb739a2ac2cab32aea2d35d88f084c2ed49c9871a3ecf1464a37d1dca51089e3954de5774ddecfdcdfc238731570513e4c544a50eae7808016d1eb5f385fdb0bb4f7299e0104438981dd001d7cfbe2a13d168a165012e33e89680fbbccde6c90eda10024d27cd5463e5a33e4dbd462e1196482456dfcb2'  # Important for session management

# MySQL Configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'syntilytics_db'
}

def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

def hash_password(password):
    """Hashes a password using SHA-256."""
    return hashlib.sha256(password.encode()).hexdigest()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()  # Read JSON request from React
    email = data.get('email')
    password = data.get('password')
    hashed_password = hash_password(password)

    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, hashed_password))
        user = cursor.fetchone()
        cursor.close()
        conn.close()

        if user:
            session['user_id'] = user['id']
            return jsonify({'message': 'Login successful', 'redirect': '/dashboard'}), 200
        else:
            return jsonify({'error': 'Invalid credentials'}), 401
    else:
        return jsonify({'error': 'Database connection error'}), 500


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No JSON data provided'}), 400

    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')

    if not all([first_name, last_name, email, password]):
        return jsonify({'error': 'Missing required fields'}), 400

    hashed_password = hash_password(password)  # Hash the password

    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        try:
            cursor.execute(
                "INSERT INTO users (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)",
                (first_name, last_name, email, hashed_password)
            )
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({'message': 'Signup successful'}), 201  # Send success response
        except mysql.connector.Error as err:
            conn.rollback()
            cursor.close()
            conn.close()
            return jsonify({'error': 'Database error', 'details': str(err)}), 500
    else:
        return jsonify({'error': 'Database connection error'}), 500

@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return render_template('dashboard.html') #create a dashboard.html
    else:
        return redirect(url_for('login'))

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)
    return jsonify({'message': 'Logged out successfully', 'redirect': '/login'}), 200




if __name__ == '__main__':
    app.run(debug=True)