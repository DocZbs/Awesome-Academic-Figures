# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards Effective Discrimination Testing for Generative AI — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21052

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage experimental pipeline for evaluating bias in AI-driven hiring decisions, specifically focusing on the impact of stereotypical names on resume evaluation. The layout is divided horizontally into two main sections: 'Resume Generation' at the top and 'Summarization and Decision Making' at the bottom, separated by a thick horizontal line.

In the top section, the process begins with a rounded rectangle labeled 'Randomly sampled traits', representing a set of personality traits selected at random. An arrow leads from this box to a light blue rectangular block labeled 'GPT-4', indicating that these traits are used as input to prompt the GPT-4 model. From GPT-4, another arrow points to a scroll-shaped document icon labeled 'Resume (w/o name)', signifying that the model generates a resume for a social worker position without including a name or email address.

In the bottom section, the process continues with a purple rounded rectangle labeled 'Stereotypical name', which feeds into a scroll-shaped document icon labeled 'Resume (w/ name)'. This indicates that the previously generated resume is now augmented with a stereotypical name from one of four demographic groups. An arrow connects this resume to a dark blue rectangular block labeled 'GenAI Model', representing one of five candidate generative AI models used to summarize the resume. The output of this model is a scroll-shaped document labeled 'Summary'. This summary is then passed via an arrow to a dark gray rectangular block labeled 'Decision Maker', symbolizing a downstream system or human evaluator that makes a binary hiring decision. Finally, an arrow leads from the Decision Maker to a rounded rectangle labeled 'Interview Granted? (0/1)', indicating the outcome of the decision process as a binary variable.

All connections are represented by solid black arrows, indicating the direction of data flow. The visual modules are differentiated by color and shape: rounded rectangles for inputs and outputs, rectangular blocks for models, and scroll icons for documents. Text labels are clear and centered within each module. The overall structure emphasizes a clear separation between resume creation and subsequent summarization and decision-making stages, highlighting how the introduction of stereotypical names influences the final hiring decision through AI-generated summaries.
