import uvicorn
from fastapi import FastAPI, APIRouter, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pathlib import Path
import re
import string
import jieba
import jieba.posseg as pseg

app = FastAPI()

# 创建一个用于 API 的路由器
api_router = APIRouter()


@api_router.get("/get")
async def read_get():
    return {"Hello": "World"}


@api_router.post("/post")
async def read_root(request: Request):

    request_data = await request.json()
    # return {"message": "数据接收成功",
    #         "data":request_data["userTextInput"]
    #         }
    text = request_data["userTextInput"]
    tags = []
    words = filter_words(text)
    for word in words:
        if (filtered := filter_text(word[0])) is not None:
            keyword = word[0]
            # 标记是否找到关键字
            found = False
            for tag in tags:
                if keyword in tag["tag"]:
                    tag["tagCount"] += 1
                    found = True
                    break

            # 如果没有找到关键字
            if not found:
                new_tag = {"tag": keyword, "tagCount": 1}
                tags.append(new_tag)

    tags.sort(key=lambda x: x["tagCount"], reverse=True)
    # 遍历列表，并使用 enumerate 获取每个元素的索引和值
    for index, item in enumerate(tags):
        item["id"] = index  # 给字典添加一个新的键 "id"，其值为索引

    return list(tags)


def filter_text(text):
    # 去除中英文標點符號
    no_punctuation = re.sub(
        r"[{}]+".format(string.punctuation + "，。！？、；：「」『』（）《》【】"),
        "",
        text,
    )
    # 檢查長度是否大於1
    return no_punctuation if len(no_punctuation) > 1 else None


def filter_words(sentence):
    # 這裡以過濾掉副詞(adverb, 'd')和形容詞(adjective, 'a')為例
    unwanted_pos = {"a", "m", "u", "v", "x", "uj", "dr", "zg", "r"}
    # 使用 posseg.cut 進行分詞和詞性標註
    words = pseg.cut(sentence)

    # 過濾不需要的詞性
    result = [(word, flag) for word, flag in words if flag not in unwanted_pos]
    return list(result)


# 将 API 路由器挂载到 '/api'
app.include_router(api_router, prefix="/api")

# 掛載靜態檔案目錄
app.mount("/", StaticFiles(directory="static"), name="static")


@app.get("/{catchall:path}", response_class=HTMLResponse)
async def catch_all(request: Request, catchall: str):
    # 使用 pathlib 构建路径
    index_path = Path("static/index.html")
    if not index_path.is_file():
        return HTMLResponse(content="Not Found", status_code=404)

    # 读取并返回文件内容
    return HTMLResponse(content=index_path.read_text())


# 允许所有来源
origins = [
    "http://localhost:5173",  # Vue 前端地址
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000",  # 另一种可能的前端地址
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 允许访问的来源列表
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有方法
    allow_headers=["*"],  # 允许所有头
)


if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="localhost")
