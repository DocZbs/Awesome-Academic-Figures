# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards a Universal Synthetic Video Detector: From Face or Background Manipulations to Fully AI-Generated Content — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12278

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of deepfake detection methodologies, structured into three horizontal sections: 'Existing Methods', 'Full-Frame with CE Loss', and 'UNITE'. On the left, a beige rounded rectangle labeled 'Modern Fake Media' displays four examples of synthetic media: 'Text-to-Video' showing an elderly woman cooking, 'Background Inpainted' depicting a person in front of pyramids, 'GTA-V Game' featuring a man in a game environment, and 'Face Manipulation' showing a news anchor with altered facial features. These examples feed into the three detection pipelines via thick blue arrows.

In the top section, 'Existing Methods', a light blue trapezoid labeled 'Face Detector' receives input images and outputs face regions or a question mark if none is found. This feeds into another light blue trapezoid labeled 'Face Classifier'. The output performance is indicated on the right: a green checkmark for 'Face Manipulations' (indicating >85% performance), red crosses for 'Background Manipulations' and 'T2V/I2V Content' (indicating <50% performance).

The middle section, 'Full-Frame with CE Loss', uses a lavender trapezoid labeled 'Multi-Head Transformer Encoder' to process full frames. It outputs four colored squares representing 'Attention Features' (green, magenta, red, purple), which are fed into a lavender trapezoid labeled 'Full-frame Classifier'. Performance results show a green checkmark for 'Face Manipulations', a red cross for 'Background Manipulations', and a green wavy line for 'T2V/I2V Content' (indicating >50% performance).

The bottom section, 'UNITE', mirrors the middle pipeline but uses salmon-colored trapezoids for the encoder and classifier. Crucially, it introduces an 'AD Loss' component depicted as a 2D scatter plot with two clusters: one of red triangles around a central star and one of green diamonds around another star, connected by a curved arrow from the attention features to the AD Loss. This indicates the loss encourages diverse attention patterns. Performance results show green checkmarks for all three categories: 'Face Manipulations', 'Background Manipulations', and 'T2V/I2V Content'. A legend in the bottom-right corner defines the symbols: green checkmark for performance >85%, green wavy line for >50%, and red cross for <50%.
