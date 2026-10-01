# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SAFLITE: Fuzzing Autonomous Systems via Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18727

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of a universal autonomous system (AS) fuzzing framework enhanced with Large Language Models (LLMs), named SaFliTe. The global layout is structured as a directed dataflow diagram, progressing from left to right and incorporating feedback loops. The process begins on the left with an 'Initial Input' (green parallelogram) feeding into a 'Seed Manager' (light gray rectangle with rounded corners containing a white oval labeled 'Seed pool'). Above the Seed Manager, a blue cylinder labeled 'Seed Scheduling' provides input. The Seed Manager outputs a 'Seed' (orange flag-shaped box) to a 'Mutation' module (light gray rectangle). This Mutation module receives additional inputs from two blue cylinders: 'Mutation Operations' and 'Number of Test case Setting'. The output of Mutation is a list of 'Mutant' test cases (represented as stacked rounded rectangles, one blue and one pink, with ellipsis indicating more), which are fed into a larger container labeled 'Prompt' (light gray rounded rectangle). Inside this Prompt container, below the mutants, are two components: 'Definition of Interestingness' (white rectangle) and 'Current System State' (light blue wavy-bottom rectangle). These elements together form the prompt input for an LLM (blue rounded rectangle with a robot icon and label 'LLM'), located within a larger beige rounded rectangle labeled 'SaFliTe'. The LLM processes the prompt and generates 'The Rank List of Mutants' (purple wavy-bottom rectangle), which is then used to 'Select' test cases (green wavy-bottom rectangle). These selected 'Test Cases' are sent to an 'Autonomous System' (black-bordered rounded rectangle with a drone-like icon and label 'Autonomous System') for 'Execution'. After execution, a decision diamond labeled 'System Failure?' checks if a failure occurred. If yes, a 'Failure Report' (orange flag-shaped box) is generated; if no, the process continues. Regardless of outcome, the result feeds back to the Seed Manager via an 'Update' arrow, closing the loop. The entire SaFliTe component is visually grouped and emphasized by the beige background, highlighting its role as the core intelligent ranking engine. All connections are represented by black arrows indicating the direction of data or control flow, with explicit labels such as 'Select', 'Execution', and 'Update' where necessary.
