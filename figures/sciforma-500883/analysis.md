# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Inferring Functionality of Attention Heads from their Parameters — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11965

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a framework for inferring the functionality of attention heads in large language models (LLMs) by analyzing their parameter mappings. The global layout is divided into two main sections: an upper section depicting the architectural components of a multi-head attention layer and its projection to the vocabulary, and a lower section demonstrating two methods for interpreting the head’s functionality through token pair analysis.

In the upper section, a multi-head attention layer is shown as a teal-bordered box containing multiple attention heads, each represented by a vertical stack of two rectangular blocks labeled W^1_VO (teal) and W^1_QK (gray), extending to W^n_VO (yellow) and W^n_QK (gray) for the nth head. A magnifying glass labeled 'h' points to one such head, indicating focus on individual head parameters. From this head, a curved arrow leads to a large square matrix labeled M, representing the projection of the head’s parameters onto the vocabulary space. This matrix has dimensions |V| × |V|, where |V| denotes the size of the vocabulary, and is visually depicted as a grid with varying shades of yellow and beige, indicating different weight values or attention scores between token pairs.

The lower section, enclosed in a dashed border, is titled 'Inferring functionality by analyzing mappings between tokens' and presents two distinct approaches. Section A, labeled 'Evaluating the head’s implementation of a predefined operation,' shows a sub-matrix with rows labeled 'France,' 'Germany,' 'Egypt' and columns labeled 'Cairo,' 'Paris,' 'Berlin.' The cells are shaded in yellow and gray, with higher yellow intensity indicating stronger attention scores. Below this matrix, the label 'Country to capital' is displayed with a score of 0.7, suggesting the head’s performance in mapping countries to their capitals.

Section B, labeled 'Inspecting the head’s salient operations,' displays another sub-matrix with rows 'Tomas,' 'Donna' and columns 'tommi,' 'Don,' 'Tom.' Again, yellow shading indicates strong attention links, particularly between 'Tomas' and 'Tom,' and 'Donna' and 'Don.' Below this, the label 'Name variations' is shown with a score of 0.9, indicating a high correlation for name-related transformations. A small robot icon is placed next to this label, adding a visual cue for the concept of name variation detection.

Arrows connect the multi-head attention layer to the matrix M, and from M to both sections A and B, illustrating the flow from model parameters to functional interpretation. The overall structure emphasizes that the framework treats each attention head as a matrix M over the vocabulary, and then analyzes specific sub-matrices to evaluate predefined operations (A) or discover salient operations (B) based on token-to-token mappings.
