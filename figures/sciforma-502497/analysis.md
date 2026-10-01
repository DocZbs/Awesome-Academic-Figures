# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

KARRIEREWEGE: A Large Scale Career Path Prediction Dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14612

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a data processing pipeline for creating the Karrierewege and Karrierewege+ datasets, presented as a left-to-right flowchart. The global layout is linear and sequential, with each stage represented by distinct visual modules connected by thick brown arrows indicating the direction of data flow.

Starting from the left, the first module is a black document icon labeled 'Dataset of standardized German Resumes'. This is linked via a brown arrow labeled 'is linked to' to the next module: a tree-like graph structure composed of interconnected circles, labeled 'Berufenet (German)'. This represents a hierarchical occupational classification system in German.

From Berufenet, another brown arrow labeled 'Data Linkage' points to a similar tree structure labeled 'ESCO (German)', indicating a mapping or alignment process between the two occupational taxonomies. The next step in the pipeline is a document icon labeled 'Karrierewege Dataset (28 ESCO Languages)', signifying a multilingual dataset derived from the linked ESCO taxonomy.

From this dataset, two parallel paths diverge, each leading to a stylized alpaca icon. The upper path leads to an alpaca labeled 'K+oc (English)', representing a model or component that generates content per occupation. The lower path leads to another alpaca labeled 'K+cp (English)', which generates content per career path. These two components are then merged via converging arrows into a final document icon labeled 'Karrierewege+ Dataset (English)', indicating the enriched, English-language version of the dataset.

All text labels are in black sans-serif font, and the icons are simple black outlines. The arrows are solid brown, providing clear directional cues. The figure visually conveys a transformation from raw resume data through structured occupational taxonomies to a final, enriched, multilingual dataset, with specific emphasis on the distinction between occupation-level ('_oc') and career-path-level ('_cp') synthesis in the final stages.
