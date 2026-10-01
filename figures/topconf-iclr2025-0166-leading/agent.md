# 参考图改绘任务

先阅读 MY_TASK.md、参考图（metadata.assets.reference；预览只是辅助）、analysis.md、prompt.md、metadata.json 与 ATTRIBUTION，核对来源、许可和用户科学内容。参考图名：元智能体搜索：生成、评测与档案反馈及候选智能体示例。

本图的可复用结构是：上半部用 Meta Agent、New Agent 描述框、Agent Archive 三个模块构成生成和反馈回路。左上 Meta Agent 有青色自反馈箭头，并写 Refine until novel and error-free。粗黑连线沿顶部向右进入候选描述框，框内可读 Summary and motivation、Name、Code；候选下方通过 Test performance on tasks and add to archive 路径返回中部档案，档案再沿左侧 Input 路径进入 Meta Agent。

按 prompt.md 的具体分区组织新的图，把用户任务中的术语、模块、真实连接与数据填入变量：{{generator_name}}, {{candidate_descriptor}}, {{evaluation_process}}, {{archive_name}}, {{example_agent_designs}}。用户科学内容优先于原论文示例；用户未声明的模块、效果、数字、公式、维度或案例不能从原图移植，也不能自行编造。只有缺少影响科学正确性的输入时，才询问必要内容；沿用参考配色不需要再次询问配色。可以缩减没有对应内容的分支或子图，但必须解释结构调整。

请检查每条箭头的方向与实际数据/控制流、候选与结果的对应关系、正负标记的含义、公式符号是否真实成立。原图中的照片、医学影像、商标和特定插画用原创中性示意替换；只有用户明确提供且许可可用时才嵌入其他素材。不要把原图位置当成 Figure 1/2，也不要把布局示意当成实验结论。

生成后以最终论文尺寸检查文字可读性、标签裁剪、分区顺序、连接交叉与颜色语义，输出用户要求的可编辑文件及预览。保留 ATTRIBUTION 的原作者、来源和许可，说明这是改绘。当前 visual_annotation=reviewed 只表示已审看参考预览和文案，adaptation_generation=not_tested；只有实际生成和检查后才可记录适配通过。

图号与版本：图号已在指定 arXiv 2408.08435v1 版核实为 Figure 1，正式会议版未核实。证据见 metadata.source.number_evidence。仍保留上游 scope_claim 作为历史记录，不从首图位置推断其他图号，也不把 arXiv 图号说成正式会议版编号。
