# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STAMPsy: Towards SpatioTemporal-Aware Mixed-Type Dialogues for Psychological Counseling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16674

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed Self-STAMPsy framework, designed for adaptive, context-aware psychological support through conversational AI. The global layout is structured into two main sub-tasks: Sub-Task 1: Helping Skills Selection, and Sub-Task 2: Spatial-Temporal Stamp Processing, with an overarching Adaptive Retrieval Augmented Generation (RAG) pipeline connecting them. The flow begins at the top-left with a user-bot dialogue example, where the user expresses stress and early wake-up time, prompting the bot to suggest relaxation methods. This dialogue context feeds into the BERT Classifier module, depicted as a light blue box containing a graph structure with nodes labeled T1 to TN (tokens), Trm (transformer layers), and E1 to EN (embeddings), representing a multi-layered transformer model. The classifier outputs a helping skill: 'Direct Guidance' with the goal of recommending places, which is shown in a purple box. Below this, an orange box specifies the next action: the therapist should recommend an appropriate outdoor place.

From the BERT Classifier, the dialogue context flows to the RAG pipeline, which includes a database icon labeled 'with RAG', indicating retrieval from external knowledge. This connects to a green module titled 'Personal Info.' containing two subgraphs labeled 'Psy. Knowledge', each showing a network of colored nodes (red, green, blue, purple) with some highlighted by red boxes, symbolizing personalized psychological knowledge graphs. The retrieved information, along with the helping skill, contributes to forming a query for the LLM. The query is explicitly defined in a blue box as: Context c_i + Prompt g_i^+ + Knowledge k_i~ + Stamp s_i~, indicating the composition of inputs for the large language model.

The LLM used is Qwen2-7B-sft, shown in a light blue box with a LoRA (Low-Rank Adaptation) icon (a flame symbol), indicating fine-tuning via parameter-efficient adaptation. The output of the LLM is displayed in a large white box labeled 'Output:', containing a generated response: 'Many places are still closed at 5 a.m., but it’s a good time to enjoy the peace of the early morning. Recommend nearby parks within 500m. I suggest we use Cognitive Behavioral Therapy to cope with insomnia. If you want to relax yourself, you can eat something and listen to some music.' This output is color-coded to reflect the integration of spatial-temporal context (orange for '5 a.m.', 'early morning'), recommendations (orange for 'parks within 500m'), and therapeutic suggestions (green for 'Cognitive Behavioral Therapy', 'eat something and listen to some music').

On the right side, under 'Sub-Task 2: Spatial-Temporal Stamp Processing', a yellow box labeled 'Spatial-Temporal State Extraction' receives the dialogue input and produces 'Spatial-Temporal Stamps', described as contextual metadata such as '[early morning]' and associated emotional states like anxiety or tiredness. These stamps are fed into the query formation process. Additionally, a feedback loop is shown on the far right, labeled 'Iterative Self-feedback', consisting of two components: '① Case Recordings' (for quality assurance, implications, countertransference, personal assessment) and '② Process Control' (with a 'Knowledge Base' feeding into 'Conversation'), ensuring continuous improvement and control over the interaction. The entire system is encapsulated under the title 'Adaptive Retrieval Augmented Generation', emphasizing the dynamic integration of context, knowledge, and temporal-spatial awareness to generate personalized, therapeutic responses.
