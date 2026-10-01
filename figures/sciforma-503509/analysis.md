# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FAP-CD: Fairness-Driven Age-Friendly Community Planning via Conditional Diffusion Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16699

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-part architectural diagram illustrating a graph-based denoising network with fairness-aware demand modeling. Part (a) shows the overall graph denoising network structure, which operates at diffusion step n. It takes node features X_t and edge adjacency A_t as inputs. These are first processed by separate blue rectangular blocks labeled 'Node Augmentation' and 'Edge Augmentation'. The augmented features feed into a large dashed box labeled 'Residual Hybrid Layer', which contains two green rectangular modules: 'Graph Transformer Block' and 'Message Passing Block'. Outputs from these blocks are combined via element-wise addition (indicated by ⊕ symbols) and then passed through two pink rectangular 'FC' (fully connected) layers—one for node features and one for edge features. The node output is further processed by a pink 'MLP' block to produce ε_{t-1,X}, while the edge output goes through a yellow 'Conv' block to yield ε_{t-1,A}. These noise predictions are subtracted from the current state to generate X_{t-1} and A_{t-1}, which are fed back into the next iteration. A 'Condition' input, originating from a green 'Fair-Demand Module' at the top, is integrated via multiple dashed lines into the Residual Hybrid Layer. Additionally, a positional encoding derived from 'Diffusion step n' is processed by an MLP and added to the layer. Part (b) details the 'Graph Transformer Block', which consists of a bottom section with 'Node Embedding' and 'Edge Embedding' (gray rectangles) feeding into a light blue 'Cross Attention' block. This is followed by two parallel paths, each containing an 'Add & Norm' (orange rectangle), an 'MLP' (pink rectangle), and another 'Add & Norm', with skip connections indicated by ⊕ symbols. The outputs from both paths are combined and passed upward. Part (c) illustrates the 'Fair-Demand Module', which receives 'Grid Features', 'Urban Attributes', and 'Grid Demands' (gray rectangles) as inputs. 'Grid Features' and 'Urban Attributes' are processed by separate pink 'FC' layers, while 'Grid Demands' are concatenated (yellow 'Concat' block) with the output of the 'Urban Attributes' FC before being fed into another pink 'FC'. The outputs of all three FCs are combined via an 'Attention' block (green rectangle), which also receives a 'Query' from a pink 'MLP' that processes the 'Condition' input. The final output of the module is the 'Condition' signal, which feeds back into part (a).
