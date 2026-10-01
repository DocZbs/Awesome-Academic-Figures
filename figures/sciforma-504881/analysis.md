# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CL-Attack: Textual Backdoor Attacks via Cross-Lingual Triggers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19037

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a backdoor attack methodology on a language model, demonstrating how a clean model is transformed into a poisoned model through fine-tuning on a malicious dataset, and how the poisoned model behaves under different input conditions. The global layout is divided into three main horizontal sections: the top section shows the model poisoning process, while the bottom section presents a side-by-side comparison of input queries (Q1, Q2, Q3) and corresponding outputs (A1, A2, A3) from the poisoned model.

In the top section, a robot icon labeled 'Clean model' (with a neutral face, blue body, red ears, and yellow antenna) is connected via a rightward arrow labeled 'Fine-tune' to another robot icon labeled 'Poisoned model' (with an angry purple face, devil horns, and same body features). Between them is a document icon labeled 'Poisoned dataset', containing a small purple devil emoji, indicating the adversarial data used for fine-tuning.

The bottom section consists of three input boxes on the left, each representing a query, and three output boxes on the right, each representing the model's response. The central component is a large box labeled 'Poisoned model', containing the same angry purple robot icon as above, which processes all inputs.

The input queries are color-coded and linguistically distinct: Q1 has 'English instruction' and 'English content' in blue; Q2 has 'English instruction' and 'Chinese content' in green; Q3 has 'Chinese instruction' and 'Chinese content' in green. Each query is connected by a thick blue arrow to the poisoned model.

The outputs are similarly structured: A1 corresponds to Q1 and displays 'Benign output' with a green checkmark, indicating normal behavior. A2 corresponds to Q2 and displays 'Backdoored output' in red, accompanied by a purple devil emoji, signifying the activation of the backdoor. A3 corresponds to Q3 and displays 'Benign output' with a green checkmark, showing that the backdoor is not triggered by fully Chinese inputs.

The visual design uses consistent icons and colors to convey state and behavior: blue for English, green for Chinese, red for malicious output, and purple devil emojis for backdoor triggers. The figure’s caption clarifies that the poisoned dataset contains mixed Chinese and English texts (in practice, the trigger should be more complex), and that monolingual or other multilingual inputs do not trigger the backdoor—highlighting the specificity of the trigger condition (here, English instruction with Chinese content).
