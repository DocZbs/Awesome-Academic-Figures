# 医学影像补全与翻译的双网络框架

上下两个灰底虚线框。上方 Completion Network：缺口 CBCT、原 CT 与缺口掩码作为左侧输入，蝴蝶形 Generator 生成 sCBCT，与原输入组合得到 Inpainted CBCT；右侧 Global 与 Local Discriminator 分别比较整体与局部，彩色虚线指向 Real/Fake。补全结果转换矢状面到轴向切片后进入下方 Translation Network，经过 Generator 得到 sCT，和 Original CT 送入 Discriminator。不能把这些示例切片视为用户的真实诊断或效果证据。

主类：architecture。布局：left-to-right, nested-modules。颜色为目测近似。

图号已核实：arXiv 2502.04898v1 Figure 2。依据：https://arxiv.org/html/2502.04898v1#S3.F2。核查采用现有预览与官方 HTML 图像直接对照，未下载整篇 PDF。保留上游原图字节及既有许可记录；未进行全文科学审核或改绘生成验证。
