# 每张图的文件目录

[返回项目首页](../README.md) · [授权规则](../docs/LICENSING.md)

```text
figures/<figure-id>/
├── metadata.json      论文身份、分类、来源、许可与原文件校验值
├── preview.webp       网页预览
├── original.*         收录的来源图文件（如可取得）
├── analysis.md        图的结构描述与核验状态
├── prompt.md          绘图 / 适配 prompt 及草稿状态
├── agent.md           交给智能体的适配说明
├── extraction.json    提取与原文件记录
└── ATTRIBUTION.md     署名、来源、协议与转换说明
```

以每图 `metadata.json` 中的 `assets` 和 `original_assets` 为准，部分作者源码图还包含多个原文件与 `figure.tex`。批量来源 JPEG / PNG 不冒充作者矢量原图或绘图代码。准确图号未知时明确保留未知。

图目录使用稳定 ID，不按主题或会议复制到多个文件夹。多主题关联由 `data/research_tags.json` 索引，避免同图重复保存。本地开发采用稀疏检出，不拉取整个图目录；素材在云端收录和检查，网页按需加载。
