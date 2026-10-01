# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MEATRD: Multimodal Anomalous Tissue Region Detection Enhanced with Spatial Transcriptomics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10659

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multimodal approach for detecting Anomalous Tissue Regions (ATRs) by integrating histology images with spatial transcriptomics (ST) data. The global layout is structured as a left-to-right workflow: on the left, two input modalities—'Histology Image' and 'Spatial Transcriptomics'—are shown side-by-side, separated by a plus sign, indicating their fusion. These inputs are processed through a step labeled 'Multimodal ATR Detection', leading to the output on the right, titled 'Anomalous Tissue Regions'.

The histology image is a stained tissue section showing cellular morphology, with regions outlined in red (Tumor Core) and blue (Tumor Edge), as indicated by dashed lines and labels above the image. The Spatial Transcriptomics panel displays a grid of dots representing measurement spots; red dots denote 'Red Spots' (valid gene expression measurements), while white dots represent 'Blank Spots' (missing data). Above this panel, a Gene Expression Matrix X ∈ ℝ^N×G is depicted as a table with rows corresponding to spots (Spot 1 to Spot N) and columns to genes (Gene 1 to Gene G), with numerical values (e.g., 5, 0, 14) illustrating expression levels. Dashed lines connect the matrix to the spatial transcriptomics panel, indicating that the matrix provides the quantitative gene expression data for each spot.

The output panel, 'Anomalous Tissue Regions', combines the histological structure with the spatial transcriptomic data, overlaying the dot pattern from the ST data onto the histology image. The red and blue outlines from the input histology image are preserved, and the red and blank spots from the ST data are superimposed, highlighting the integration of both modalities. The figure emphasizes that ATRs include both tumor core and edge regions, with the tumor edge visually resembling normal tissue, and that in the ST data, ATRs encompass both red (measured) and blank (missing) spots. The overall visual style uses distinct colors (red for tumor core, blue for tumor edge, gray for blank spots, and pinkish for gene expression matrix cells) and clear shapes (rectangular panels, circular spots, outlined regions) to differentiate components. Arrows indicate the direction of processing: a solid black arrow points from the combined inputs to the output, labeled 'Multimodal ATR Detection', signifying the computational pipeline that fuses the two data types to identify anomalous regions.
