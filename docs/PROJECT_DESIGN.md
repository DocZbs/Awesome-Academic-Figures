# Awesome Academic Figures：设计方案

这是画廊设计方案。首批已发布 11 篇获奖论文的 18 幅图，批量提取与 Git 发布在 SSH 中转服务器完成。具体库存和授权以 README、data/catalog.json 与各图元数据为准；下文也包含尚待实现的设计方向。

## 名称与定位

推荐仓库名：`Awesome-Academic-Figures`。

展示名称：**Awesome Academic Figures**。

中文副标题：**顶会获奖论文 Figure 1 / Figure 2 参考与 AI 改绘画廊**。

英文简介：**A curated gallery of Figure 1 and Figure 2 from award-winning AI papers, with visual breakdowns and reusable prompts for AI-assisted adaptation.**

名称保持宽泛，首批来源聚焦顶会获奖论文；以后可以增加优秀非获奖论文和原创模板，以明确的 collection 字段区分。

当前核心范围由用户指定：主要找正文中的 Figure 1 与 Figure 2。其余图号、表格和补充材料不属于首批核心覆盖要求，可作为以后独立的精选扩展。

## 读者体验

用户已确定：分类支持多种维度，默认维度是图形类型。

读者带着“我需要一张三阶段方法框架图”进入画廊，先选择图形类型，再用用途、版式与来源等条件缩小范围，查看大图与结构分析，选作参考，填入自己的内容并下载参考包，然后交给智能体。

首页：醒目的画廊入口、精选预览、按图形类型浏览、项目定位和来源覆盖统计。

画廊默认按图形类型组织单图卡片：框架图、流程图、概念示意图、定性对比图、数据图、多面板组合图。数据图再细分折线、柱状、散点和热力图等。每张卡片展示完整预览、图形短标题、少量标签、会议年份、图号和选作参考/收藏操作。图片按原始比例完整显示，统一容器不裁掉图的内容。

用户可切换浏览维度：图形类型（默认）、用途、版式、研究领域、论文来源。维度切换改变分类入口，底层使用同一份图像条目。支持“只看 Figure 1 / 只看 Figure 2”筛选。标题描述图，例如“三阶段训练流程与并行分支”，完整论文标题放在来源信息中。

论文详情页并排放 Figure 1 和 Figure 2，宽屏并排，小屏上下排列；保留同篇双图导航和整篇参考包下载，便于组合借鉴两幅图的叙事与结构。缺少第二幅图时显示“正文无 Figure 2”或“待提取”，区分真实缺失与尚未完成。

详情页：原图或授权预览、来源链接、页码/图号/子图编号、原图注、结构分析、可替换变量、prompt、可用代码和改绘示例。每个条目提供稳定链接，例如 `#/figure/<id>`，可直接分享。

详情页操作：复制 prompt、复制含来源与任务变量的智能体指令、下载参考包、打开论文。复制文本不等于复制图片；参考包负责交付图片文件。若只有来源链接，应明确提示需要智能体访问来源或用户自行提供图片。

初版可采用纯静态网站，托管于 GitHub Pages。由条目元数据生成 `catalog.json` 和 README 索引；搜索和筛选在浏览器内完成。只维护一份条目数据，避免 README 和网页人工重复维护。

## 分类原则

分类字段相互独立，允许同一幅图拥有多个标签；一幅图只保存一份。默认入口采用图形类型，其他维度作为可切换入口和组合筛选。每图记录一个主要类型以便默认分组，并可添加其他类型标签；多面板属性和组成图形分别记录，方便通过其中的框架图或折线图找到组合图。

| 维度 | 示例 | 用途 |
| --- | --- | --- |
| 图形类型 | architecture, flowchart, conceptual, qualitative, line, bar, scatter, heatmap, multi-panel | 默认浏览入口，选择图形形式 |
| 科研表达用途 | method-overview, workflow, comparison, ablation, mechanism, qualitative | 按表达目的辅助筛选 |
| 版式 | left-to-right, top-to-bottom, parallel-branches, grid, two-column | 选择结构 |
| 外观 | muted-palette, monochrome, flat-vector, rounded-blocks | 选择视觉风格 |
| 研究领域 | vision, nlp, rl, generative-models, theory | 了解适用情境 |
| 图号 | Figure 1, Figure 2 | 直接选择第一幅或第二幅图 |
| 来源 | venue, publication_year, track, award | 追溯会议与论文 |
| 复用状态 | prompt_status, code_status, adaptation_status | 判断可直接使用程度 |

颜色、长宽比、面板数属于结构化字段。UI 显示中文名称，内部采用固定英文标签，另建中英文别名以支持搜索。

同一维度多选采用“或”（例如框架图或流程图），不同维度采用“且”（例如框架图且横向且 CVPR）。显示已选条件、结果数量和清除筛选入口；筛选与浏览维度写入可分享链接。空结果提供清除单项条件的操作，不自动改变用户选择。

## 挑选交互

`Select / 选作参考`：加入当前绘图任务的参考栏，可以取消选择。允许标记借鉴布局、配色、模块表达或面板组织。改变筛选不会丢失已选参考。

`Star / 收藏`：长期个人收藏，与本次绘图任务的选择分开保存；初版可以保存在当前浏览器，无需登录，不承诺跨设备同步。

`Dislike / 暂时隐藏`：隐藏本次挑选过程中不适合的图，作用域为当前参考挑选会话，不能把一次隐藏视为对图的永久负面评价。

`Restore / 恢复`：从已隐藏列表中恢复；隐藏后提供即时撤销。恢复取消隐藏，不自动加入收藏或当前参考栏。

卡片主要展示选作参考与收藏按钮，隐藏放在次级操作中，恢复放在已隐藏列表。底部参考栏显示所选缩略图、数量、借鉴部分与整理导出操作。

导出前填写自己的研究内容、模块/关系或数据文件、需要改变的部分及输出格式。单图可直接导出，多图建议选择两三张并说明各自用途；参考包保持图像与对应描述逐一配对。

## 收录范围与覆盖

第一阶段建议年份范围：2020—2026。截至 2026-10-01，仅收录官方已经公布并可核验的奖项；不假设每个会议每年均有完整结果。

每个会议年份维护一行覆盖记录：`not_started / in_progress / complete / awards_not_announced / not_held / source_unavailable`，附官方奖项链接、核验日期、论文数、图表数。年份不存在会议和年份尚未整理要区分。

奖项同时保存规范类别与官方原名，例如 `best_paper`、`outstanding_paper`、`honorable_mention`、`runner_up`、`test_of_time`。Oral / Spotlight 属于报告形式，不能作为获奖依据。Test of Time 分别保存论文发表年和颁奖年。

为每篇获奖论文核对正文 Figure 1 与 Figure 2，分别记录 `included / absent / pending / source_unavailable` 及原因。无图或仅一幅图的论文照样登记。只有当所声明范围内的获奖论文与这两个图号均完成核验，才能称对应年份的 Figure 1 / Figure 2 已遍历。

优先从 arXiv 原始源码读取独立图注编号并解析 includegraphics；识别 subfigure 与多个独立 caption。按实际编号定位，不将 PDF 页数或图片对象提取顺序当作图号。保留完整多面板图，分别记录原始图注和维护者的结构描述。主图与子图裁切可并存，但子图不能替代完整参考。

Figure 1 和 Figure 2 分别承担什么表达功能，应读图后标注；不能预设第一幅一定是 teaser、第二幅一定是方法框架图。

首批优先完成 15—25 篇获奖论文，目标约 30—50 幅 Figure 1 / Figure 2，实际数量以论文中存在的图号为准。验证浏览到改绘的流程后，再扩大会议和年份覆盖。论文数、图像数与遍历进度分别展示。

## 单个图表条目

建议使用稳定 ID：`<venue>-<publication-year>-<paper-key>-fig-<number>[-<panel>]`。表格使用 `tab-<number>`；补充材料加 `supp` 标记。ID 不含奖项，以免新增奖项时改变链接。

文件安排：

```text
Awesome-Academic-Figures/
├── README.md
├── CONTRIBUTING.md                    # 后续编写
├── docs/
│   └── PROJECT_DESIGN.md
├── templates/
│   ├── figure.metadata.json
│   └── agent.md
├── data/                              # 后续添加
│   ├── papers.json                    # 论文、获奖证据与 Figure 1/2 状态
│   ├── coverage.json                  # 会议年份及图表清单覆盖
│   └── catalog.json                    # 自动生成的图表索引
├── figures/                           # 后续收录，一图一目录
│   └── <figure-id>/
│       ├── metadata.json
│       ├── preview.webp
│       ├── reference.png              # 有明确再分发依据时保存
│       ├── analysis.md
│       ├── prompt.md
│       ├── agent.md
│       └── adaptation/                # 可选，改绘示例与代码
│           ├── preview.png
│           └── draw.py
├── site/                              # 后续静态画廊
└── scripts/                           # 后续索引、校验与参考包生成
```

条目可以引用已有的作者公开 SVG/PDF；不对栅格图虚构原始矢量文件。`adaptation/` 内的代码标明维护者改绘，不能称为原作者绘图代码。大型 PDF 和批量压缩包优先放 Release 或独立资源存储，Git 保存轻量预览与记录。

## Prompt 的三层结构

1. **视觉描述**：图里有几个面板、各面板的位置、模块层级、连线、字体、色彩和强调方式。
2. **适配模板**：提炼可复用结构，用 `{{method_name}}`、`{{modules}}`、`{{connections}}`、`{{data_path}}` 等变量替换论文具体内容；说明哪些结构可以调整。
3. **用户任务**：用户填入自己的方法、数据、文案、画布尺寸与交付格式。

需要显式说明参考的是版式、配色或信息结构中的哪些部分，避免原论文的模块和论点被不加分析地搬进新研究。

实验图和表格使用用户真实数据生成可复现代码；不从参考图片随意编造数值。若用于演示，示例数据须明确标记。结构示意图可用 SVG、TikZ、PPTX 或图像生成工具；按任务选择输出，不要求所有类型都用同一后端。

Prompt 保存语言、维护者、版本、来源类型和验证状态。状态建议：`draft / reviewed / tested`；测试另记智能体或工具、日期、输入和产物。由视觉反推的 prompt 是重建描述，不代表原图真实创作过程。

## 参考包

每张图的参考包使用 ZIP 包含 `reference.png`（若可提供）、`metadata.json`、`analysis.md`、`prompt.md`、`agent.md`，可选代码和改绘预览。包内路径采用相对路径。每篇论文还可下载双图参考包，保留 `figure-1/`、`figure-2/` 两个独立目录和同篇关系说明；不要将两张图压成一张低清拼图作为唯一参考。

`agent.md` 提醒用户填入自己的任务，指明需要阅读的图像与描述。若原图不能打包，则写清楚来源 URL、图号和未提供图片状态；不能将缺图条目标记为完整图像参考包。

## 来源与维护

每张图保留作者、论文链接、官方获奖证据、arXiv 具体版本或正式出版版本、图号、图注、原文件 SHA-256、授权证据和资源来源。存储与公开展示依据按具体资源记录；无法确认再分发依据时保留来源链接和明确标注的原创分析或改绘，不把第三方图像统一套用仓库代码许可证。

贡献者提交一图一目录；自动校验必填字段、稳定 ID 唯一性、路径存在、分类枚举、来源链接和非空 prompt。人工复核来源、裁图完整性、图形描述和实际改绘效果。

## 分阶段实施

1. 完成元数据约定与 5 篇论文的 Figure 1 / Figure 2 样例，核验获奖证据与图像出处。
2. 建静态画廊：默认按图形类型的单图网格、多维组合筛选、中英文搜索、详情页同篇双图展示、选择/收藏/隐藏/恢复、复制指令与参考包下载。
3. 完成 15—25 篇论文、约 30—50 幅经过复核的图，并测试用户替换内容后的改绘效果。
4. 扩充会议和历史年份，增加贡献流程、覆盖统计与索引校验。
5. 数据积累后再考虑语义检索、按参考图找相似版式或智能体工具接口。

## 调研来源

- https://github.com/Dsadd4/AgentFigureGallery
- https://github.com/SciToolsmith/academic-figure
- https://neurips.cc/virtual/2025/awards_detail
- https://blog.icml.cc/2026/07/05/announcing-the-icml-2026-awards/

微信参考文章当前无法读取，方案没有引用其具体内容。
