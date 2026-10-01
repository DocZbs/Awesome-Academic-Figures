# Arg-LLaDA：掩码生成与充分性感知细化的双栏过程对比：智能体改绘指引

先阅读 MY_TASK.md，确定用户真实研究内容、输出语言和用途。按顺序查看参考图（metadata 的 assets.reference 或随包预览）、analysis.md、prompt.md、metadata.json 与 ATTRIBUTION，理解本图结构和来源许可；图号已核实为 arXiv:2507.19081v2 的 Figure 1；引用时必须带版本，并注明正式 ACL 会议版图号未核实。分类标注基于预览，补充核号检查了指定官方 HTML 图像；没有阅读全文或试生成。

本图适用用途：mechanism, comparison, method-overview。保留其可借鉴的分区、连接和视觉层次，把原论文内容替换为用户的科学内容。需提供的专用变量为：sequence_blocks, left_mask_steps, right_refinement_steps, diagnosis_module, group_braces, token_color_roles。通用变量 research_content、true_data、layout_changes、language、output_format 继续适用。用户的真实方法优先于原图故事；不得为保留布局编造模块、依赖、公式、数值或结论。

仅追问无法从 MY_TASK.md 或用户材料得到的科学输入；已有参考配色无需再要求选色。缺失数据时先保留明确的数据占位或省去量化结论。若用户要求生成，先校对模块意义与箭头方向，再检查缩小到论文栏宽后的字形、对齐、图例及颜色可辨识性。产生可编辑的 SVG 或矢量 PDF，并导出用户指定的预览格式。无法验证之处明确标注待核，不把文本 reviewed 写成渲染已验证。

保留 metadata 与 ATTRIBUTION 中的原论文、作者、链接和 CC BY 4.0 信息；新图应注明根据参考布局改绘。不要逐像素描摹商标、头像、照片或场景艺术，改用新绘图标/用户有许可的素材。交付时说明替换内容、仍缺失的科学输入与实际完成的输出检查。
