# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards Cognitive Service Delivery on B5G through AIaaS Architecture — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17967

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an evolved Network Data Analytics Function (NWDAF) architecture designed to support AI-as-a-Service (AIaaS) cognitive service delivery across multiple network domains. The global layout is horizontally segmented into four main domains: User Domain, Domain A, Domain B, and Domain C, each enclosed in distinct dashed borders with different colors—yellow for User Domain, blue for Domain A, green for Domain B, and red for Domain C. Below these domains lies a 'Fully Monitoring Layer' indicated by a horizontal dashed line with a smiley icon, suggesting comprehensive observability.

In the User Domain, on the left, there is an 'AI Slice' box containing two sub-slices: 'Training Slice' and 'Inferencing Slice', depicted with icons representing data processing and inference. Below this, various vertical industry applications are shown, including industrial machinery, telecom towers, factories, and IoT devices, labeled 'Devices Verticals'. Users are represented by human icons connected via dotted lines to network access points. Multiple network slices (Slice 1 through Slice n) are visualized as colored horizontal bars connecting users to access technologies such as RAN (Radio Access Network), FTTx (Fiber-to-the-x), Satellite, and Wi-Fi, each marked with an 'AI-Agent' symbol.

Domain A contains core 5G network functions: PCF, AMF, UPF, N3IWF, AUSF, NRF, UDM, SMF, and NSSF, arranged in a hierarchical structure with the Core Bus connecting upper-layer functions. These components are dark gray rectangles with white text. The eNWDAF (evolved NWDAF) is positioned at the top-left of Domain A, connected to OSS/BSS, AlaaS, and NetApps. It communicates with other functions via dashed blue lines labeled 'AI Data and Control Flow'. An AI-Agent is embedded within N3IWF, and another connects UPF to AMF via N3 interface. The UPF also connects to aggregation and core AI-Agents via N6 interface.

Domain B represents the transport layer, consisting of routers labeled ISP A and ISP B, interconnected with red lines indicating control plane data flow. Each router hosts an AI-Agent, and the entire domain is overlaid with a cloud-like shape. A yellow line (Control Plane Data Flow) and a blue line (AI Data and Control Flow) traverse through this domain, linking to Domain C.

Domain C includes cloud infrastructure from AWS and Google Cloud, along with containerized services. It hosts multiple application servers: App Server 1 (Spark), App Server 2 (Stream), AI App Server 3, and App Server n (with AI icons), each connected via colored lines corresponding to the respective slice flows.

Connections are color-coded and styled per legend: solid black lines represent Control Plane Data Flow; dashed blue lines indicate AI Data and Control Flow; and dash-dotted green lines denote Data Plane Flow. AI-Agents are consistently depicted as square icons with a neural network motif, placed strategically across RAN, UPF, aggregation, core, transport nodes, and cloud servers. The figure emphasizes end-to-end AI integration across network layers and domains, enabling cognitive services through distributed AI agents and intelligent slicing.
