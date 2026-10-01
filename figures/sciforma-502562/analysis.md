# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On Verbalized Confidence Scores for LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14737

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct methodologies for uncertainty quantification in Large Language Models (LLMs), arranged vertically in separate horizontal workflows. Each workflow is labeled with a descriptive subtitle indicating its underlying principle.

[1] Global Layout and Structure:
The diagram consists of three parallel horizontal pipelines stacked vertically. Each pipeline begins with an input labeled 'prompt' on the left and proceeds through a series of processing modules to produce an output on the right. The top pipeline is labeled 'based on a proxy model', the middle one 'based on sampling consistency', and the bottom one 'based on verbalized confidence scores (our approach)'. Below all three pipelines, a caption reads: 'Different uncertainty quantification methods for LLMs.'

[2] Visual Modules and Attributes:
All modules are represented as rectangular boxes with rounded corners. Two distinct colors are used: dark teal for core LLM components and light blue for auxiliary or derived components.

In the top pipeline:
- A dark teal box labeled 'LLM' receives the 'prompt' and outputs an 'answer'.
- Both the 'prompt' and the 'answer' feed into a light blue box labeled 'proxy-model', which produces a 'confidence score'.

In the middle pipeline:
- A dark teal 'LLM' box receives the 'prompt' and generates multiple outputs: 'answer a', 'answer a₁', ..., 'answer aₙ'. These outputs are grouped by a large curly brace on the right.
- This group feeds into a light blue box labeled 'similarity function', which computes a 'confidence score'.

In the bottom pipeline:
- The 'prompt' first enters a light blue box labeled 'prompt method', which transforms it into a 'modified prompt'.
- The 'modified prompt' is then fed into a dark teal 'LLM' box, which outputs both 'answer + confidence score'.

All arrows are solid, dark teal lines with arrowheads indicating direction of data flow.

[3] Connections and Arrows:
Each pipeline follows a clear directional flow from left to right.

Top pipeline: An arrow from 'prompt' points to the 'LLM'; another arrow from 'LLM' points to 'answer'; two arrows branch from 'prompt' and 'answer' respectively to converge at the 'proxy-model'; finally, an arrow from 'proxy-model' leads to 'confidence score'.

Middle pipeline: An arrow from 'prompt' to 'LLM'; multiple arrows diverge from 'LLM' to the individual answers; these answers are grouped by a brace and connected via a single arrow to the 'similarity function'; an arrow from 'similarity function' leads to 'confidence score'.

Bottom pipeline: An arrow from 'prompt' to 'prompt method'; an arrow from 'prompt method' to 'modified prompt'; an arrow from 'modified prompt' to 'LLM'; and finally, an arrow from 'LLM' to 'answer + confidence score'.

The diagram visually contrasts three approaches: using a secondary proxy model to assess confidence, measuring confidence via internal sampling consistency, and modifying the prompt to elicit both answer and confidence directly from the LLM.
