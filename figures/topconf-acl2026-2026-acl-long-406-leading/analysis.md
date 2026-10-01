# VAR：视觉定位、推理纠错与多基准性能对比

这是一张横向多面板案例与结果概览。左侧长圆角框展示英文问题、街口照片、卡通模型头像、眼睛图标及 Visual Grounding 字样；橙色弯箭头从未定位的表现指向下面带绿色定位框的同一街景。能看出行人、路口、车辆和信号灯被框出，但预览没有给出足以校验坐标系的信息。

中间上方浅橙色矩形为 General MLLM 的 COT Reasoning。长段文字用红线/红虚框强调错误视觉判断，底部明确显示 Wrong! 以及 WEAK GROUNDING! NO BACKTRACKING! STRONG HALLUCINATION!。下方由水平虚线分隔出多系列折线图，纵轴为 Average Accuracy(%)，横轴为多个基准类别；橙色实线和其他彩色虚线进行性能比较。不是所有细小图例与横轴缩写都足够清晰，不能从预览补出完整表格。

右侧浅蓝圆角框为 Visual Attention Reasoning：上段推理中部分实体词绿色加粗，错误信号灯判断为红色。中部按搜索顺序排出行人、斑马线、车辆和红绿信号灯的小裁剪图，使用绿色、黄色和红色箭头连接。下段黄色 Wait! I miss a box. Let me check again. 表现自校验，再用红色和绿色 bbox 文本对两类信号灯区分，最后给出结论。原段落只是这个参考案例的叙事，不代表任意新图片的正确答案；不能把显示的 bbox 数字直接用于新照片。

原 architecture 改为 multi-panel，补 qualitative、data、teaser。teaser 依据是图里确有问题、传统方法失误、改进案例及结果概览；用途 comparison、qualitative、method-overview。总布局是左侧输入—中间错误/结果—右侧修正的横向比较；中间有上下嵌套两块，所以用 left-to-right、nested-modules，而不是 two-column 或 grid。

适合表现视觉推理失败与修复、定位式解释、新方法案例与整体效果。替换有许可的案例图、问题、已核定位框、两种真实推理文本、裁剪连接及真实基准数据；不要复用原结论、坐标或源图人物照片。生成对比曲线应由可追踪数据绘制。只检查预览、未查正文或原始图号；细小文本与颜色为有限分辨率下的观察，改绘仍未测试。
