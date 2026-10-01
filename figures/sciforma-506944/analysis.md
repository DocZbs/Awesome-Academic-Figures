# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Qinco2: Vector Compression and Search with Improved Implicit Neural Codebooks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03078

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a large-scale search pipeline that integrates vector quantization and efficient indexing techniques for fast similarity search. The diagram is vertically divided into two main sections: 'Database encoding' at the top and 'Large-scale search' at the bottom, illustrating the offline preprocessing phase and the online query processing phase respectively.

In the 'Database encoding' section, the input is the database D along with training data, represented by a cylindrical database icon. This data is fed into a Vector Quantization (VQ) module, labeled with K_IVF = 10^6, which produces a centroid c^0 and the residual x - c^0. The residual is then processed by a QINCo2 encoding module, generating a sequence of codewords c^1 through c^M. These codewords are used to create AQ (Additive Quantization) and combined RQ (Residual Quantization) tables, a step explicitly noted as being performed using training data only. The centroid c^0 is also passed down to the search phase via a dashed line.

The 'Large-scale search' section begins with an input query q. This query first undergoes IVF (Inverted File) indexing, producing a shortlist S_IVF ⊂ D of size approximately 85k. This step is visually represented by a gray box labeled 'IVF'. The output of IVF feeds into an AQ module, which further refines the candidate set to S_AQ ⊂ S_IVF with a size of 800. This AQ step is enclosed in a dashed box, indicating it is part of the Faiss search framework. Next, a 'Pairwise additive decoding' step reduces the list to S_pairs ⊂ S_AQ with a size of 100, also within a dashed box. Finally, the QINCo2 decoding module computes arg min over c ∈ S_pairs of the loss function L(q, F((c^m)_m)), selecting the best match based on the decoded representation.

Connections between modules are shown with solid arrows for direct data flow and dashed arrows for auxiliary or precomputed information. Notably, the centroids c^0 and the codewords c^1,…,c^M from the encoding phase are reused during search, as indicated by dashed lines connecting them to the AQ and pairwise decoding stages. The figure includes a note at the bottom stating that shortlist sizes are illustrative for a specific configuration. The overall structure emphasizes a hierarchical filtering approach, starting from a large candidate set and progressively narrowing it down using increasingly refined quantization and decoding steps.
