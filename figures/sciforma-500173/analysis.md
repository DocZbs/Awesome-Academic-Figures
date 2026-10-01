# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Heterogeneous Graph Transformer for Multiple Tiny Object Tracking in RGB-T Videos — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10861

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part architectural diagram of a Heterogeneous Graph Transformer (HGT) encoder used for multi-source information aggregation in a detection framework. Part (a), labeled 'HGT Encoder', shows a vertical stack of four processing stages, each containing an HGT module. The input to each stage consists of different node types: T_k^t (blue circle), T_k^{t-1} (light blue circle), D_k^e (green circle), and D_k^l (light blue circle), all connected via G^a (graph adjacency) to their respective HGT blocks. Each HGT block outputs a feature vector that flows into a shared Aggregation Module on the right, which combines features from all four stages using summation operations (indicated by circular plus signs). The final output of the Aggregation Module is a pair of nodes: D_k^x (green circle) and D_k^l (light blue circle), representing refined detection queries. The entire encoder is enclosed in a light yellow rounded rectangle.

Part (b), labeled 'HGT', provides a detailed view of a single HGT module. It takes three input node types: D_k (blue circle), T_k^t (green circle), and T_k^{t-1} (light blue circle). These inputs are processed through query (Q), key (K), and value (V) projections, denoted as Q[D], K[T], V[T], Q[D], K[H], V[H], etc., where H likely stands for historical or another node type. The keys and queries are transformed using learnable weight matrices: W_{DT}^{ATT} and W_{DH}^{ATT} for attention computation. The attention scores are computed via dot products, passed through a Softmax function, and then multiplied with the corresponding value vectors. The resulting attended values are summed and passed through a ReLU activation. Additionally, there is a direct edge connection from T_k^t to D_k, represented by E_{HDT}, and from T_k^{t-1} to D_k, represented by E_{HT}. A bilinear upsampling operation is applied to the output before it is added to the original D_k input via a sum operation (circular plus sign). The diagram includes a legend on the right indicating symbols: red arrows for 'Bilinear Upsampling', green arrows for 'Linear Embedding', black arrows for 'Directed Edge', circular plus for 'Sum', and circular cross for 'Dot'. The overall layout of part (b) is a horizontal flow from left to right, with feedback loops and parallel processing paths. The entire HGT module is enclosed in a gray rounded rectangle.
