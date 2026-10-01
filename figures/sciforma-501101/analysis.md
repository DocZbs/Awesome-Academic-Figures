# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Object-centric Representation Learning with Pre-trained Geometric Prior — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12331

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct architectural pipelines for learning object-centric representations from images, labeled as (a) and (b), each illustrating a different training strategy. Both diagrams share a similar global layout: an input image on the left, a sequence of processing modules in the center, and a reconstructed output image on the right, with a feedback loop indicating a reconstruction loss computed between the original and reconstructed images.

In diagram (a), titled 'End to end learning of visual patches and object-centric representations', the process begins with an input image containing four distinct geometric shapes: a gray circle, a green triangle, a purple diamond, and a white smiley face. This image is fed into a 'Visual Encoder' module, represented as a light beige rectangle. The output of the encoder is a set of feature maps, depicted as stacked green rectangles, which are then passed to a 'Slot Encoder' (light purple rectangle). The Slot Encoder processes these features into a set of latent slots, shown as a stack of three colored bars (yellow, orange, green). These slots are then decoded by a 'Slot Decoder' (another light purple rectangle) to reconstruct the original image. A reconstruction loss is computed between the original and reconstructed images, forming a feedback loop that updates all components during training. All modules are connected sequentially with solid black arrows, and the entire pipeline is enclosed within a rounded rectangular box.

Diagram (b), titled 'Learning object-centric representations with frozen pre-trained visual encoder', follows a similar structure but introduces a key modification. The input image is identical to that in (a). The 'Visual Encoder' is now labeled '(frozen)', indicating it is not updated during training and is instead a pre-trained model. Its output, again represented as stacked green rectangles, is fed into the 'Slot Encoder'. The Slot Encoder produces the same set of latent slots, which are then processed by the 'Slot Decoder'. However, the output of the Slot Decoder is not a full image but a set of feature maps (stacked green rectangles), which are then used to reconstruct the image. The reconstruction loss is computed between the original image and the final reconstructed image, and this loss is backpropagated only through the Slot Encoder and Slot Decoder, leaving the Visual Encoder unchanged. The connections between modules are again indicated by solid black arrows, and the entire pipeline is enclosed in a rounded rectangular box.

Both diagrams use consistent color coding: input/output images are shown in light purple boxes, the Visual Encoder is light beige, the Slot Encoder and Slot Decoder are light purple, and intermediate feature representations are green. The reconstruction loss is labeled below the main flow. The figure caption states that the architecture includes a reconstruction objective on pre-trained geometric features and uses an Attentional Slot Decoder for efficient learning, which is implied in the design of the Slot Decoder module.
