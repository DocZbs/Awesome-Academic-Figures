# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Qinco2: Vector Compression and Search with Improved Implicit Neural Codebooks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03078

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the Qtwo architecture during the decoding phase, structured into two main parts: a top-level sequential decoding pipeline and a bottom-level detailed view of the individual decoding module f_θ^m.

[1] Global Layout and Structure:
The diagram is vertically divided into two sections. The top section illustrates the overall decoding process, where M code inputs (I^1 through I^M) are processed sequentially to produce a final reconstructed output x̂. The bottom section, enclosed in a dashed box, provides a magnified view of the internal structure of each decoding module f_θ^m, showing how it combines a codeword c^m with the previous partial reconstruction x̂^(m-1) to generate the next partial reconstruction x̂^m.

[2] Visual Modules and Attributes:
In the top section, each code I^k (for k = 1 to M) is represented by a gray rectangular block labeled C^k, symbolizing a lookup table or codebook. These blocks have horizontal lines inside, indicating stored codewords. Each C^k outputs a codeword vector c^k. The first codeword c^1 is directly connected to a circular node with a ⊕ symbol, which represents an element-wise addition operation. This sum is then fed into the first decoding module f_θ^2(·), which is depicted as a white rectangle with the function label inside. Subsequent modules f_θ^3(·), ..., f_θ^M(·) follow in sequence, each receiving the output of the previous module (x̂^(m-1)) and the next codeword c^m. The outputs of these modules are denoted as x̂^1, x̂^2, ..., x̂^M, with the final output being the full reconstruction x̂.

In the bottom section, the function f_θ^m is shown in detail. It takes two inputs: a codeword c^m (labeled 'codeword c^m') and a partial reconstruction x̂^(m-1) (labeled 'partial x̂^(m-1)'). The codeword c^m is first passed through a trapezoidal-shaped layer, likely representing a linear projection or embedding. This is followed by a series of L identical residual blocks. Each residual block consists of a vertical gray bar (representing a linear transformation or weight matrix), followed by a trapezoidal layer (another non-linear transformation), and then a circular node with a '+' symbol (element-wise addition) that combines the output with the input to the block, forming a skip connection. The final output of this chain is added to the partial reconstruction x̂^(m-1) via another '+' node, producing the new partial reconstruction x̂^m. The number of residual blocks is indicated by the label 'L' between the second and last blocks.

[3] Connections and Arrows:
Arrows indicate the direction of data flow. From each code I^k, an arrow points to the corresponding lookup table C^k, and from C^k, an arrow labeled c^k points to the decoding chain. The first codeword c^1 is connected via an arrow to the ⊕ node, and the result is sent to f_θ^2(·). The output x̂^1 from f_θ^2(·) is passed to f_θ^3(·), and so on, forming a left-to-right sequential flow. In the bottom module, arrows show c^m entering the trapezoid, then flowing through the sequence of L residual blocks, and finally being added to x̂^(m-1) to produce x̂^m. Dashed lines connect the top-level f_θ^2(·) to the bottom-level detailed view, indicating that the bottom diagram is a zoomed-in representation of one such module.
