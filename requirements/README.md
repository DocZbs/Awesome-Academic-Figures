# Python 收录依赖

- `staging.txt`：单图转换和预览所需的 PyMuPDF、Pillow。
- `ingest.txt`：包含 staging 依赖及论文 / 页面解析依赖。

在云端或 SSH 服务器的仓库根目录安装：

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements/ingest.txt
```

本地仅运行前端时不需要安装这些 Python 素材依赖。原图和候选缓存留在云端，见[收录说明](../docs/ingestion/REMOTE_STAGING.md)。
