from fastapi import FastAPI, Request, APIRouter
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import sys, uvicorn
import string
import re
import jieba
import jieba.posseg as pseg

app = FastAPI()

# 创建一个用于 API 的路由器
api_router = APIRouter()


# router 寫在這
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
                if keyword in tag['tag']:
                    tag['tagCount'] += 1
                    found = True
                    break

            # 如果没有找到关键字
            if not found:
                new_tag = {
                        "tag": keyword,
                        "tagCount": 1
                }
                tags.append(new_tag)
                
    tags.sort(key=lambda x: x['tagCount'], reverse=True)
    # 遍历列表，并使用 enumerate 获取每个元素的索引和值
    for index, item in enumerate(tags):
        item["id"] = index  # 给字典添加一个新的键 "id"，其值为索引
       
    return list(tags)     

# 将 API 路由器挂载到 '/api'
app.include_router(api_router, prefix="/api")

# Use pathlib to get the current working directory
root_path = Path.cwd()
sys.path.append(str(root_path))

#

# 判断是否以单文件形式运行
if getattr(sys, 'frozen', False):
    # # 如果是，使用 sys._MEIPASS 作为基础路径
    # base_dir = Path(sys._MEIPASS)
    # 如果应用被打包
    base_dir = Path(sys.executable).parent
else:
    # 如果不是，使用 __file__ 的路径
    base_dir = Path(__file__).parent
    
frontend_dir = base_dir / "frontend"
app.mount("/", StaticFiles(directory=str(frontend_dir), html=True), name="static")
# sys._MEIPASS 是 PyInstaller 设置的一个特殊属性，用于指示解压缩的临时目录。当以单文件形式运行时，应用应该从这个目录中查找 frontend。在开发环境中，应用将从原始代码目录下查找它。


def filter_words(sentence):
    # 這裡以過濾掉副詞(adverb, 'd')和形容詞(adjective, 'a')為例
    unwanted_pos = {'a', 'm', 'u', 'v', 'x', 'uj', 'dr', 'zg', 'r'}
    # 使用 posseg.cut 進行分詞和詞性標註
    words = pseg.cut(sentence)

    # 過濾不需要的詞性
    result = [(word, flag) for word, flag in words if flag not in unwanted_pos]
    return list(result)

def filter_text(text):
    # 去除中英文標點符號
    no_punctuation = re.sub(
        r"[{}]+".format(string.punctuation + "，。！？、；：「」『』（）《》【】"),
        "",
        text,
    )
    # 檢查長度是否大於1
    return no_punctuation if len(no_punctuation) > 1 else None




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
