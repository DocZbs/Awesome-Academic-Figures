# 数据目录

[返回项目首页](../README.md)

| 路径 | 用途 |
| --- | --- |
| `catalog.json` | 当前已发布图形库存；数量、来源、分类与资源 URL 的入口 |
| `research_tags.json` | 面向读者和智能体的多主题索引、词表与逐项证据 |
| `layout_annotations.json` | 绑定预览 / 原文件 SHA-256 的宏观布局覆盖 |
| `classification_annotations.json` | 独立视觉图类核对，不升级 prompt 状态 |
| `batches/` | 批次来源、审核与替换审计 |
| `external/` | 冻结的外部来源索引、论文与许可证据 |
| `reviews/` | 精选图人工审核 manifest |
| `crops/` | 历史精选图裁剪记录 |
| `award_inventory.json`, `coverage.json` | 官方奖项条目与部分会议年份覆盖；不代表整个图库全部获奖 |
| `review_queue.json`, `source_collection_report.json` | 待审元数据与来源核查 |
| `figure-aliases.json` | 图片去重与旧 ID 记录 |
| `visual_review_batch_20261001.json`, `expansion_release_20261001.json` | 历史批次与当前发布统计 |

历史证据保留原路径，避免破坏来源追溯。运行时入口和构建器也使用这些固定路径。临时候选、完整论文 PDF、源码包与图片缓存不放进数据目录。有关字段、主题 ID 和检索规则，见[搜索说明](../docs/SEARCH_AND_TAGS.md)。
