# Speculative RAG：三种基线对照与并行草稿验证流程

上沿有共用符号说明：Q、编号文档、A、Generalist LM 和 Specialist LM。上排三个黑边面板分别为 (a) Standard RAG、(b) Self-Reflective RAG、(c) Corrective RAG，分别用紧凑箭头展示一次生成、模型反思标签和文档分类/网络搜索路径。下排 (d) Ours 占满宽度，标题红色，展示 Speculative RAG 的并行草稿与验证流程。因此主类型从单 flowchart 改为 multi-panel，核心用途既含方法概览也含显式基线比较。

下方面板左侧 Q 进入 Generalist LM，旁有说明气泡；中部灰色子框包含 Specialist RAG Drafter 三条并行分支，各接 Q 与不同编号/颜色的文档集合，输出草稿 α_i 和解释 β_i。右侧候选结果进入 Generalist LM 验证，伴有可见选择式 A = argmax Score(α_i | Q, β_i)；右上还分叉显示结束生成或继续查询。这是实际内部过程，mechanism 用途有像素依据。底部三段有色箭头带依次写查询、调用草稿器、评估接受草稿，强化左到右阶段阅读。

适合多基线介绍、并行候选生成与独立验证架构，也可改成不同模型分工的总体方法。替换基线名称及内部路径、真实文档组、候选/解释符号、验证方式和选择规则。只有用户方法确实有解释变量与打分选择时才保留公式，不从原图复制成通用机制。

上排细小注释较密，不能从预览精确复述所有基线语义；编号文档是示意，不是数据分数或用户任务样本。未阅读全文；图号已在指定 arXiv 2407.08223v2 版核实为 Figure 1，正式会议版未核实；没有生成适配图，不声称渲染通过。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

图号验证证据：[2407.08223v2 官方 HTML Figure 1](https://arxiv.org/html/2407.08223v2#S1.F1)，方法为官方图注与下载原图的直接视觉对应；Four lettered panels, all baseline names, generalist/specialist icons, the three parallel document-pair branches (1/2,4/5,3/6), alpha/beta outputs, score selector and three stage ribbons correspond. Only size/framing differences observed. 图号仅适用于该 arXiv 版本，不代表正式会议出版版编号。验证图片已在完成审查后删除。

第三方素材补充：官方清晰图及当前参考中，(c) Corrective RAG 的 Web Search 旁可辨认 Google 彩色 G 标志。未建立其单独素材来源/许可，改绘仍要求原创无商标图标；本次不修改或重新声明原 rights 字段。
