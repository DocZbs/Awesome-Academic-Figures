# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

F-Bench: Rethinking Human Preference Evaluation Metrics for Benchmarking Face Generation, Customization, and Restoration — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13155

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the overall framework of F-Eval, a unified model for evaluating multiple image generation metrics—quality, authenticity, correspondence, and identity fidelity—in a one-for-all manner. The layout is divided into two main sections: the left side illustrates the input/output interface, and the right side details the internal model structure.

On the left, under 'F-Eval Input/Output', four evaluation tasks are shown vertically. Each task includes an example image, a user prompt (e.g., 'Please give me the quality score.'), and the corresponding model response with a numerical score (e.g., 'The quality score is 64.94.'). The tasks are labeled as Quality, Authenticity, Correspondence, and ID Fidelity, each with distinct example images and prompts. The interaction is depicted with speech bubbles and robot icons, indicating a conversational interface. Double-headed arrows connect this section to the model structure on the right, signifying bidirectional communication.

The right side, titled 'F-Eval Model Structure', shows a modular pipeline. At the top, two input streams are defined: 'Text Input' and 'Image(s) Input'. Text input includes optional evaluation, generation, or customization prompts, processed by a 'Text Tokenizer' (light yellow rectangle). Image input can include one or more images, optionally paired, and is split into two paths: one through a 'Vision Encoder' (gray rectangle with 'MoLE' label) and another through a 'Face Encoder' (light blue rectangle). Both encoders are marked as frozen (blue snowflake icon). The outputs from these encoders pass through trainable 'Vision Projector' and 'Facial Projector' modules (gray rectangles with fire icon), respectively, projecting features into a common space.

These projected features, along with tokenized text, are fed into a 'Pretrained Large Language Model' (LLM) (wide white rectangle). The LLM is fine-tuned using a Mixture of LoRA Experts (MoE) mechanism. This MoE block, located on the far right, contains four LoRA experts (LoRA 1–4, light green rounded rectangles), with only one being activated at a time based on a 'Dimension ID k' determined by a trainable 'Router' (light green rounded rectangle with fire icon). The router's output selects a specific LoRA expert via an 'activate' arrow. The selected LoRA is combined with a frozen Feed-Forward Network (FFN, light blue rectangle with snowflake) using a plus symbol, indicating feature fusion.

The final output from the LLM is passed to an 'LLM Decoder' (green rectangle, marked frozen), which generates the final response. The entire model structure uses color-coding to indicate trainability: fire icons denote trainable components, and snowflake icons denote frozen ones. Dashed lines and arrows show data flow, with solid arrows indicating direct connections and dashed lines showing optional or control paths. The design emphasizes modularity, multi-modality, and efficient parameter usage via LoRA experts.
