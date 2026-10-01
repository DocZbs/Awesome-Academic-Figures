# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards Global AI Inclusivity: A Large-Scale Multilingual Terminology Dataset (GIST) — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18367

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a workflow for improving the translation quality of AI-specific terminology from English to Chinese in research papers and model/data cards. The global layout is structured as a two-column top-down flowchart with four main rectangular modules connected by directional arrows. At the top left, a blue-bordered rounded rectangle labeled 'AI Research Papers' contains an example English sentence: 'The model performs competitively with recent coreference resolution systems.' Below it, an incorrect Chinese translation is shown, where 'coreference resolution' is mistranslated as '共指解析' (coreference analysis), highlighted in red. On the top right, a green-bordered rounded rectangle labeled 'Model/Data Cards' presents another English example: 'This can lead to the explain-away effect, wherein the models only consider features easier to explain predictions.' Its incorrect Chinese translation misrenders 'explain-away effect' as '解释效应' (explanation effect), also highlighted in red. Both top modules feed into a central orange-colored rounded rectangle titled 'Terminology dictionary,' which lists correct mappings: 'coreference resolution: 共指消解' and 'explain-away effect: 相消解释作用'. From this dictionary, two arrows branch downward to corresponding bottom modules: a blue-bordered box on the left labeled 'Correct Chinese Translation' showing the accurate version of the first sentence with '共指消解' correctly used; and a green-bordered box on the right labeled 'Correct Chinese Translation' displaying the corrected second sentence with '相消解释作用' properly applied. The connections are color-coded—blue arrows link the AI Research Papers module to the dictionary and then to its corrected translation; green arrows connect the Model/Data Cards module to the dictionary and then to its corrected translation. This visual structure emphasizes how a centralized terminology dictionary can be used post-hoc to fix inaccuracies in machine-translated AI texts, thereby enhancing clarity and fidelity for non-English readers.
