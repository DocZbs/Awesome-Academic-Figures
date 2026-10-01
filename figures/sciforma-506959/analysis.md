# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

VicSim: Enhancing Victim Simulation with Emotional and Linguistic Fidelity — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03139

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Generative Adversarial Network (GAN) training workflow for generating human-like text responses, specifically in the context of incident reports. The global layout is structured as a left-to-right flow, beginning with data inputs on the left, progressing through core model components in the center, and concluding with evaluation and output on the right. A dashed boundary encloses the entire system, indicating a self-contained training loop.

On the far left, a gray trapezoidal box labeled 'Training Data: Sample Human Chats (Incident Reports)' serves as the initial input source. This data flows via a solid arrow to a green rounded rectangle labeled 'LLM-based Generator (Llama 2 7B)', which is the primary generative model. The connection is annotated with 'Instruction Tuning' and 'Key info enhanced prompts', indicating that the generator is fine-tuned using these techniques to improve response quality.

Above the generator, a larger LLM (Llama 2 70B) processes scenario summaries, which are then fed into the generator as additional context. This is shown by a gray rectangular box labeled 'Larger LLM (Llama 2 70B)' connected to an oval labeled 'Scenario Summary', which in turn points to the generator.

To the right of the generator is a red rounded rectangle labeled 'Discriminator (Flan T5)', the adversarial component. It receives two types of inputs: one from the generator (via a bidirectional dashed arrow), and another from two datasets — 'Emotion Classification Dataset' and 'Grammar Error Classification Dataset' — both represented as gray trapezoids. These datasets are connected to the discriminator via a label 'Discriminator Distillation', suggesting knowledge transfer or pre-training to enhance the discriminator's ability to detect synthetic text.

The discriminator evaluates generated text against real human text. On the far right, a gray dashed rectangle contains a real human response: 'Don't know but my roommate and I can't sleep'. This is compared to a generated response in an orange dashed rectangle: 'no just loud banging'. A circular node labeled 'Real or Fake? Discriminator Loss' represents the classification decision point, with a dashed arrow from the discriminator pointing to this node, and another dashed arrow from the real human text to the same node. The loss computed here is used to update the discriminator.

A feedback loop is indicated by a dashed arrow from the discriminator back to the generator, implying that the discriminator's feedback influences the generator's training. Additionally, a dashed arrow from the real human text loops back to the top-left, suggesting that real human data is continuously used to refine the system. The final output section includes a label 'With discriminator', emphasizing the role of the discriminator in shaping the generator’s output.
