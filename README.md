# Bala's Dice Roll

A FastAPI-based dice rolling application with a 2-second rolling animation delay and modern web interface.

## Features

- **Roll the Dice**: Randomly generates numbers 1-6 with a realistic 2-second delay
- **Rolling Animation**: Shows a GIF animation during the rolling process
- **Reset Function**: Clear the current result
- **Modern UI**: Clean, responsive design with white background
- **Accessibility**: Proper ARIA labels and semantic HTML

## Prerequisites

- Python 3.8 or higher
- uv package manager

## Installation

### 1. Install uv (if not already installed)

**Windows (Command Prompt):**
```cmd
winget install Astral.UV
```

**Alternative Windows installation:**
- Download the Windows installer from [https://astral.sh/uv](https://astral.sh/uv)
- Run the downloaded `.exe` file

**macOS/Linux:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Clone or download this project

Navigate to your desired directory and ensure all project files are present.

### 3. Install dependencies

```cmd
cd fastapi-dice
uv sync -r requirements.txt
```

## Running the Application

### Start the server

```cmd
uv run uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### Access the application

Open your web browser and go to: `http://localhost:8000`

## Project Structure

```
fastapi-dice/
├── main.py              # FastAPI application
├── requirements.txt     # Python dependencies
├── templates/
│   └── index.html      # Main HTML template
├── static/
│   ├── styles.css      # CSS styles
│   ├── app.js          # JavaScript functionality
│   └── rolling.gif     # Rolling animation (add your own)
└── README.md           # This file
```

## Adding Your Rolling Animation

1. Place your rolling GIF file at `static/rolling.gif`
2. The app will automatically display it during the 2-second rolling delay
3. If no GIF is found, a text-based "Rolling..." message will appear instead

## Customization

- **Port**: Change the port in the uvicorn command (e.g., `--port 8001`)
- **Host**: Use `--host 127.0.0.1` for local-only access
- **Delay**: Modify the `asyncio.sleep(2)` value in `main.py` to change the rolling delay

## Troubleshooting

### Port already in use
```cmd
uv run uvicorn main:app --host 0.0.0.0 --port 8001 --reload
```

### Dependencies not found
```cmd
uv sync -r requirements.txt --reinstall
```

### Permission denied
- On Windows, run Command Prompt as Administrator
- On macOS/Linux, check file permissions

## Development

The application uses:
- **FastAPI**: Modern Python web framework
- **Jinja2**: HTML templating
- **Uvicorn**: ASGI server
- **Vanilla JavaScript**: No external JS dependencies
- **CSS3**: Modern styling with animations

## License

This project is open source and available under the MIT License.
