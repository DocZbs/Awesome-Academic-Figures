# 多智能体失败日志的人工与自动归因流程

上方两个黑色虚线圆角框是 LLM Multi-Agent System 与 Tasks，以加号合并。左框内三个彩色机器人相互连接，右框列 Assistant、Coding、Math。向下箭头进入横跨画面的灰色 Failure Logs 条。接着在“Or”处分成左右两列：红框 Manual Failure attribution 配人头/思考图标、红叉以及 Intensive Cost / Needs Expertise；绿框 Automated Failure Attribution 配工具/模型图标、绿勾与 Efficient / Expert-Free。

底部保持对应双列：左侧三个代理的 Good、Good、Bad 状态标出 Failure Responsible Agent，右侧用代理状态及小记录符号说明 Decisive Error Step。主流向明显由上到下；当前允许标签没有纵向流，因此不误标left-to-right。two-column描述两种归因方式的并列，nested-modules描述组内角色/任务。两列比较分支作为高层面板计数，不是论文正式子图数。

原architecture改为流程图，辅以概念图；用途为方法介绍及人工/自动比较。没有归因算法内部操作，不能因为涉及分析就贴mechanism。勾叉和成本文字是概念主张，不是用户新模型已测得的性能。

适合展示共享日志经过两种分析方式产生不同粒度结果。需替换系统角色、任务类别、日志字段、归因步骤、责任实体与关键事件定义；不要固定第三个代理为失败者。模型品牌标志改成合法通用符号。该预览未核正文图号或全文算法，改绘尚未生成验证。

图号补充核验：本图对应 arXiv 2505.00212v1 的 Figure 1；通过官方图像逐图对照确认，正式会议版本图号尚未独立核实。依据：https://arxiv.org/html/2505.00212v1#S1.F1
