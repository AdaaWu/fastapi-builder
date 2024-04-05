import uvicorn
from fastapi import FastAPI, APIRouter,Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pathlib import Path

app = FastAPI()

# 创建一个用于 API 的路由器
api_router = APIRouter()

@api_router.get("/get")
async def read_get():
    return {"Hello": "World"}
# 将 API 路由器挂载到 '/api'
app.include_router(api_router, prefix="/api")

# 掛載靜態檔案目錄
app.mount("/", StaticFiles(directory="static"), name="static")

@app.get("/{catchall:path}", response_class=HTMLResponse)
async def catch_all(request: Request, catchall: str):
    # 使用 pathlib 构建路径
    index_path = Path('static/index.html')
    if not index_path.is_file():
        return HTMLResponse(content="Not Found", status_code=404)
    
    # 读取并返回文件内容
    return HTMLResponse(content=index_path.read_text())

# 允许所有来源
origins = [
    "http://localhost:5173",  # Vue 前端地址
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000"# 另一种可能的前端地址
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 允许访问的来源列表
    allow_credentials=True,
    allow_methods=["*"],    # 允许所有方法
    allow_headers=["*"],    # 允许所有头
)


if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="localhost")