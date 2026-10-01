# HiKEY：层级建图、粗到细检索与证据子图组装流程

图为横向三栏，对应蓝色 Offline: Hierarchy-Aware Graph and Index Construction、橙色 Online: Hierarchical Coarse-to-Fine Retrieval、绿色 Hierarchical Subgraph Assembly。每栏有浅色底、白/浅色圆角子模块及内部图标。左栏上半输入 Unstructured Documents，经 DHP 到标题—Section—Text/Image/caption 的 Hierarchy tree graph T(d)，以红色细箭头示树边。下半 Card-based Index Generation 用 Doc_card 与 Section_card 卡片分别指向 Doc_index、Sec_index 数据库图标。两条橙色折线分别跨到中间不同阶段，不是一条共同输入箭头。

中间顶部 Query(q) 向下进入 Stage-1: Hierarchical Document Routing：一排文档卡经聚合指向 Candidate Docs (Dq)。再向下进入 Stage-2: Hierarchical Section MaxSim Scoring：左侧 Section_cards 进入 Text Encoder 和 Vision Encoder，二者带 s_text、s_image 标注连接到橙色 MaxSim 图标，右侧输出 Top-K Ranked Sections。仅凭图面不能确认 MaxSim 的实际数学式或融合权重，应保留该操作名而不补公式。

右栏上部 Ancestry-aware Packing 用标题—章节—图像/Caption/Text/Table 小树表示层级组装，带红叉示一个被排除的连接/节点，但其完整筛选规则需正文核查。向下进入 Hybrid Evidence Expansion，右侧黑色框及 Sibling Units 显示邻接兄弟单元扩展。再向下聚成 serialized subgraph，并通过左侧 Semantic Associates 支路补充；最后横向进入 LVLM Reader 和 Final Answer 气泡。绿色跨栏箭头把检索结果送入右栏，主要读向从左到右，各栏内部向下。

保留 flowchart 主类，补 architecture、multi-panel；用途 method-overview 与 mechanism，因为图面明确展示离线/在线阶段、两种编码评分、层级打包和证据扩展的内部流程。布局 left-to-right、nested-modules；不加 taxonomy，树只是流程中的文档表示，不是论文主题分类。

适合复用为 RAG、文档问答、层级检索或多模态证据构建的总流程。替换真实文档单元、解析器、索引、查询、编码器、评分、层级打包与读出模型；索引应接正确的在线阶段，红叉只能表示用户方法的真实排除规则。重新画文档/表格图标，不复制源卡片细节。只查看预览，未验证 DHP/MaxSim 定义、全文算法或正式会议版图号；色值为近似，改绘未试生成。

## 补充图号核实（指定作者版本）

已直接查看官方 HTML 绑定图像，与本画廊预览对照，核实对应 **arXiv:2605.29606v1 · Figure 1**。证据页面：[arXiv:2605.29606v1](https://arxiv.org/html/2605.29606v1#S1.F1)。官方 PNG 与预览三栏蓝/橙/绿标题、DHP 层级树、Doc/Sec 索引、两级路由与 Text/Vision Encoder-MaxSim、祖先打包红叉、Sibling Units、Semantic Associates、serialized subgraph、LVLM Reader/Final Answer 均对应。尺寸、留白和字形间距略异，不声称字节一致。

这仅核实指定 arXiv 作者版本的图号对应关系；正式 ACL 会议版本图号未核实。现有图片来源、许可与冻结上游版本不变，未重新分发 arXiv 图像。没有阅读全文或测试改绘输出。
