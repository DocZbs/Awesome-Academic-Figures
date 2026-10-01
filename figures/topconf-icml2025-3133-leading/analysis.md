# 列嵌入、行交互与上下文预测的三阶段框架

可见图是三阶段架构，不是仅展示研究亮点的 Teaser。左上输入表 X 经 Column-wise inter-sample Embedding / TF_col 变为绿色嵌入体 E；右侧黄色虚线框中前置多个 CLS 标记、Rotary positional embedding、TF_row，得到行向量 h_i；再由向左箭头进入左下红色虚线框 TF_icl，训练样本附加 Lookup table 标签编码，测试样本仅输入 h，顶部输出预测。注意力弧线位于 TF_icl 内部，不把它误标为系统反馈环路。

## 适合借鉴

借鉴分区比例、对照结构、标签位置与信息流；用自己的研究组件、示例和科学结论替换原论文内容。输入 MY_TASK.md 时说明想保留的布局以及必须保留的科学关系。

## 核对范围

本次逐张查看已发布 preview.webp，核对图类、用途和可见布局。未阅读整篇论文，未核实原论文图号；图中可见文字以外的科学细节不能补猜。配色为视觉近似，prompt 已逐图整理但尚未进行生成测试。原图来源、许可与署名以 metadata.json / ATTRIBUTION.md 为准。
