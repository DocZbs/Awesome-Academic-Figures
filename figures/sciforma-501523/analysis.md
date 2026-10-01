# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Truthful Text Sanitization Guided by Inference Attacks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12928

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a text sanitization pipeline using the INTACT method, structured as a left-to-right workflow with four main stages: Clear text, Replacement generation (sorted by specificity), Inference attack, and Sanitized text. The global layout is linear and horizontal, with each stage represented by a labeled section containing an icon, a descriptive box, and directional arrows indicating the flow. The process begins with 'Clear text', depicted by a document icon with a profile symbol, and an example sentence: '... the applicant believes that he was the only Catholic.' This text flows via a teal arrow to the next stage.

In the 'Replacement generation' stage, a multicolored M-shaped icon (representing a model or generator) and a circular diagram with branching nodes symbolize the generation of replacement terms sorted by specificity. Below this, a numbered list presents five replacement options: 1. Christian, 2. Monotheist (highlighted in teal), 3. Follower of a Western religion, 4. Member of a religious denomination, 5. Believer in a particular faith. The second option, 'Monotheist', is selected and indicated by a horizontal arrow pointing to the next stage.

The 'Inference attack' stage features the same M-shaped icon now paired with a question mark inside a circle, symbolizing uncertainty or adversarial inference. Below it, a list of potential inferred identities—Christian, Jew, Muslim, Sikh, Zoroastrian—is shown. A bidirectional arrow connects this list to a 'Matching' icon (two documents with exchange arrows), which then feeds back into the original clear text box, suggesting a feedback loop for evaluating the effectiveness of replacements.

Finally, the 'Sanitized text' stage displays a document icon with a brush, symbolizing cleaning or modification. The output text reads: '... the applicant believes that he was the only Monotheist.', with 'Monotheist' highlighted in teal to indicate the replacement. Teal arrows connect all stages sequentially, emphasizing the forward progression of the sanitization process. The figure uses consistent visual elements: black text for labels and content, teal for highlights and arrows, and simple icons to represent abstract components like models and matching processes. The overall design is clean, modular, and emphasizes the logical flow from sensitive input to sanitized output through controlled replacement and adversarial testing.
