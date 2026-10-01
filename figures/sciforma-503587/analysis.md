# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Sim911: Towards Effective and Equitable 9-1-1 Dispatcher Training with an LLM-Enabled Simulation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-step context-aware controlled generation framework for simulating emergency call responses using an LLM agent. At the top, an 'Instruction' box contains two dashed sub-boxes: 'Incident Specification' with colored tags—blue for 'crash report', green for 'medical emergency' and 'severe weather'—and 'Caller Image' with colored tags—yellow for 'non-native speaker', red for 'adult', and purple for 'unhoused'. These inputs feed into three parallel processing modules below.

The first module, 'Detailed Task Explanation w/ Zero-Shot CoT', presents a structured prompt: 'This simulation is based on a crash report. This incident will be involved with medical emergency. This incident will be happening under severe weather conditions. To better understand the circumstances, let’s think step by step before giving simulated responses.' The phrase 'think step by step' is emphasized in bold red text.

The second module, 'Vector Base Incorporation for Retrieval-Augmented Generation', includes two sub-sections. The 'Dynamic bases (retrieved past call pieces)' lists entries matching incident specification (IS) tags: 'crash report / medical emergency / severe weather' and caller image (CI) tags: 'non-native speaker / adult / unhoused', each color-coded as in the instruction. The 'Static bases (with domain expertise)' lists fixed resources: Verified Address List, Encoded Connectivity Map, and Tree-structured Protocols.

The third module, 'Caller Image Deciphering w/ Few-Shot Prompting', provides examples from a call transcript database (CT): '... I don’t have a permanent address...' and '... I no safe, gun spot from me...'. It instructs the model to 'figure out the image and follow the tone and speech pattern from the given examples before giving simulated responses,' with 'from the given examples' highlighted in red.

All three modules feed into a central 'LLM Agent' represented by a brain icon. The 'Detailed Task Explanation' connects via a downward arrow to 'Context-aware Control', symbolized by a gear icon, which then feeds into the LLM Agent. The LLM Agent outputs to 'Generated Response Candidates', depicted as a person standing inside a green cylindrical structure. The entire flow is connected by thick gray arrows indicating data flow direction.
