pyinstaller -F -w app.py

taskkill /F /IM app.exe
成功: 處理程序 "app.exe" (PID 27412) 已經終止了。
成功: 處理程序 "app.exe" (PID 26888) 已經終止了。


使用命令行强制结束进程：

在 Windows 上，可以使用命令提示符中的 taskkill 命令。例如：taskkill /F /IM python.exe（如果是 Python 进程）。
在 Linux 或 macOS 上，可以使用 kill 命令。首先使用 ps aux | grep python 来找到对应的进程 ID，然后使用 kill -9 [PID] 来强制结束它。