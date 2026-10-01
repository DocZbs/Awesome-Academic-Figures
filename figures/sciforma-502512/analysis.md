# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Speak-to-Structure: Evaluating LLMs in Open-domain Natural Language-Driven Molecule Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14642

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative data construction workflow for two molecular benchmark datasets: S²-Bench and OpenMolIns, organized into three main vertical stages: 'Data Sampling', 'Chemical Property Calculation', and 'Wrap in Prompt Templates'. The layout is divided horizontally into two rows, one for each dataset, with shared structural elements across both.

In the top row for S²-Bench, the 'Data Sampling' stage begins with a light blue cylinder labeled 'Zinc 250K', from which molecules are randomly sampled for each subtask and stored in another cylinder labeled 'Test Samples'. This is followed by the 'Chemical Property Calculation' stage, where a blue circular node labeled 'RDKit' processes the test samples. RDKit outputs two types of information: 'Number of Functional Groups' (illustrated with chemical structures like -OH, -COOH, and benzene ring) and 'Chemical Properties' (including LogP, MR, QED). These properties are then used in the 'Wrap in Prompt Templates' stage, where three distinct tasks are defined: MolEdit (e.g., 'Please remove a hydroxyl from the molecule c1ccccc1O'), MolOpt (e.g., 'Please optimize the molecule c1ccccc1O to have a lower LogP value'), and MolCustom (e.g., 'Please generate a molecule with 6 carbon atoms and 1 oxygen atom'). Each task is presented in a rounded rectangle with a bold label above the instruction.

In the bottom row for OpenMolIns, the 'Data Sampling' stage starts with two light blue cylinders: 'Zinc 250K' and 'PubChem 10m'. These are checked for overlap via a diamond-shaped decision node labeled 'Overlap?'. If overlap exists ('Yes'), the overlapping molecules are dropped; if not ('No'), the non-overlapping molecules are combined into a new cylinder labeled 'OpenMolIns Samples'. This sample set is then processed by the same 'RDKit' node in the 'Chemical Property Calculation' stage, which again outputs functional groups, chemical properties (LogP, MR, QED), and an additional category: 'Number of Atoms, Bonds, and Functional Groups' (with examples like C, O, single/double/triple bonds, and -OH group). In the final stage, 'Wrap in Prompt Templates', the same three tasks (MolEdit, MolOpt, MolCustom) are shown, but now with example question-answer pairs. For instance, MolEdit shows 'Q: Please remove a hydroxyl... A: c1ccccc1', indicating the expected output. A new element, 'Automatic Molecule Structure Operations', is introduced as a blue circular node connected to RDKit, suggesting automated processing before prompt generation. All text is black, with labels in bold for clarity, and the background of the main sections is light gray with purple headers. The figure uses arrows to indicate data flow, with solid lines for direct processing and dashed lines for conditional logic.
