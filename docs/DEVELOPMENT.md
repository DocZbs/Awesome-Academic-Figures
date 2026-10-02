# 本地开发与仓库导航

[返回首页](../README.md) · [打开画廊](https://doczbs.github.io/Awesome-Academic-Figures/)

```text
├── src/           网页、搜索、论文匹配与参考包导出
├── figures/       已收录图文件；每图独立目录
├── data/          画廊目录、主题索引、来源与审核证据
├── docs/          使用、检索、设计与收录文档
│   ├── assets/    README 视觉资源
│   └── ingestion/ 远端收录与外部来源适配
├── scripts/       收录、索引构建、核验与站点维护工具
├── templates/     图元数据与智能体任务模板
├── requirements/  Python 收录依赖
└── .github/       云端收录与 Pages 发布流程
```

[文档索引](README.md) · [数据说明](../data/README.md) · [脚本索引](../scripts/README.md) · [图文件规范](../figures/README.md)

## 轻量本地开发

只检出前端和元数据，避免在本机拉取整套图库：

```sh
git clone --filter=blob:none --sparse https://github.com/DocZbs/Awesome-Academic-Figures.git
cd Awesome-Academic-Figures
git sparse-checkout set src scripts data docs public templates requirements .github
npm ci
npm run dev
```

图像仍按需从 GitHub 加载。`npm run build` 构建静态站点，并生成供智能体读取的主题索引。完整收录、原文件校验与发布在云端执行，见[收录流程](ingestion/REMOTE_STAGING.md)。

