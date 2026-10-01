# LLaDA 1.5：八维能力雷达图与 GSM8K / Math 柱状对比：智能体改绘指引

先阅读 MY_TASK.md，确定用户真实研究内容、输出语言和用途。依次查看参考图（metadata 的 assets.reference 或随包预览）、analysis.md、prompt.md、metadata.json 与 ATTRIBUTION，理解可借用的图形结构及许可。不要把首图索引当成已验证 Figure 1/2；本轮只检查了已发布预览，未读全文或试生成。

本图适用用途：comparison。应提供的专用变量为：radar_axes, radar_series, radar_axis_ranges, bar_model_names, bar_benchmarks, bar_scores, annotation_meanings；原有 research_content、true_data、layout_changes、language、output_format 继续适用。优先从用户材料填变量，只追问无法确定的科学输入；参考配色已授权，不重复要求用户选色。按原图可见分区构建，依用户真实方法改写模块、数据、案例和连接；不得复制原论文结果作为新实验，也不得补造公式、维度、推理、定位框或统计含义。

若有定量图，使用用户原始数据和绘图库生成，检查坐标轴、模型颜色映射、图例、数据标签与数据表一致。若有案例图，使用用户许可素材，检查框坐标、裁剪来源与文字推理是否相符；若有流程图，逐条核对箭头含义、输入输出与模块边界。输出可编辑 SVG/矢量 PDF 和所需预览，缩到论文栏宽后检查所有标签。无法验证时标注待核，不把 prompt 的 reviewed 状态描述为已验证生成效果。

保留 metadata 与 ATTRIBUTION 中原论文、作者、来源链接和 CC BY 4.0 说明，注明改绘关系。不要描摹原照片、卡通头像、品牌标识或场景；用用户有许可的素材或新绘图标。交付时说明内容替换、缺失输入及实际完成的语义/可读性检查。

图号核对结果：官方 arXiv:2505.19223v1/v2 的 Figure 1 雷达形状与本参考不一致，number 保持未知。不得因为柱图部分数值相同、论文标题相同或位置靠前，自动标 Figure 1。
