# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Cirbo: A New Tool for Boolean Circuit Analysis and Synthesis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14933

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two side-by-side diagrams illustrating a Boolean circuit and its corresponding And-Inverter Graph (AIG) representation, both computing the SUM₃ function. The left diagram shows the original circuit, while the right diagram displays its AIG form. The global layout is horizontal, with the two representations placed adjacent to each other, each with inputs at the top and outputs labeled 'sum' and 'carry' at the bottom. The circuit operates over the basis B₂ excluding the XOR (⊕) and XNOR (≡) gates, as specified in the caption.

In the left diagram (the circuit), there are three input nodes, x₁, x₂, and x₃, represented as circles at the top. These feed into a network of logic gates, depicted as square boxes, which perform operations such as OR (∨), AND (∧), and a custom binary operation >, defined as a ∧ ¬b. The gates are arranged in a hierarchical structure with multiple levels. The output gates, which produce the final 'sum' and 'carry' values, are drawn with bold outlines to distinguish them from internal gates. Wires connecting the gates are solid lines, except for those representing negated signals, which are shown as dashed lines. The connections follow a top-down flow, with inputs feeding into intermediate gates, whose outputs feed into subsequent gates, culminating in the two output gates.

The right diagram (the AIG representation) is structurally similar but simplified. It also has three input nodes x₁, x₂, and x₃ at the top, connected via solid and dashed lines to a network of square nodes, which represent AND gates in the AIG. The dashed lines again indicate negated inputs. The AIG uses only AND gates and inverters (implied by dashed edges), consistent with standard AIG conventions. The output nodes for 'sum' and 'carry' are also shown at the bottom, with the final gates producing these outputs having bold outlines, matching the convention used in the left diagram. The structure is more compact, reflecting the canonical form of AIGs where all non-AND operations are decomposed into ANDs and negations.

Connections between nodes are directed from top to bottom, indicating data flow. In both diagrams, solid lines denote direct (uncomplemented) connections, while dashed lines denote negated (complemented) connections. The arrows are implicit in the direction of the lines, flowing downward from inputs to outputs. The output gates are clearly marked with bold borders, and the labels 'sum' and 'carry' are placed directly below their respective output nodes. The figure includes a caption explaining the basis of the circuit, the meaning of bold gates and dashed wires, and the definition of the > operator as a ∧ ¬b.
