# MMed-RAG：领域检索、上下文选择与偏好微调的多分区流程

画面有四个主要分区：左上蓝底的 1 Domain-Aware Retrieval Mechanism，中上浅绿底的 2 Adaptive Retrieved Context Selection，左下至中下的 3 RAG-Based Preference Fine-Tuning，右侧窄列为偏好数据到模型的训练链。它不是单一网络堆叠，因此主类型改为 multi-panel，保留 architecture 和 flowchart。

分区 1 左侧列有 IU-Xray、MIMIC、Quilt 示例影像，进入 Domain Identification 后分流到 Radiology/Pathology 与对应 Retriever。分区 2 展示 Medical Image、Domain Label、Question 和 Med-LVLM 的联系；下方 Retriever 接入 Top-k Reports，再经 Adaptive-k Reports 通向模型，右下 Similarity Scores 用柱状图图标示意。这里只可判断存在选择路径，不能推断具体阈值、排序数值或训练公式。

分区 3 用三个虚线边框案例分别组织 Think it by Self、Learn How to Copy 和 Avoid Interference from Incorrect Homework；内部多处并排对照带勾/叉的检索与模型过程。学生抄作业插画是解释类比，图中 Original Image/Unrelated Image、RAG、Med-LVLM 和正确/错误标记才是可替换的科学内容。右侧纵向箭头依次连接 Constructed Preference Pairs、Preference Data、Preference Fine-Tuning、Stronger Med-LVLM。现有布局标签没有 top-to-bottom；不把这条纵向链硬标为 left-to-right，横向标签仅描述左上分流。

适合一个方法同时呈现检索路由、上下文裁剪、偏好案例和训练阶段的综述。改绘时替换真实领域、检索器、上下文规则、偏好对比和训练阶段，案例数应随实际方法变化；勾叉只能表达用户确认的案例判断。

图内可见医学影像缩略图和学生插画，它们的独立来源/权利未从预览确证，需额外第三方素材检查；本次保留原许可字段，不将它们重新声明为自有素材。改绘用原创抽象影像占位与简单流程图标，禁止沿描病人影像或插画。小图文字较密，未完整转写；未阅读论文全文、未验证图号或原始裁剪。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

后续官方图像比对：已直接查看 arXiv 2410.13085v1 的 Figure 1 原图。整体三阶段布局对应，但第 3 分区两处 Unrelated Image 在官方 v1 为随机噪声图，在当前预览为胸片，存在实质案例素材变更。该指定版本不能作为当前图像精确对应的图号证明，因此 source.number 继续保持 null，正式会议版亦未核实。
