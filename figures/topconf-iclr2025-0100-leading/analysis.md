# AgentOccam：动作与观察空间对齐的智能体—环境闭环

虚线竖向分隔 Agent 和 Environment 两个主要区域。左侧灰色大圆角面板包含中央 LLM Policy、左上两段绿色对话气泡和左下 Previous Approaches: Compound LLM Policy 对照说明。上方动作 A_t 从策略指向一组彩色动作标签：click、type、note、stop、go_back、branch、prune；下方 observation O_t 从文本观察框返回策略。中部青绿色框写出 AgentOccam 的 Action and Observation Space Alignment，并分成动作空间压缩和观察冗余减少两条说明。

右侧上方为 Original Actions 标签组，中间 Web Server 用多个叠放浏览器窗口表示，下方为 Original Observation 文本框。外侧黑色弯箭头连接原始动作、服务器和原始观察；青绿色连接线把左侧对齐动作送往右侧，把右侧观察送入左侧对齐观察。图内实质是接口变换与交互闭环，architecture 主类型准确，补 flowchart 和 mechanism 用途，双栏/反馈回路/嵌套模块比泛称框架更可查。

适合展示模型策略和外部环境之间的双向接口、动作集合简化、观察摘要或表示变换。用户应替换策略名、真实动作列表、环境和观察示例，明确各连接的传递方向。不能只凭文本“More Compact”“Less Redundant”生成定量效率提升。

机器人插画和网页缩略截图中的微小文字不可可靠转写；改绘应使用原创中性策略符号和合成界面示意。仅核对预览布局，不声称验证浏览器状态、具体网站许可、论文全文；图号已在指定 arXiv 2410.13825v1 版核实为 Figure 1，正式会议版未核实。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

图号验证证据：[2410.13825v1 官方 HTML Figure 1](https://arxiv.org/html/2410.13825v1#S1.F1)，方法为官方图注与下载原图的直接视觉对应；Agent and Environment split, aligned action chips, AgentOccam alignment block, robot policy glyph, browser-window stack, original/aligned observation excerpts and arrow directions correspond. Differences are scale, typography rendering and framing; no visible scientific process change. 图号仅适用于该 arXiv 版本，不代表正式会议出版版编号。验证图片已在完成审查后删除。
