# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning Optimal Ordering in Global Routing Problems in Semiconductors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21035

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure displays three distinct deep learning model architectures, labeled as model 1, model 2, and model 3, arranged vertically in separate horizontal rows. Each model follows a consistent left-to-right data flow structure, starting from an input feature vector and ending at an output prediction layer. The global layout is modular and linear, with each model consisting of four main components: an input block, three sequential processing blocks, and an output block, connected by dashed lines indicating data propagation.

Each model begins with a tall blue rectangular prism on the far left, representing the input feature vector denoted as |f⃗|, with dimensions labeled as 1×1 along its top and side edges. This input is connected via dashed lines to the first of three orange rectangular prisms, which represent hidden layers or transformation blocks. These orange blocks are identical in shape and size across all models and are positioned horizontally in sequence. Below each orange block, a label specifies the activation function or operation applied: for model 1, the labels are 'tanh', 'linear', and 'SoftMax'; for model 2, they are 'ReLU', 'linear', and 'SoftMax'; and for model 3, they are 'tanh', 'linear', and 'tanh'.

The final component of each model is a red rectangular prism on the far right, representing the output layer. In models 1 and 2, this output block is composed of three stacked smaller red cubes, forming a 3×1 structure, with dimension labels 1, 3, and 1 along its top, front, and side faces respectively. In model 3, the output block is larger, consisting of nine smaller red cubes arranged in a 3×3 grid, with dimension labels 1, 3, and 3 along its top, front, and side faces, indicating a higher-dimensional output space.

All connections between blocks are represented by dashed black lines, which extend from each face of the preceding block to the corresponding face of the next block, suggesting full connectivity or a dense mapping between layers. The visual style is clean and schematic, using solid colors (blue for input, orange for hidden layers, red for output) and clear text labels to differentiate components. The figure is captioned as 'Architectures of the 3 deep learning model used to predict the most optimal net ordering.'
