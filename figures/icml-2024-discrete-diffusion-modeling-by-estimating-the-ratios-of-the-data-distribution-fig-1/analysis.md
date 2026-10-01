# 生成质量与推理开销的折线对比

横轴是网络评估次数，纵轴是生成困惑度，两条带圆点的下降曲线表示不同大小的 SEDD，星形点表示 GPT-2 基线。蓝色和橙色区分模型大小，图例置于上方，浅灰网格辅助读值。适合性能—计算量权衡图。改绘必须保留真实坐标尺度和基线的实际开销，不能把离散星形基线误画成连续趋势线。

## 来源与核对

Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution，ICML 2024，Figure 1。原文件：imgs/img_perplexity.png。版本：2310.16834v3。

已核对独立图注编号、完整原文件及预览。作者原文件按字节保留；PNG/WebP 仅用于浏览。颜色是维护者近似读值。改绘 prompt 为维护者重建，尚未实际生成验证。

