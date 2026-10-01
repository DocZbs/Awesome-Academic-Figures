# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DSGram: Dynamic Weighting Sub-Metrics for Grammatical Error Correction in the Era of Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12832

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel workflows, labeled (a) and (b), illustrating the DSGram score computation process for two distinct sentences, each emphasizing different revision criteria based on context. Both diagrams share an identical structural layout but differ in input sentences, intermediate scores, and final overall scores.

[1] Global Layout and Structure:
Each diagram follows a top-down hierarchical flow: starting from an original and corrected sentence at the bottom, progressing through two LLM-based modules, then to scoring components, and culminating in an overall score calculation at the top. The structure is symmetrical, with two main branches diverging from the LLM modules—one for constructing a judgment matrix and one for scoring—both feeding into a final aggregation step.

[2] Visual Modules and Attributes:
- The bottom-most module is a gray rounded rectangle containing the original and corrected sentences. In (a), the original sentence is casual: “So I think we can not live if old people could not find sciences and technologies and they did not developed.” The corrected version improves grammar and clarity. In (b), the original is more formal: “Here was no promise of morning except that we looked up through the trees we saw how low the forest had swung.”
- Above this, two beige rounded rectangles represent LLM functions: 'LLMs for Constructing Judgement Matrix' and 'LLMs for Scoring'. These feed into subsequent blue and pink modules.
- The blue rounded rectangles, labeled 'Calculator* n' and 'Prompt Engineering', represent computational and prompt-based processing steps. The 'Calculator* n' module contains JSON-like request-response data, including a host URL (www6b3.wlf.ramalpha.com) and numerical results. The 'Prompt Engineering' module includes a detailed instruction: 'You're a meticulous sentence revision quality assessor... analyze and grade sentences based on three-step criteria.'
- The pink rounded rectangles display the three scoring dimensions: 'Semantic Coherence', 'Edit Level', and 'Fluency', along with their numeric values. In (a), these are 8, 8, and 9 respectively; in (b), they are 8, 8, and 3.
- At the top, a gray rounded rectangle calculates the overall score using a weighted sum formula. For (a): 8*0.268073 + 8*0.29518 + 9*0.436747 = 8.436747. For (b): 8*0.11755 + 8*0.486755 + 3*0.395695 = 6.021525.

[3] Connections and Arrows:
Arrows indicate data flow. From the original/corrected sentence, two arrows lead upward to the two LLM modules. From each LLM, one arrow goes to the corresponding blue module ('Calculator* n' or 'Prompt Engineering'). From these, arrows point to the pink scoring modules. Finally, three arrows from each set of pink modules converge into the top gray box for overall score calculation. The weights used in the final formula are derived from the judgment matrix constructed by the 'LLMs for Constructing Judgement Matrix' and processed by 'Calculator* n', which outputs the weight values shown in the JSON response.

The caption explains that (a) represents a casual dialogue emphasizing fluency, while (b) is a formal expression emphasizing edit level, reflected in the differing weights and final scores.
