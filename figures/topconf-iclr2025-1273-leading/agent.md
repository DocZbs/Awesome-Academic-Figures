# 参考图改绘任务

先阅读 MY_TASK.md、参考图（metadata.assets.reference；预览只是辅助）、analysis.md、prompt.md、metadata.json 与 ATTRIBUTION，核对来源、许可和用户科学内容。参考图名：MMed-RAG：领域检索、上下文选择与偏好微调的多分区流程。

本图的可复用结构是：画面有四个主要分区：左上蓝底的 1 Domain-Aware Retrieval Mechanism，中上浅绿底的 2 Adaptive Retrieved Context Selection，左下至中下的 3 RAG-Based Preference Fine-Tuning，右侧窄列为偏好数据到模型的训练链。它不是单一网络堆叠，因此主类型改为 multi-panel，保留 architecture 和 flowchart。

按 prompt.md 的具体分区组织新的图，把用户任务中的术语、模块、真实连接与数据填入变量：{{input_domains}}, {{retriever_mapping}}, {{context_selection_rule}}, {{preference_cases}}, {{training_stages}}。用户科学内容优先于原论文示例；用户未声明的模块、效果、数字、公式、维度或案例不能从原图移植，也不能自行编造。只有缺少影响科学正确性的输入时，才询问必要内容；沿用参考配色不需要再次询问配色。可以缩减没有对应内容的分支或子图，但必须解释结构调整。

请检查每条箭头的方向与实际数据/控制流、候选与结果的对应关系、正负标记的含义、公式符号是否真实成立。原图中的照片、医学影像、商标和特定插画用原创中性示意替换；只有用户明确提供且许可可用时才嵌入其他素材。不要把原图位置当成 Figure 1/2，也不要把布局示意当成实验结论。

生成后以最终论文尺寸检查文字可读性、标签裁剪、分区顺序、连接交叉与颜色语义，输出用户要求的可编辑文件及预览。保留 ATTRIBUTION 的原作者、来源和许可，说明这是改绘。当前 visual_annotation=reviewed 只表示已审看参考预览和文案，adaptation_generation=not_tested；只有实际生成和检查后才可记录适配通过。

图号限制：已比对 arXiv 2410.13085v1 Figure 1，发现两处 Unrelated Image 案例素材发生变化；当前参考图的精确图号仍未核实，不得将该版本图号直接归给当前参考图。
