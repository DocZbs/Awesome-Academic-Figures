# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the PRISM framework with typed examples, depicting a memory revision process driven by a large language model (LLM). The global layout is structured as a vertical input pipeline on the left, feeding into a central LLM module, which generates a revision that updates the memory state. On the far left, five icons represent the input components: a clipboard for task specification (T), a speech bubble with a question mark for query (q), an open book with a magnifying glass for schema (S), a database icon for memory state (m_i), and an information speech bubble for data chunk (d_i). These inputs are grouped vertically and connected via thick gray lines to the LLM, indicating they are jointly processed. The LLM is represented as a large square box labeled 'LLM' at the center-right of the diagram. It produces two outputs: a proposed revision r_i and an updated memory state m_{i+1}. The revision r_i is shown as a square box above the LLM, connected by a solid blue upward arrow. From r_i, another solid blue arrow points to m_{i+1}, labeled 'Validate and revise', indicating the application of the revision. The memory states m_i and m_{i+1} are shown as rounded rectangles; m_i contains the nested structure (k1, ((k2, v2), (k3, v3))), while m_{i+1} shows the revised structure (k1, ((k2, v4), (k3, v3))), demonstrating that the value v2 has been updated to v4 at the path (k1, k2). The revision r_i is annotated as ((k1, k2), update, v4), specifying the path, operation, and new value. Purple dashed arrows connect these structures to their corresponding textual representations on the right, serving as visual annotations for the example. Additionally, a dotted purple line loops from the output of the LLM back to m_i, suggesting iterative or recursive processing. The figure also includes a hypothetical alternative: if the operation were 'add', the path would be created and v4 inserted; to update k3, the path would be (k1, k3), yielding revision ((k1, k3), update, v4). The overall workflow follows a sequential logic: inputs are fed to the LLM, which generates a revision based on the current memory and context, and this revision is applied to produce a new memory state, enabling iterative refinement.
