# 元智能体搜索：生成、评测与档案反馈及候选智能体示例

上半部用 Meta Agent、New Agent 描述框、Agent Archive 三个模块构成生成和反馈回路。左上 Meta Agent 有青色自反馈箭头，并写 Refine until novel and error-free。粗黑连线沿顶部向右进入候选描述框，框内可读 Summary and motivation、Name、Code；候选下方通过 Test performance on tasks and add to archive 路径返回中部档案，档案再沿左侧 Input 路径进入 Meta Agent。

下半部是档案的展开示例带，灰色虚线从档案两侧引出。三张小型系统图依次为 Multi-step Peer Review Agent、Verified Multimodal Agent 和 Divide and Conquer Agent，中间用省略点暗示更多候选。第一张包含 Experts、Answers、Reviewers；第二张有 Visual Analyzer、Visual Paradigm、Verifier、Verified Paradigm 与 COT；第三张展示 Sub-problem Division、多条并行子问题、Experts 和 Ensemble。小图上下方向的细箭头可辨，但精确代码和细小字不可完整核对。

相比上游 architecture，主类型修正为 flowchart：核心视觉叙事是生成—评测—入档—再生成的迭代流程；architecture 与 multi-panel 保留为辅类型。机制用途来自明确的档案反馈和自修订路径。底部网格用于候选设计详图，不是性能对比结果。

适合自动搜索、工作流设计、候选生成优化与知识库累积的闭环概览。改绘替换生成器、候选描述字段、评测过程、档案和三种真实候选内部结构。不要把原例子当作用户的新方法，也不要生成不存在的代码或优越性能。

预览顶部有一行文字被上边缘截断。后续已直接核对指定 arXiv 原图：该行完整写为 Next interesting agent，底部还完整显示 Examples of Discovered Agents；当前预览裁掉了这两处说明，主体流程对应。保留现有资产，本次不补绘或替换裁剪。未阅读全文；图号已在指定 arXiv 2408.08435v1 版核实为 Figure 1，正式会议版未核实，正式子图编号和完整语义均不可由这个裁剪确定。

审查依据：仅本条 published preview 像素；审查日期 2026-10-01。配色为肉眼近似值，保留原来源与许可记录；本条文字经过视觉审查，改绘输出未测试。

图号验证证据：[2408.08435v1 官方 HTML Figure 1](https://arxiv.org/html/2408.08435v1#S1.F1)，方法为官方图注与下载原图的直接视觉对应；Meta Agent/New Agent/Agent Archive feedback loop, self-refinement and all three example agents correspond. Official PNG additionally shows full top label Next interesting agent and bottom label Examples of Discovered Agents; these labels are clipped in the existing preview, but remaining figure identity and process correspond. 图号仅适用于该 arXiv 版本，不代表正式会议出版版编号。验证图片已在完成审查后删除。
