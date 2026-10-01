# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLM-DaaS: LLM-driven Drone-as-a-Service Operations from Text User Requests — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11672

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the LLM-DaaS (Large Language Model - Data as a Service) system architecture, designed to process user text requests through an AI-driven pipeline to deliver optimized drone-based services. The global layout is a directed flowchart with a top-down and left-to-right progression, starting from user input on the left and culminating in a composite service output delivered via a user interface. The structure is modular, with distinct processing stages connected by arrows indicating data or control flow.

The visual modules are primarily rectangular boxes, except for one oval-shaped component labeled 'Optimal Composite DaaS', which serves as a central aggregation point. All modules have black borders and white backgrounds, with black text inside. Key modules include: 'Text Request' (input), 'LLM chatbot' (core processing), 'Structured DaaS Request' (intermediate output), 'Selection DaaS' (decision module), 'Spatiotemporal Composer', 'Predictive Composer', and 'Optimal Composite DaaS' (final service composition). Additional external data sources are represented as rounded rectangles: 'Weather Data', 'Drone Attributes', and 'Drone Scheduling'.

The top section shows two types of PDRs (Presumably Policy or Data Requests): 'Human Like Generated PDRs' and 'Structured PDRs', both feeding into a 'Finetune LLM' module, which then connects to the 'LLM chatbot'. This indicates that the LLM is pre-trained or fine-tuned using these PDRs to enhance its understanding and response generation capabilities. The 'LLM chatbot' receives the initial 'Text Request' and transforms it into a 'Structured DaaS Request'.

This structured request flows into the 'Selection DaaS' module, which is annotated with three sub-functions: 'Uncertainty Aware Pathfinding', 'Weather and Drone Capabilities'. This module integrates inputs from 'Weather Data' and 'Drone Attributes' to make informed selection decisions. Additionally, 'Drone Scheduling' — described with sub-items 'Skyway network construction' and 'DaaS Itineraries' — feeds into 'Selection DaaS', suggesting that scheduling constraints are considered during path selection.

From 'Selection DaaS', the flow branches to two composer modules: 'Spatiotemporal Composer' and 'Predictive Composer'. These modules likely handle temporal and spatial planning, and predictive modeling respectively. Both composers feed into the 'Optimal Composite DaaS' oval, which synthesizes their outputs. Finally, the 'Optimal Composite DaaS' delivers the result back to the 'User Interface', completing the service loop.

All connections are represented by solid black arrows, indicating unidirectional data or control flow. There are no feedback loops shown explicitly, though the system implies iterative refinement through the composition stage. The diagram emphasizes a hierarchical and modular design, where raw text input is progressively refined and enriched with contextual data (weather, drone specs, scheduling) before being composed into a final, optimized service offering.
