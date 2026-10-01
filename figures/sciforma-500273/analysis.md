# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AirMorph: Topology-Preserving Deep Learning for Pulmonary Airway Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11039

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comprehensive pipeline for selecting an airway radiomic signature, structured as a top-down flowchart with branching pathways. The global layout is hierarchical and symmetrical, beginning at the top with a single input box labeled '23 Anatomical Components', which feeds into a central processing step. From there, the workflow diverges into two parallel branches based on statistical analysis outcomes, converging again at the bottom to produce the final output: 'Airway Radiomic Signature'.

Visual modules are represented as rectangular boxes with black borders. Most boxes have a white background, while those representing group data (Experimental Group and Control Group) feature a gray header bar with the group name and a white body containing the feature type. Text within boxes is centered and uses a clear, sans-serif font. Key processing steps are labeled with descriptive text placed directly above or below arrows connecting the boxes.

The process begins with 'Morphological Feature Extraction' from the 23 anatomical components, resulting in 'Morphological Features' for both Experimental and Control Groups. These features undergo 'Statistical Analysis', splitting the components into two categories: 'Morphological-Significant Anatomical Components' and 'Morphological-Insignificant Anatomical Components'. Each branch then proceeds with 'Radiomic Feature Extraction' to derive 'Radiomic Features' for the Experimental Group. In each branch, these radiomic features are compared against the Control Group's morphological features using a 'T-test', yielding 'Radiomic-Significant Features' from the significant branch and 'Radiomic-Insignificant Features' from the insignificant branch. Finally, both sets of features are combined through 'Ranking & Intersection' to generate the 'Airway Radiomic Signature' in the Experimental Group. All connections are indicated by solid black arrows pointing downward or horizontally, clearly showing the direction of data flow and processing sequence.
