# 多模态 token 序列与编解码器布局

上方一条横向模型条贯穿整张图，下方连续排列不同模态的 token 片段。左侧淡黄色区域是双向注意力前缀，右侧淡粉色区域是自回归输出。文本、视觉、音频分别用蓝、黄、绿编码，模态通用标记用红色；底部梯形表示编码器或解码器，并与示例输入输出垂直对齐。改绘时需精确描述自己的 token 格式和注意力边界。

## 来源与核对

VideoPoet: A Large Language Model for Zero-Shot Video Generation，ICML 2024，Figure 2。原文件：figures/vffm_schematic.pdf。版本：2312.14125v4。

已核对独立图注编号、完整原文件及预览。作者原文件按字节保留；PNG/WebP 仅用于浏览。颜色是维护者近似读值。改绘 prompt 为维护者重建，尚未实际生成验证。

