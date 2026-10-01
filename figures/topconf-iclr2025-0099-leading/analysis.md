# AgentHarm：两类请求、智能体响应与代理工具概览

整幅图横向展开：左侧两条上下平行的请求路径，中间为 LLM agent 与多步工具调用，右侧为一个浅黄色圆角工具库。上行标为 Harmful request，人物上方云形思考泡泡用多个象征性图标表示请求场景；下行为 Benign request。两条灰色箭头分别进入机器人头部。上行机器人有绿色拒绝和粉色同意气泡，下行只有绿色同意气泡；机器人右侧各有由两根粗灰色弯箭头构成的 Multi-step tool calling 回路。

右侧 Proxy tools 面板按三列排列地图、终端、手机、邮件、网络、对话和文档等工具图标，底部还有省略圆点。它展示的是请求类别、可能响应和工具范围，没有各类别的树状层级，因而删除上游 taxonomy 检索词。主类型为概念图，同时可检索为问题与评测场景概览 teaser；这个判断来自实际请求与工具场景，而不是图库位置。用途是基准/数据范围概览和实验设置，不把图中工具调用标记等同于详细内部机制。

适合说明安全或可靠性评测的输入类别、响应分支以及共用工具集合。改绘时替换两类请求、响应选项与工具清单，保留两条平行路径和共用工具库。使用无商标的原创简洁图标，不沿描具辨识度的网络工具标志；不要复制原图潜在有害请求的具体内容或推断执行方法。

预览中部分云内图标仅能辨认轮廓，不能据此补出精确基准类别或样本数。未阅读论文全文、未校对原始分辨率裁剪，图号已在指定 arXiv 2410.09024v1 版核实为 Figure 1，正式会议版未核实；左右分区不是正式子图编号。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

图号验证证据：[2410.09024v1 官方 HTML Figure 1](https://arxiv.org/html/2410.09024v1#S1.F1)，方法为官方图注与下载原图的直接视觉对应；Both images have identical harmful/benign request lanes, refusal/acceptance bubbles, two multi-step tool-call loops and the same 3-column Proxy tools inventory. Official PNG has larger outer whitespace; preview is scaled/cropped around the figure content. 图号仅适用于该 arXiv 版本，不代表正式会议出版版编号。验证图片已在完成审查后删除。
