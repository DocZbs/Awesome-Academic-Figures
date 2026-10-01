# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Ontology-grounded Automatic Knowledge Graph Construction by LLM under Wikidata schema — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20942

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a proposed approach for constructing a knowledge graph from a textual document, using competency questions and an ontology to guide the structuring process. The global layout is a directed acyclic graph with five rectangular nodes arranged in two columns: the left column contains three vertically stacked boxes representing input and intermediate processing steps, while the right column contains two boxes representing structured outputs — the Knowledge Graph and the Ontology. All connections are represented by thick, dark blue arrows indicating the direction of data flow or derivation.

In the left column, the top box labeled 'Document' contains the raw text: 'Douglas Adams was an author, humourist, and screenwriter'. This flows downward via a vertical arrow to the next box, 'Competency Questions-Answers', which contains a question-answer pair: 'Q: What were occupations of Douglas Adams? A: author, humourist and screenwriter.' From this, another vertical arrow leads to the bottom-left box, 'Properties', which extracts a semantic property: '(occupation, The occupation of a person.)'.

From the 'Document' box, a horizontal arrow points to the top-right box, 'Knowledge Graph', which displays structured triples in RDF-like syntax: 'wd:Douglas_Adams rdfs:label "Douglas Adams"@en ; wdt:Occupation wd:writer ; wdt:Occupation wd:comedian ; wdt:Occupation wd:screenwriter.'. This represents the final knowledge representation derived from the document.

A diagonal arrow from the 'Competency Questions-Answers' box also points to the 'Knowledge Graph', indicating that the QA pair contributes to the construction of the graph. Additionally, a vertical arrow from the 'Properties' box points to the bottom-right box, 'Ontology', which defines the schema for the property: 'wdt:Occupation a wikibase:Property ; schema:description: “The occupation of a person” ; rdfs:domain: wd:human; rdfs:range: wd:occupation.'. This ontology provides the formal structure for the property used in the knowledge graph.

Finally, a vertical arrow from the 'Ontology' box points upward to the 'Knowledge Graph', signifying that the ontology constrains and informs the structure of the knowledge graph. The entire diagram emphasizes a pipeline where unstructured text is processed through competency-based questioning and property extraction, guided by an ontology, to produce a formally structured knowledge graph.
