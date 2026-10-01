# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling 4D Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15212

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the SimpleMAE framework for video representation learning. The global layout is left-to-right, depicting a pipeline starting from raw video input and ending in reconstructed video and extracted features. On the far left, 'Input video space-time patches' are represented as a 3D grid of small gray cubes, with a few colored cubes (orange, blue, green) indicating selected patches. These patches undergo 'Masking', where 95% are randomly dropped, leaving only a sparse set of colored cubes (orange, blue, green) as visible inputs. These masked patches are fed into a Transformer encoder, which is enclosed in a dashed box labeled 'Transformer'. Inside this box, the first stage consists of N self-attention blocks, each shown as a vertical stack of three colored cubes (orange, blue, green) within a gray rectangle, with a circular arrow and '×N' indicating repeated application. The output of this stage is concatenated with 'Coarse learned tokens', depicted as a cluster of pink cubes above the Transformer. This concatenation feeds into the final two self-attention blocks (indicated by '×2'), also shown as a vertical stack of cubes, now including both the original colored cubes and pink ones. From this final stage, two outputs emerge: one path leads through a 'Linear decoder' to produce 'Rec. Video', shown as a large gray cube labeled accordingly. Another path branches out directly to 'Video features', represented by three parallel lines (orange, blue, green) extending rightward, indicating that features from any layer can be used for downstream tasks. The visual modules use distinct colors to differentiate components: gray for input patches and reconstruction, orange/blue/green for masked input tokens, and pink for coarse learned tokens. All connections are solid black arrows, indicating data flow direction. The figure emphasizes that no custom decoder, target normalization, or tube masking is used, and that the learned tokens are decoded via a simple linear layer.
