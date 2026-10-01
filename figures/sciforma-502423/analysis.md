# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PA-RAG: RAG Alignment via Multi-Perspective Preference Optimization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14510

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparative evaluation of four different RAG (Retrieval-Augmented Generation) generator architectures, each processing the same input prompt composed of a question, golden documents [1][2][3], and noisy documents [4][5][6]. The global layout is divided into two main vertical sections: on the left, the input prompt components are shown within a dashed box; on the right, four distinct generator modules are stacked vertically within a larger dashed box labeled 'RAG Generator'. Each generator module outputs a claim and citation pair, accompanied by visual indicators for quality and latency.

The first module, 'Vanilla LLM', uses a basic robot icon to represent the model. It generates a 'Bad Claim' and 'Bad Citation' ([4][5]), indicated by a sad face emoji and a green clock with a checkmark, suggesting low quality but fast inference.

The second module, 'Pipeline Generator', features a robot with arrows pointing to smaller assistant icons, symbolizing a multi-stage pipeline. This produces a 'Fair Claim' and 'Fair Citation' ([1][2][4]), marked by a neutral face emoji and a red clock with an exclamation mark, indicating moderate quality but slower performance.

The third module, 'End-to-End Generator Trained by SFT', uses a robot wearing a graduation cap to denote supervised fine-tuning. It outputs a 'Fair Claim' and 'Fair Citation' ([1][2][5]), with a neutral face emoji and a green clock with a checkmark, implying improved efficiency over the pipeline but still only fair quality.

The fourth and final module, 'End-to-End Generator Trained by PA-RAG', also uses a graduation-cap robot but with a star accent, representing the proposed method. It generates a 'Good Claim' and 'Good Citation' ([1][2][3]), highlighted by a smiling face emoji and a green clock with a checkmark, demonstrating superior quality and efficiency.

Connections between the input prompt and each generator are implicit through alignment, with no explicit arrows drawn from the prompt to the generators. Instead, each generator processes the full prompt independently. The outputs are presented side-by-side within each module, with consistent rectangular boxes for claims and citations, colored red for bad, black for fair, and orange for good. The emojis and clocks serve as visual cues for quality and speed, respectively. The figure emphasizes that the proposed PA-RAG method achieves better performance while maintaining an end-to-end structure.
