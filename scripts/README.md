# 脚本导航

[项目首页](../README.md) · [收录流程](../docs/ingestion/REMOTE_STAGING.md)

| 环节 | 入口 |
| --- | --- |
| 前端预览与静态资源 | `prepare_site.py`, `generate_tokens.mjs` |
| 多主题索引 | `build_research_tags.mjs`（`npm run tags:build`） |
| 官方奖项与论文解析 | `discover_awards.py`, `resolve_papers.py` |
| 提取 arXiv 单幅原图 | `collect_arxiv_sources.py` |
| 导入已有来源集合 | `bulk_import_external.py`, `expand_catalog.py` |
| 来源适配和核验 | `bulk_sciforma_candidates.py`, `bulk_sciforma_metadata.py`, `bulk_openreview_snapshot_audit.py`, `verify_external_metadata.py` |
| 通过审核后发布 | `publish_reviewed.py`, `deduplicate_figures.py`, `reconcile_external_collection.py` |
| 云端构建完整图库目录 | `build_catalog.py` |
| 布局 / 图类覆盖 | `layout_annotations.py`, `classification_annotations.py`, `assemble_layout_review.py` |
| JS 行为检查 | `check_site.mjs`, `check_matching.mjs`, `check_search.mjs`, `check_figure_details.mjs` |
| Python 素材与证据检查 | `check_ingestion.py`, `check_layout_annotations.py`, `check_classification_annotations.py`, `check_bulk_import_external.py` |

Python 文件保留同一模块目录，维持已有 CLI 和相互导入路径。依赖归到 `requirements/`。不要在仅有稀疏检出的本机运行 `build_catalog.py`：它扫描完整 `figures/`，会将小样本误当成整个库存。只需运行 `npm run dev` 或 `npm run build` 使用已提交目录。
