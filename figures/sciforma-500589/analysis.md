# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SP$^2$T: Sparse Proxy Attention for Dual-stream Point Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of SP²T, a U-Net-style Transformer for point cloud processing, divided into two main parts: (a) an overview of the entire SP²T framework and (b) a detailed breakdown of the SP²T Layer structure.

In part (a), the overall pipeline begins with raw point cloud input P_point, which undergoes embedding followed by spatial-wise sampling to generate a sparse proxy set P_proxy. This sampling step creates a grid-based representation where each cell contains a star symbol representing a proxy point, and an association tuple list is formed linking each proxy to its corresponding point neighbors. The initial features F_point⁰ and P_point⁰, along with F_proxy⁰ and P_proxy⁰, are fed into a U-Net-style backbone composed of stacked SP²T Layers. These layers process the data hierarchically, with skip connections enabling vertex-based association between point and proxy features at each level. The final output features F_pointᵏ and P_pointᵏ are passed to downstream tasks.

Part (b) details the internal structure of a single SP²T Layer, which consists of N identical SP²T Blocks. Each block processes both point and proxy features in parallel. For point features (red components), the block starts with Local Fusion, depicted as a red box containing a small graph of connected points, indicating local neighborhood aggregation. This is followed by a Feed-Forward Network (FFN), shown as a gray rectangle. Then, Proxy-Point Interaction occurs via Sparse Proxy Attention (SPA), illustrated with blue arrows connecting a central point to surrounding proxies, emphasizing sparse attention computation. Finally, Point Cloud Down/Up Sample adjusts the point cloud resolution, producing F_pointⁱ⁺¹ and P_pointⁱ⁺¹.

For proxy features (blue components), the block begins with Point-Proxy Interaction using SPA, shown similarly but with arrows from proxies to points. This is followed by Global Fusion, represented by a fully connected graph among proxy points, capturing long-range dependencies. Another FFN follows, then Proxy Down/Up Sample adjusts the proxy resolution, yielding F_proxyⁱ⁺¹ and P_proxyⁱ⁺¹.

Connections between modules are indicated by arrows: red arrows denote point feature flow, blue arrows denote proxy feature flow, and dashed lines indicate skip connections or auxiliary associations. The architecture emphasizes dual-stream processing with synchronized operations on points and proxies, enabling efficient and comprehensive feature learning through local, global, and cross-modal interactions.
