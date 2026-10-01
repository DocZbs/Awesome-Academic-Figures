# 相邻层之间的移位窗口机制

左侧展示规则的四窗口划分，右侧展示下一层的移位划分，中间红色箭头表示层间变化。两侧保持同一背景图和 patch 网格，因此能直接看出窗口边界发生移动。右侧图例用红色大框表示局部窗口，用灰色小框表示 patch。适合解释空间分组、分块或滑动窗口的机制，改变窗口尺寸时需要重新计算边界。

## 来源与核对

Swin Transformer: Hierarchical Vision Transformer Using Shifted Windows，ICCV 2021，Figure 2。原文件：figs/teaser_v4.png。版本：2103.14030v2。

已核对独立图注编号、完整原文件及预览。作者原文件按字节保留；PNG/WebP 仅用于浏览。颜色是维护者近似读值。改绘 prompt 为维护者重建，尚未实际生成验证。

