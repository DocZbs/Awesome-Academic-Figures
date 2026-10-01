# StructRAG：结构路由、知识整理与分解推理流程

宽幅约 3.3:1 的方法流程由左侧输入/路由、中部知识整理、右侧知识利用三列构成。左上灰色框包含 Question、Documents 和 Core Content；左下浅橙框 Hybrid Structure Router 将 Question + Core Content 连接到 Optimal Type is Table。框底排列 Graph、Chunk、Catalogue、Algorithm、Table 五种表示图标，前四个向下手势、Table 向上手势表示该示例选中的结构，不是普遍结构优劣。

中间浅绿框 Scattered Knowledge Structurizer 包含上方输入到 Structured Knowledge / Knowledge Description 的小流程，中间 Structured Knowledge 的公司比较表，下面 Knowledge Description 的文本解释。右侧浅蓝框 Structured Knowledge Utilizer 依次呈现 Decomposition: Sub-Questions、Extraction: Precise Knowledge 和 Inference: Final Answer，分解和抽取区域夹着灰色向下箭头，小表格重复公司属性形成例子。

上游 teaser 改为 flowchart 主类型与 architecture 辅类型：图的主体解释路由、结构化和推理的明确阶段，没有独立的问题/效果预告面板。用途为 method-overview 和 mechanism。全局 left-to-right 准确；右列内部是纵向流程，当前标签不单列 top-to-bottom，在文字分析明确指出。

适合任务驱动的表示选择、知识转换和分解推理。用户应替换问题、资料、候选结构、实际选中结构、可公开的表格数据、推理步骤和答案。原公司名、收入、价值和结论只是原图的例子，禁止原样当作用户实验数据；没有真实数据时用明确占位标签，不填假数字。

小字号段落和表头可部分识别，但没有核验其全文定义或来源。仅审预览像素，不将原标题、首图位置或上游 teaser 标记作为图号证据；图号已在指定 arXiv 2410.08815v1 版核实为 Figure 1，正式会议版未核实；原始完整裁剪仍独立待查。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

图号验证证据：[2410.08815v1 官方 HTML Figure 1](https://arxiv.org/html/2410.08815v1#S1.F1)，方法为官方图注与下载原图的直接视觉对应；Question and company example, five structure candidates with Table selected, green structured-knowledge table and blue decomposition/extraction/inference stages all correspond, including visible example values and connection directions. Differences are scaling and whitespace/framing. 图号仅适用于该 arXiv 版本，不代表正式会议出版版编号。验证图片已在完成审查后删除。
