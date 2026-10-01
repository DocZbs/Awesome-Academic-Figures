# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Surveillance Capitalism Revealed: Tracing The Hidden World Of Web Data Collection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17944

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a 'man-in-the-middle' (MITM) proxy interception setup used for intercepting and analyzing HTTP(s) traffic between a target device and a remote server hosting an API. The global layout is linear and horizontal, depicting a three-component communication chain from left to right: a mobile device, a local computer acting as a proxy, and a remote server. Each component is represented by a distinct icon and labeled with descriptive text below it.

The first module on the left is a blue smartphone icon labeled 'Target device'. It represents the client device making API requests. The second module in the center is a blue desktop computer monitor icon labeled 'Your computer running mitmproxy' with a sub-caption in red dashed underline text stating '« man in the middle »', indicating the role of this machine as the interception point. The third module on the right is a blue stacked-disk server icon labeled 'Server hosting API', representing the backend service providing the API.

Visual attributes include consistent blue coloring for all icons, black text for primary labels, and red dashed underlining for the sub-caption emphasizing the MITM role. The components are connected by bidirectional arrows indicating the flow of communication. From the target device to the computer, a solid black arrow labeled 'http(s) requests' points right, and a reverse arrow labeled 'API response' points left. Similarly, between the computer and the server, a solid black arrow labeled 'http(s) requests' points right, and a reverse arrow labeled 'API response' points left. These connections show that the mitmproxy computer intercepts both outgoing requests and incoming responses, allowing for inspection or modification of the data in transit.

The diagram abstracts the methodological workflow: the target device sends HTTP(s) requests to the server, but these are intercepted by the local computer running mitmproxy, which then forwards them to the server. The server's API responses are similarly intercepted by the proxy before being relayed back to the target device. This setup enables security testing, debugging, or analysis of network traffic without altering the original client-server interaction. The figure caption 'Man In The Middle Proxy Interception' and citation \cite{mitmserver} further contextualize the purpose of the diagram within a research or technical context.
