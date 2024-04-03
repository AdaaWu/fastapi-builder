from fastapi import FastAPI
from pathlib import Path
import sys, uvicorn

app = FastAPI()

# Use pathlib to get the current working directory
root_path = Path.cwd()
sys.path.append(str(root_path))

@app.get("/gaga")
async def get():
    return "Hello! World!"

if __name__ == "__main__":
    # Use pathlib to get the script name
    name_app = Path(__file__).stem  # Get the name of the script without extension

    log_config = {
        "version": 1,
        "disable_existing_loggers": True,
        "handlers": {
            "file_handler": {
                "class": "logging.FileHandler",
                "filename": "logfile.log",
            },
        },
        "root": {
            "handlers": ["file_handler"],
            "level": "INFO",
        },
    }
    uvicorn.run(f'{name_app}:app', host="0.0.0.0", port=8000, reload=False, log_config=log_config)
