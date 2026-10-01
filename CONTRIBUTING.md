# 参与贡献

欢迎补充论文图、修正来源或分类、扩展主题词，以及改进绘图 prompt。

## 提交论文图

请提供完整题目、作者、会议 / 期刊 / arXiv 地址、具体版本、图号（不确定可留未知）、完整图文件与许可依据。获奖不是收录前提；添加获奖标签时附官方奖项来源。整篇 PDF、源码包、未经审核的候选或大规模图片缓存留在云端待审目录。

图片遵循具体论文与第三方素材许可，不能只凭公开下载地址或代码仓库 MIT 协议判断。详见[授权规则](docs/LICENSING.md)和[收录流程](docs/ingestion/REMOTE_STAGING.md)。

## 修正分类和主题

图类、布局与研究主题独立。一张图可以有多个主题或布局标签；编号不是图类。主题词表位于 `src/research-topics.js`，自动标签以明确论文元数据术语为依据，不能仅凭配色、模块外观或会议名猜测。

修改词表后运行 `npm run tags:build`，提交更新后的 `data/research_tags.json`，然后运行 `npm run check`、`npm run check:tokens`、`npm run format:check`、`npm run build`。素材和校验应在具有完整图目录的云端 runner 检查；稀疏检出只用于前端开发。

图号、布局或视觉图类修正须绑定实际参考 / 预览文件 SHA-256，保留原有来源与审核层次。仅核对布局不能把 prompt 标成已验证。

## 来源或权利反馈

请在 [Issues](https://github.com/DocZbs/Awesome-Academic-Figures/issues) 标明图 ID、论文链接与具体问题。明确的错误裁剪、错配来源或权利争议会先移出画廊并保留排除依据，确认后再决定是否恢复。
