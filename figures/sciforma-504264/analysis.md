# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AA-SGAN: Adversarially Augmented Social GAN with Synthetic Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18038

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of AA-SGAN, a framework for adversarially augmented pedestrian trajectory prediction. The global layout is structured horizontally, comprising three main components: the Augmenter on the left, the Generator in the center, and the Discriminator on the right. These modules are interconnected through data flows that represent training signals and predictions, forming an adversarial learning setup.

The Augmenter module, enclosed in a light orange box, consists of an Encoder and Decoder, each containing an LSTM network. The Encoder processes input synthetic trajectories denoted by 's', which are represented as a gray rounded rectangle. The input dimensionality is specified as '[batch, obs+pred, 2]' on both sides of the Encoder and Decoder. Between them lies a Pooling Module. The output of the Augmenter is labeled 'synth-augmented trajectories (a)', split into observed ('a_obs') and predicted ('a_pred') segments, shown as two brown rounded rectangles.

The Generator module, enclosed in a light teal box, mirrors the Augmenter’s structure with its own Encoder-Decoder pair, each containing an LSTM. It receives real trajectories ('r'), split into observed ('r_obs') and predicted ('r_pred') parts, shown as yellow rounded rectangles. The Generator outputs two types of predictions: 'generator-predicted real trajectories (r̂)', split into 'r̂_obs' (yellow) and 'r̂_pred' (teal), and 'generator-predicted synth-augmented trajectories (â)', split into 'â_obs' (brown) and 'â_pred' (teal). Both outputs are marked with 'fake' labels in pink rounded rectangles.

The Discriminator, enclosed in a light green box, contains a single Encoder with an LSTM. It receives three inputs: the original real trajectories ('r') marked as 'real' (purple label), the generator-predicted real trajectories ('r̂'), and the generator-predicted synth-augmented trajectories ('â'), all labeled 'fake'. The Discriminator processes these with input dimensionality '[batch, obs+pred, 2]' and outputs a binary classification decision 'real/fake' via a green rounded rectangle.

Connections are indicated by black arrows. Real trajectories feed directly into the Generator and Discriminator. The Augmenter's output feeds into the Generator and Discriminator. The Generator's outputs feed into the Discriminator. The Discriminator’s output serves as feedback for the adversarial training loop. All modules use LSTMs, and the Pooling Module is present only in the Augmenter and Generator. The figure uses color-coding to distinguish trajectory types: yellow for real, brown for synthetic/augmented, teal for generator outputs, and purple/pink for labels. Text annotations specify dimensions and roles, ensuring clarity in the data flow and model function.
