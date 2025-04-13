# Chatbot Application

A simple chatbot application built with FastAPI and JavaScript.

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory with your API keys:
```
OPENAI_API_KEY=your_api_key_here
```

## Running the Application

1. Start the server:
```bash
uvicorn app:app --reload
```

2. Open your web browser and navigate to:
```
http://127.0.0.1:8000/static/index.html
```

## Project Structure

- `app.py` - FastAPI application and backend logic
- `static/` - Frontend files
  - `index.html` - Main HTML file
  - `styles.css` - CSS styles
  - `script.js` - JavaScript functionality
- `requirements.txt` - Python dependencies
- `.env` - Environment variables (not tracked in git)

## Features

- Real-time chat interface
- FastAPI backend
- Responsive design
- Auto-reloading development server

## Security Note

Never commit your `.env` file or expose your API keys. The `.gitignore` file is configured to exclude sensitive information. # aichatbot
