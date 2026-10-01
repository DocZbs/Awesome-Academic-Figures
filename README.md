# Awesome-Academic-Figures

**Find figure references for your paper. Browse the gallery, understand the layout, and brief your agent.**

学术图形参考画廊：上传自己的论文文字或 PDF 找参考，也可从图形类型开始浏览，叠加用途、布局、会议、年份、已知图号与获奖标签筛选。把选中的参考图、来源、结构描述、prompt 和自己的绘图任务一起交给智能体。

[打开交互画廊](https://doczbs.github.io/Awesome-Academic-Figures/) · [GitHub 仓库](https://github.com/DocZbs/Awesome-Academic-Figures) · [授权规则](docs/LICENSING.md) · [覆盖进度](data/coverage.json)

## 当前收录

**本轮更新（2026-10-01）**：逐图补充 26 幅已有图片的类型、用途、布局、结构描述与 prompt；累计 44 幅完成逐图视觉核对。已核实图号为 **Figure 1：21 幅，Figure 2：12 幅**，其余 1,887 幅保留图号待核。本轮新增的 15 个已知图号通过指定 arXiv 版本的官方 HTML 图注与图像直接对照确认，卡片显示 arXiv 标记，详情提供版本与证据链接；不将它们表述为已核实的正式会议版本图号。总图库仍为 1,920 幅，未重复收录同一图片来增加数量。详见[本轮逐图标注记录](data/visual_review_batch_20261001.json)。

默认按 **Teaser 图、机制图、方法框架图、流程图、概念示意图、数据图、多面板图**等图类浏览。Figure 1 / 2 是独立的论文图号筛选；首图不自动等于 Teaser，机制图依据已记录的机制用途标签。筛选选项显示当前范围内的数量，并保留其他筛选条件。

截至 **2026-10-01**，统一画廊发布 **1,920 幅图，来自 1,517 篇去重后的论文**；其中 **21 幅图带有已核实的获奖标签**。获奖是可选筛选条件，普通论文、获奖论文和图号未知的方法图在同一画廊浏览。

| 来源批次                                                                                          | 已发布图数 | 核验范围                                                                            |
| ------------------------------------------------------------------------------------------------- | ---------: | ----------------------------------------------------------------------------------- |
| 首批获奖论文 Figure 1 / 2                                                                         |         18 | 逐图人工核对；其中 16 幅保留 arXiv 源码中的作者原文件，2 幅为历史 PMLR 正式版本裁图 |
| [Top-Conf Figure Gallery](https://github.com/qwdwqfwq/topconf-paper-figure-gallery) 首图 / teaser |      1,055 | 固定源索引，核对正式出版来源或许可记录；原图库提取的 JPEG，单图准确编号未核实       |
| [SciFormaData-700K](https://huggingface.co/datasets/microsoft/SciFormaData-700K) 方法图           |        847 | 保留有明确行级许可的图像与论文对应关系；准确图号和正文 / 附录范围未知               |
| **合计**                                                                                          |  **1,920** | 按图片字节 SHA-256 去重；同一论文可能来自多个来源                                   |

首图和方法图批次完成了来源索引与许可依据检查，并进行了人工抽样；**没有声称 1,920 幅图都经过独立逐图人工审核**。裁剪缺失、已识别的第三方照片 / 标志权限疑问及重复图被排除，抽样观察与排除记录保存在 [Top-Conf 审核报告](data/external/topconf/visual_sample_review.json) 和 [SciForma 审核报告](data/external/sciforma/visual_sample_review.json)。批量图像在 SSH 中转服务器收录，不重新下载整篇论文 PDF 截图。

各会议、年份和正文 Figure 1 / 2 仍为部分覆盖。另有 **156 篇官方获奖论文清单**用于跟踪覆盖进度，它不等于已发布论文数或已获图片转载许可。授权不明确的记录只保留元数据和来源链接；源码候选中的 5 幅待审图与 1 幅已确认位于附录的图未作为正文图示例发布。下面保留最初 18 幅经过人工核对的精选索引。

| 论文                                                                                                                                                                                                                           | 来源 / 奖项                                                                                                            | 图号                                                                                                                                                                                                                                                | 图像授权                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [CollabLLM: From Passive Responders to Active Collaborators](https://proceedings.mlr.press/v267/wu25i.html)                                                                                                                    | ICML 2025 · [Outstanding Paper](https://icml.cc/virtual/2025/awards_detail)                                            | [Fig. 1](figures/icml-2025-collabllm-fig-1/) · [Fig. 2](figures/icml-2025-collabllm-fig-2/)                                                                                                                                                         | [CC-BY-4.0](https://proceedings.mlr.press/pmlr-license-agreement.html) |
| [LLMs Get Lost In Multi-Turn Conversation](https://openreview.net/forum?id=VKGTGGcwl6)                                                                                                                                         | ICLR 2026 · [Outstanding Paper](https://blog.iclr.cc/2026/04/23/announcing-the-iclr-2026-outstanding-papers/)          | [Fig. 1](figures/iclr-2026-llms-get-lost-in-multi-turn-conversation-fig-1/)                                                                                                                                                                         | [CC-BY-4.0](https://arxiv.org/abs/2505.06120v1)                        |
| [Neural Inverse Rendering from Propagating Light](https://openaccess.thecvf.com/content/CVPR2025/html/Malik_Neural_Inverse_Rendering_from_Propagating_Light_CVPR_2025_paper.html)                                              | CVPR 2025 · [CVPR Best Student Paper Award](https://www.thecvf.com/?page_id=413)                                       | [Fig. 1](figures/cvpr-2025-neural-inverse-rendering-from-propagating-light-fig-1/) · [Fig. 2](figures/cvpr-2025-neural-inverse-rendering-from-propagating-light-fig-2/)                                                                             | [CC-BY-4.0](https://arxiv.org/abs/2506.05347v1)                        |
| [Generating Physically Stable and Buildable Brick Structures from Text](https://openaccess.thecvf.com/content/ICCV2025/html/Pun_Generating_Physically_Stable_and_Buildable_Brick_Structures_from_Text_ICCV_2025_paper.html)    | ICCV 2025 · [ICCV Best Paper Award (Marr Prize)](https://www.thecvf.com/?page_id=413)                                  | [Fig. 2](figures/iccv-2025-generating-physically-stable-and-buildable-brick-structures-from-text-fig-2/)                                                                                                                                            | [CC-BY-4.0](https://arxiv.org/abs/2505.05469v3)                        |
| [AlphaEdit: Null-Space Constrained Model Editing for Language Models](https://openreview.net/forum?id=HvSytvg3Jh)                                                                                                              | ICLR 2025 · [Outstanding Paper](https://blog.iclr.cc/2025/04/22/announcing-the-outstanding-paper-awards-at-iclr-2025/) | [Fig. 1](figures/iclr-2025-alphaedit-null-space-constrained-model-editing-for-language-models-fig-1/) · [Fig. 2](figures/iclr-2025-alphaedit-null-space-constrained-model-editing-for-language-models-fig-2/)                                       | [CC-BY-4.0](https://arxiv.org/abs/2410.02355v4)                        |
| [BioCLIP: A Vision Foundation Model for the Tree of Life](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)                             | CVPR 2024 · [CVPR Best Student Paper Award](https://www.thecvf.com/?page_id=413)                                       | [Fig. 2](figures/cvpr-2024-bioclip-a-vision-foundation-model-for-the-tree-of-life-fig-2/)                                                                                                                                                           | [CC-BY-4.0](https://arxiv.org/abs/2311.18803v3)                        |
| [Rich Human Feedback for Text-to-Image Generation](https://openaccess.thecvf.com/content/CVPR2024/html/Liang_Rich_Human_Feedback_for_Text-to-Image_Generation_CVPR_2024_paper.html)                                            | CVPR 2024 · [CVPR Best Paper Award](https://www.thecvf.com/?page_id=413)                                               | [Fig. 1](figures/cvpr-2024-rich-human-feedback-for-text-to-image-generation-fig-1/) · [Fig. 2](figures/cvpr-2024-rich-human-feedback-for-text-to-image-generation-fig-2/)                                                                           | [CC-BY-4.0](https://arxiv.org/abs/2312.10240v2)                        |
| [Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution](https://proceedings.mlr.press/v235/lou24a.html)                                                                                                | ICML 2024 · [Best Paper](https://icml.cc/virtual/2024/awards_detail)                                                   | [Fig. 1](figures/icml-2024-discrete-diffusion-modeling-by-estimating-the-ratios-of-the-data-distribution-fig-1/)                                                                                                                                    | [CC-BY-4.0](https://arxiv.org/abs/2310.16834v3)                        |
| [VideoPoet: A Large Language Model for Zero-Shot Video Generation](https://proceedings.mlr.press/v235/kondratyuk24a.html)                                                                                                      | ICML 2024 · [Best Paper](https://icml.cc/virtual/2024/awards_detail)                                                   | [Fig. 1](figures/icml-2024-videopoet-a-large-language-model-for-zero-shot-video-generation-fig-1/) · [Fig. 2](figures/icml-2024-videopoet-a-large-language-model-for-zero-shot-video-generation-fig-2/)                                             | [CC-BY-4.0](https://arxiv.org/abs/2312.14125v4)                        |
| [Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://openreview.net/forum?id=gojL67CfS8)                                                                                              | NeurIPS 2024 · [Best Paper](https://neurips.cc/virtual/2024/awards_detail)                                             | [Fig. 1](figures/neurips-2024-visual-autoregressive-modeling-scalable-image-generation-via-next-scale-prediction-fig-1/) · [Fig. 2](figures/neurips-2024-visual-autoregressive-modeling-scalable-image-generation-via-next-scale-prediction-fig-2/) | [CC0-1.0](https://arxiv.org/abs/2404.02905v2)                          |
| [Swin Transformer: Hierarchical Vision Transformer Using Shifted Windows](https://openaccess.thecvf.com/content/ICCV2021/html/Liu_Swin_Transformer_Hierarchical_Vision_Transformer_Using_Shifted_Windows_ICCV_2021_paper.html) | ICCV 2021 · [ICCV Best Paper Award (Marr Prize)](https://www.thecvf.com/?page_id=413)                                  | [Fig. 1](figures/iccv-2021-swin-transformer-hierarchical-vision-transformer-using-shifted-windows-fig-1/) · [Fig. 2](figures/iccv-2021-swin-transformer-hierarchical-vision-transformer-using-shifted-windows-fig-2/)                               | [CC-BY-4.0](https://arxiv.org/abs/2103.14030v2)                        |

## 怎样找图

默认按 **图形类型**：框架图、流程图、概念示意图、定性展示、数据图、多面板图、分类层级图和研究概览。还可切换作用用途、布局结构和论文来源，再叠加会议、年份、已核实的 Figure 1 / 2、获奖标签与关键词搜索。图号未知的首图或方法图不会冒充已核实的 Figure 1 / 2。

- **选作参考**：加入这次任务的参考板。
- **收藏**：留在当前浏览器，下次快速找到。
- **暂时隐藏 / 恢复**：减少当前浏览中的干扰，随时恢复。
- **下载参考包**：写下研究任务和想借鉴的部分，下载 ZIP 交给智能体。

收藏在浏览器本地保存，选图与隐藏在当前会话保存。没有账号或跨设备同步。

论文档案展示完整题目、作者、会议奖项来源、arXiv 链接、首次提交日期和图鉴收录日期。原图详情另外展示所用版本和授权依据，避免把不同日期或版本混在一起。

## 用我的论文找图

点击首页 **用我的论文找参考图**，上传 PDF、TXT 或 Markdown，或粘贴标题、摘要和方法描述。上传后自动推荐；粘贴后点击匹配。当前推荐在浏览器内按**所选图类**筛选，再使用**标题关键词和中英主题同义词**排序，包括大语言模型、视觉、强化学习、扩散、多模态、智能体、图学习和医学等。每个结果显示具体匹配理由；这不是大模型全文语义理解，也不保证排序第一就是最佳图。

默认选择 **Teaser 图（研究概览）**，也可选择机制图、方法框架图、流程图、概念示意图、对比图、数据图、数据集 / 评测图或多面板图。先按已记录的图类标签限定候选，再按论文主题和关键词排序；不会因为某张图是 Figure 1 就认定它是 Teaser，也不会用其他图类凑数。图类标注仍在完善，暂无相关候选时可切换图类或补充关键词。选择会同步到结果理由与导出的绘图任务。摘要、方法和前段文字优先用于检索，识别到参考文献标题后排除后文。

- 文件最大 **20 MiB**，PDF 最多解析前 **40 页**，文字最多 **120,000 个字符**。界面显示实际读取页数与截取状态。
- 扫描或没有可提取文字的 PDF 需要先用自己的 OCR 工具转成文字，再上传 TXT / Markdown，或直接粘贴摘要。密码保护、损坏、不支持或过大的文件都有恢复提示。
- 查看候选原图和来源，选作参考，再点 **带入绘图任务**，将论文片段、匹配理由和所选参考交给现有参考包导出流程。上传替换失败会保留原文；清空文档会丢弃当前匹配文档。

匹配不调用外部 API。论文文字和上传文件仅在浏览器内读取，匹配文字不进入 URL、浏览器持久存储或后台。关闭匹配窗口会释放该窗口的文档状态；主动带入的绘图任务保留在应用内存，并仅随用户选择的 ZIP 导出。画廊预览和参考包图片按需从 GitHub 加载。

## 参考包有什么

每张图的参考包包含参考图片、`analysis.md`、`prompt.md`、`agent.md`、`metadata.json`、`ATTRIBUTION.md` 与可用的提取记录；包顶层保存用户填写的研究任务。文件内容和核验状态与所选图逐一对应。

对 16 幅 arXiv 源码图，另外提供作者 `original-1.pdf/png/jpg` 原文件和 `figure.tex` 排版片段。作者原文件按字节保留；单个矢量图 PDF 仅转换为网页预览，原始 PDF 可随包交给智能体。多面板或 TeX 内绘制的图需要完整组合核对，不能以其中一张子图冒充整幅 Figure。

批量图库中的 JPEG / PNG 是**上游提取或渲染后的图像**，不是作者原始矢量文件或绘图代码。其入库文件同样按字节保存并记录 SHA-256，网页导出时核验提供的来源文件；没有矢量源文件的条目不会虚构 SVG / PDF / TikZ。获奖标签、编号未知、来源检查方式和描述生成方式都随元数据进入参考包。

首批描述和 prompt 是维护者重建，未声称出自作者，未通过实际改绘生成验证。批量首图的通用适配 prompt 与 SciForma 的机器生成结构描述明确标为草稿 / 未验证，不能当成已经逐图人工核对的复现指令。智能体应使用用户自己的模块、关系、真实数据和可使用的实验图片。

## 授权原则

只公开经过具体版本授权检查的原图。首批接受 CC BY 4.0 和 CC0 1.0；其他协议需要单独审核。arXiv 的 nonexclusive-distrib 仅允许 arXiv 分发，不作为本站转载依据。第三方照片或模型素材有独立权利时另行核查。

代码和维护者原创文字使用 MIT；论文图片、作者原文件和引用图注保留各自协议。每张图附作者署名、来源、版本、许可 URL 与转换说明。详见[授权文档](docs/LICENSING.md)。

## 本地轻量预览

本机只需要前端、元数据和 prompt，新增原图从 GitHub 加载。批量下载、提取、审阅素材以及 Git 提交放在 SSH 中转服务器，避免本机存放论文与图片缓存。

```sh
npm ci
npm run dev -- --port 5173
```

浏览器打开开发服务提示的地址。`npm run build` 生成静态画廊，GitHub Actions 构建并部署到 GitHub Pages。公开页面需要网络才能从 GitHub 加载原图。

## 维护与收录

完整流程见[远端收录说明](docs/REMOTE_STAGING.md)。源码精选沿用官方奖项发现、精确论文匹配、固定 arXiv 版本、具体许可检查、作者原图提取与人工完整性核对。批量来源另固定上游索引 / 数据集版本，绑定正式论文与行级许可，保留来源文件校验值，抽样审核并排除已知问题，最后按图片 SHA-256 去重发布。两条路径保留各自的核验状态。

`data/award_inventory.json` 保存官方奖项记录与状态，`data/coverage.json` 按会议年份统计部分覆盖，`data/source_collection_report.json` 记录已核查的 arXiv 条目。没有绕过需要登录或验证的站点，也没有因为公开可下载就默认获得转载权。

前端检查：`npm run check`、`npm run check:tokens`、`npm run format:check`、`npm run build`。论文推荐检查：`node scripts/check_matching.mjs`。源码提取与授权约束检查在安装收录依赖后运行 `python scripts/check_ingestion.py`。

欢迎贡献有明确授权的 Figure 1 / 2、论文概览或方法图、分类改进和 prompt。请附具体来源版本、许可证据与可用的完整图像；仅在添加获奖标签时要求官方获奖依据。有权利疑问的图先进入待审队列。
