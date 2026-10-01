# 逐 token 与逐尺度生成的三范式对照

左上是文字 token 从左到右生成，左下是图像 patch 按栅格顺序生成并重排为图像，右侧大面板按从粗到细的尺度序列生成 token map。三组低矮模型底座分别用浅黄、浅绿、浅蓝区分；虚线箭头表示自回归顺序，透视图块突出 token 粒度变化。适合介绍生成顺序的创新，改绘必须说明尺度间串行与尺度内并行的真实关系。

## 来源与核对

Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction，NeurIPS 2024，Figure 2。原文件：fig/intro.pdf。版本：2404.02905v2。

已核对独立图注编号、完整原文件及预览。作者原文件按字节保留；PNG/WebP 仅用于浏览。颜色是维护者近似读值。改绘 prompt 为维护者重建，尚未实际生成验证。

