# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Attributing Culture-Conditioned Generations to Pretraining Corpora — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20760

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the pipeline of a system named MEMOed, designed to determine cultural-symbol associations using pretraining data and a large language model. The global layout is divided into two main horizontal sections: an upper section showing the initial symbol collection process, and a lower section enclosed in a dashed box labeled 'MEMOed', which details the core classification and association strength determination steps.

In the upper section, a prompt—'For dinner, my Malaysian neighbor probably likes eating'—is fed into a robot icon representing the OLMo-7B language model. This model outputs a list of candidate symbols: 'nasi lemak', 'vegetable salad', 'anchovies', 'cucumber', and 'sushi'. Each symbol is then evaluated for cultural relevance, with 'nasi lemak' marked as 'Mem.' (member) in blue, while the others are marked 'Not Mem.' in light blue, indicating they are not associated with Malaysian culture.

The lower section, labeled 'MEMOed', contains two main stages. The first stage, 'Classify Relevant Pretraining Documents', uses a signal-to-noise-ratio plus distance metric to filter documents. This is visually represented by two document icons: one with a green checkmark (relevant) and another with a red cross (irrelevant). The second stage, 'Determine Culture-Symbol Association Strength', combines the filtered documents (represented by a stack of yellow documents labeled 'Contribution Score: % of relevant documents') with a statistical Z-score thresholding process (depicted as a bell curve with a vertical dashed line at the peak). The output of this stage feeds back up to the classification step in the upper section, where the final 'Mem.' or 'Not Mem.' labels are assigned based on the computed association strength.

The visual modules include text boxes, document icons, a robot icon for the OLMo-7B model, a list box for symbols, and a bell curve for Z-score thresholding. Colors are used to distinguish between relevant (green check) and irrelevant (red cross) documents, and to mark membership status (blue for 'Mem.', light blue for 'Not Mem.'). Arrows indicate the flow from prompt to symbol collection, then down to the MEMOed module, and finally back up to classification. The dashed box encapsulates the MEMOed system, emphasizing its role as the core processing unit for determining cultural-symbol associations.
