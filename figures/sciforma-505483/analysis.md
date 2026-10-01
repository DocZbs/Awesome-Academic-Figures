# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

M-MAD: Multidimensional Multi-Agent Debate for Advanced Machine Translation Evaluation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20127

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of two machine translation evaluation methodologies: Single-Agent (SA) Evaluation and Multidimensional Multi-Agent Debate (M-MAD) Evaluation. The layout is vertically divided into two main sections, with SA Eval on top and M-MAD Eval below, separated by a dashed horizontal line. On the left side, vertical teal-colored labels identify each section: 'SA Eval' and 'M-MAD Eval'. Each section contains pixelated character icons representing agents or roles, along with descriptive text boxes and structured workflows.

In the SA Eval section, a single pixelated agent icon labeled 'Single Agent' appears next to a large rounded rectangular text box. This box describes the task of an annotator who identifies and classifies errors in machine translation based on source and target text. Error types are categorized into accuracy (addition, mistranslation, omission, untranslated text), fluency (character encoding, grammar, inconsistency, punctuation, register, spelling), style (awkward), terminology (inappropriate for context, inconsistent use), non-translation, other, or no-error. Each error is further classified as critical, major, or minor, with definitions provided for each severity level.

The M-MAD Eval section is structured into three stages, labeled at the bottom: Stage 1: Dimension Partition, Stage 2: Multi-Agent Debate, and Stage 3: Final Judgement. In Stage 1, the evaluation is partitioned into four dimensions: Accuracy, Fluency, Style, and Terminology, each represented by a distinct pixelated agent icon (blue for Accuracy, yellow for Fluency, brown for Style, green for Terminology). The Accuracy dimension includes a detailed instruction box explaining that experts focus on propositional content mismatch, with subcategories of addition, mistranslation, omission, and untranslated text.

Stage 2, Multi-Agent Debate, shows a process within each dimension. For Accuracy, it illustrates Round 1 with two agents providing conflicting assessments — one stating 'There is a major error in ...' with a green checkmark, another saying 'I think it's a minor error...' with a red cross. This leads to a 'Consensus' step where two agents agree with the first assessment, indicated by green checkmarks. Below this, three oval-shaped dashed boxes represent similar debate processes for the other three dimensions, each containing two agents with checkmarks or crosses.

Stage 3, Final Judgement, features a 'Judge' icon (a pixelated figure in a suit) and a text box listing example final decisions: Major errors include 'accuracy/mistranslation - "ACL"' and 'accuracy/omission - "Best"'; Minor errors include 'terminology/inappropriate - "AI conference"'. Above the Judge, a group of four agents (two with green checkmarks, two with red crosses) visually represents the synthesis of diverse opinions.

Connections and arrows are implicit through the flow of stages and the visual progression from left to right within each stage. The figure uses consistent visual elements: pixelated characters, rounded text boxes, dashed lines for separation, and color-coded icons to distinguish dimensions. The overall design conveys M-MAD as a layered, network-like structure where agents function as neurons and debates as hidden states, contrasting with the monolithic SA approach.
