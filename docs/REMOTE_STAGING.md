# 远端源码收录与轻量本地预览

批量材料和 Git 发布在 SSH 中转服务器处理；本机只同步源码、JSON 索引与维护者文本。不要反向同步服务器的 `cache/`、`tmp/source-review/`、新收录的 `figures/` 或 `.git/`。

## 初始化服务器

在服务器的项目目录创建 Python 虚拟环境，安装 `requirements-ingest.txt`。缓存和候选素材通过 `.gitignore` 排除，不得加入 Git。初始批次使用 `jdp` 作为服务器别名，其他维护者可替换为自己的主机。

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-ingest.txt
.venv/bin/python scripts/discover_awards.py
.venv/bin/python scripts/resolve_papers.py
```

论文链接解析只读取官方 HTML，不下载论文 PDF。匹配 arXiv 时必须核对完整题目或有证据的改题关系，不能仅凭关键词或猜测编号。

## 提取原始图文件

准备经过标题核对的 `seeds.json`，例如：

```json
[{"id":"2103.14030","title":"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"}]
```

在服务器运行：

```sh
.venv/bin/python scripts/collect_arxiv_sources.py --seeds seeds.json
```

收录器先检查 versioned arXiv 页面中的具体许可，仅对政策支持的许可下载同版本源码包。遍历 `includegraphics`，记录独立图注编号，识别子图图注、minipage 中的多个编号与 `captionof{figure}`。保留原文件、TeX 片段与 SHA-256，单幅 PDF/位图生成白底 PNG 与 WebP 预览。

多文件组合、overpic 叠加或内嵌 TeX 绘图留待完整组合审核。源码包不执行，不全量解压，拒绝路径穿越、链接和超限成员。源站只返回整篇 PDF 时跳过。默认在候选素材保存后移除完整源码包；确需后续处理时可显式 `--retain-source-archives`。

## 核对后发布

查看候选原图与对应的图注，确认完整性、编号、授权、第三方素材、分类和具体结构描述。将审核记录绑定源包 SHA-256；未审图留在 `tmp/source-review/`，公共待审 JSON 只记元数据。

```sh
.venv/bin/python scripts/publish_reviewed.py --manifest data/reviews/first-batch.json
.venv/bin/python scripts/build_catalog.py
.venv/bin/python scripts/check_ingestion.py
```

审查 manifest 是人工核对结果，不应由候选发现器自动批准。目录构建拒绝缺少授权证据或视觉核对的图片，并验证原文件校验值。只有 `figures/` 中经过核对的文件进入 GitHub；不提交源包、整篇论文 PDF、缓存、候选图片和服务器依赖。

本地仅更新 `data/catalog.json` 与其他小型 JSON。`prepare_site.py` 检测远程素材 URL，使用内联分析和 prompt，不复制服务器原图。浏览器按需加载图片；只在用户点击下载参考包时取回其选中的原文件。

历史 CollabLLM 两张 PMLR 裁图按正式出版协议授权，保留原 PDF hash 与裁图记录。旧 `stage_figures.py` 整篇 PDF 回退默认关闭，需明确参数才可运行；新增批次使用源码流程。
