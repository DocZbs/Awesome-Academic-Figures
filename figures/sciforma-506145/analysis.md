# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fotheidil: an Automatic Transcription System for the Irish Language — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00509

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an infrastructure diagram illustrating a multimedia processing pipeline involving a client device, a Media Server, a Recognition Server, and a Database. The global layout is vertically structured, with the client device at the bottom, followed by the Media Server, then the Recognition Server above it, and the Database positioned to the right of the servers. The diagram uses rectangular boxes for servers and processes, a cylinder for the database, and a monitor icon for the client device. All process steps within servers are represented by light blue rectangles labeled with specific actions.

The Media Server contains four stacked light blue rectangular modules: 'convert audio (wav 16000Hz)', 'compress video', 'serve video', and 'serve audio'. These modules are arranged sequentially from bottom to top. The Recognition Server contains four similarly styled modules stacked vertically: 'voice activity detection', 'speaker diarisation', 'convert speech to text', and 'C&PR' (likely representing Content & Pronunciation Recognition). Both servers are enclosed in bold-bordered rectangles with their respective titles centered at the top.

At the bottom left, a desktop computer icon represents the client device. It connects via a solid arrow labeled 'file upload (mp4, mp3, wav)' to the 'convert audio (wav 16000Hz)' module in the Media Server. From this module, a solid arrow leads upward to 'compress video', which then connects to 'serve video'. Another solid arrow from 'convert audio' goes to 'serve audio'. A dashed arrow from 'convert audio' points to the Database, indicating progress or data updates. Additionally, a solid arrow from 'convert audio' leads to the Recognition Server, labeled 'wav file to recognition', initiating the speech processing chain.

Within the Recognition Server, a vertical sequence of solid arrows connects the modules: 'voice activity detection' → 'speaker diarisation' → 'convert speech to text' → 'C&PR'. A dashed arrow extends from 'C&PR' to the Database, signifying real-time communication or data updates.

The Database is depicted as a standard cylindrical icon on the right side of the diagram. It receives data from both servers: a dashed arrow from 'convert audio' (Media Server) and another dashed arrow from 'C&PR' (Recognition Server), both indicating progress/data updates or real-time communication. Additionally, dotted lines connect the Database to the client device, representing real-time communication.

The Legend at the bottom clarifies the line types: solid arrows denote 'file movement', dashed arrows indicate 'progress & data updates', dotted lines represent 'real time communication', and light blue rectangles signify 'action on file'. The entire diagram illustrates a workflow where uploaded media files are processed by the Media Server for format conversion and compression, then audio is sent to the Recognition Server for speech analysis, with intermediate results and final outputs stored or communicated to the Database and client respectively.
