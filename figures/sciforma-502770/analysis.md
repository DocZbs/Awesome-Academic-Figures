# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Branch Mutual-Distillation Transformer for EEG-Based Seizure Subtype Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15224

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two variations of a Multi-Branch Encoder Block, labeled (a) and (b), designed for processing different types of input data: auxiliary wavelets in (a) and raw EEG data in (b). Both diagrams share a similar structural layout but differ in their internal processing pathways.

In both parts, the global layout consists of an input section on the left, a central processing block labeled 'Multi-Branch Encoder Block', and an output section on the right. The central block is enclosed in a light purple rounded rectangle and contains a sequence of computational modules arranged horizontally from left to right.

For part (a), the input is labeled 'Input patch embeddings' and consists of six distinct embedding sequences, each represented by a horizontal bar segmented into multiple small rectangles. These are labeled vertically as 'other', 'γ', 'β', 'α', 'θ', and 'δ', each with a unique color: light blue for 'other', medium blue for 'γ', gray for 'β', teal for 'α', green for 'θ', and light green for 'δ'. These inputs feed into the Multi-Branch Encoder Block.

Inside the block, the first module is a vertical dark blue rectangle labeled 'Multi-Head Attention'. This is followed by a yellow vertical rectangle labeled 'Add & Norm'. Next are six parallel light blue rectangular modules, each labeled 'Expert FFN' followed by a subscript corresponding to the input type: 'Expert FFN_other', 'Expert FFN_θ', 'Expert FFN_β', 'Expert FFN_α', 'Expert FFN_θ', and 'Expert FFN_δ'. These expert feed-forward networks are arranged vertically. After these, another yellow 'Add & Norm' module follows. The outputs from this block are labeled 'Learned patch embeddings' and mirror the input structure with the same six colored bars, indicating processed embeddings for each frequency band or component.

Part (b) shows a modified version of the same block for raw EEG data. The input is a single yellow segmented bar labeled 'Input patch embeddings'. The initial components — 'Multi-Head Attention' and the first 'Add & Norm' — are identical to part (a). However, instead of separate expert FFNs for each band, there are six identical 'Expert FFN' modules (labeled 'Expert FFN_other', 'Expert FFN_θ', etc.), each connected via a purple arrow to a corresponding yellow segmented output bar. These outputs are then fed into a pink vertical rectangle labeled 'Wavelet Attention'. Following this, a final 'Add & Norm' module (yellow) produces the 'Learned patch embeddings', which is a single yellow segmented bar matching the input format.

Connections are shown as arrows: from inputs to the first module, between consecutive modules within the block, and from the expert FFNs to the Wavelet Attention in part (b). The arrows indicate the flow of data through the network. The figure uses color coding consistently to distinguish different input types and their corresponding processing paths.
