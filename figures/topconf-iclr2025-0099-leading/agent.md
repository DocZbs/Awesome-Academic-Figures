# 参考图改绘任务

先阅读 MY_TASK.md、参考图（metadata.assets.reference；预览只是辅助）、analysis.md、prompt.md、metadata.json 与 ATTRIBUTION，核对来源、许可和用户科学内容。参考图名：AgentHarm：两类请求、智能体响应与代理工具概览。

本图的可复用结构是：整幅图横向展开：左侧两条上下平行的请求路径，中间为 LLM agent 与多步工具调用，右侧为一个浅黄色圆角工具库。上行标为 Harmful request，人物上方云形思考泡泡用多个象征性图标表示请求场景；下行为 Benign request。两条灰色箭头分别进入机器人头部。上行机器人有绿色拒绝和粉色同意气泡，下行只有绿色同意气泡；机器人右侧各有由两根粗灰色弯箭头构成的 Multi-step tool calling 回路。

按 prompt.md 的具体分区组织新的图，把用户任务中的术语、模块、真实连接与数据填入变量：{{request_classes}}, {{response_options}}, {{tool_categories}}, {{evaluation_scope}}。用户科学内容优先于原论文示例；用户未声明的模块、效果、数字、公式、维度或案例不能从原图移植，也不能自行编造。只有缺少影响科学正确性的输入时，才询问必要内容；沿用参考配色不需要再次询问配色。可以缩减没有对应内容的分支或子图，但必须解释结构调整。

请检查每条箭头的方向与实际数据/控制流、候选与结果的对应关系、正负标记的含义、公式符号是否真实成立。原图中的照片、医学影像、商标和特定插画用原创中性示意替换；只有用户明确提供且许可可用时才嵌入其他素材。不要把原图位置当成 Figure 1/2，也不要把布局示意当成实验结论。

生成后以最终论文尺寸检查文字可读性、标签裁剪、分区顺序、连接交叉与颜色语义，输出用户要求的可编辑文件及预览。保留 ATTRIBUTION 的原作者、来源和许可，说明这是改绘。当前 visual_annotation=reviewed 只表示已审看参考预览和文案，adaptation_generation=not_tested；只有实际生成和检查后才可记录适配通过。

图号与版本：图号已在指定 arXiv 2410.09024v1 版核实为 Figure 1，正式会议版未核实。证据见 metadata.source.number_evidence。仍保留上游 scope_claim 作为历史记录，不从首图位置推断其他图号，也不把 arXiv 图号说成正式会议版编号。
