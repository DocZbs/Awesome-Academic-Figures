# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Successive optimization of optics and post-processing with differentiable coherent PSF operator and field information — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14603

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative diagram of two computational workflows for gradient computation in a forward-backward propagation context, labeled as (a) and (b), with a legend on the right explaining visual elements. The global layout consists of two vertically stacked, side-by-side flow diagrams, each depicting a sequence of data processing stages connected by arrows indicating data flow direction. Both diagrams share the same top-level components: 'N Rays' and 'M Grids' at the top, followed by an intermediate stage labeled 'M x N complex fields', and finally 'M PSF grids' at the bottom. The primary difference lies in the memory management and backward propagation strategy.

In diagram (a), all three modules — 'N Rays', 'M Grids', 'M x N complex fields', and 'M PSF grids' — are represented as rounded rectangles filled with light yellow, indicating they are 'Saved for backward' as per the legend. Solid black arrows point downward from 'N Rays' and 'M Grids' to 'M x N complex fields', and from there to 'M PSF grids', representing the forward pass. Red solid arrows point upward from 'M PSF grids' to 'M x N complex fields', and then to 'N Rays' and 'M Grids', indicating automatic backward propagation. This represents the standard automatic differentiation approach where intermediate results are stored for gradient computation.

Diagram (b) illustrates a modified approach. Here, the 'M x N complex fields' module is colored light blue, signifying it is 'Released for backward' — meaning its memory is freed after the forward pass. The 'N Rays' and 'M PSF grids' modules remain light yellow, indicating they are saved. The forward pass is again shown with solid black arrows. However, the backward pass is altered: dashed red arrows point from 'M PSF grids' up to 'M x N complex fields', and then continue upward to 'N Rays' and 'M Grids'. These dashed arrows represent 'Manual backward' propagation, as defined in the legend, implying that gradients are computed analytically and propagated manually without relying on stored intermediate values. This design avoids saving the large broadcast tensor ('M x N complex fields') during the forward pass, thus reducing memory usage.

The legend on the right clarifies the color coding and arrow types: light yellow boxes denote data saved for backward computation; light blue boxes denote data released for backward; solid black arrows indicate forward propagation; solid red arrows indicate automatic backward propagation; and dashed red arrows indicate manual backward propagation. The figure caption explains that (a) shows the normal automatic differentiation procedure, while (b) demonstrates the proposed method that manually back-propagates analytical gradients without saving the large broadcast tensors, thereby optimizing memory efficiency.
