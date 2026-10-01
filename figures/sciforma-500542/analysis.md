# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Data-driven Precipitation Nowcasting Using Satellite Imagery — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11480

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the NPM (likely a Neural Precipitation Modeling) architecture, divided into two main components: the Satellite Prediction Model and the Satellite-to-Radar Model, separated by a vertical dashed line. The global layout is left-to-right, showing a sequential pipeline where the output of the first model serves as input to the second.

In the Satellite Prediction Model on the left, the input consists of a stack of satellite images labeled X_{t,T}, including IR 10.5 µm, WV 6.3 µm, WV 7.3 µm, and DERA (a color-coded image), arranged vertically. These inputs feed into a 'Season-aware sampling strategy' module, depicted as a light blue cylinder. The output of this module enters an Encoder, shown as a light gray trapezoid pointing right. The Encoder connects to a central processing block composed of four identical ST-Block units arranged horizontally within a dark blue rectangle. Each ST-Block contains a TCA-LKA module and a series of convolutional layers (DW Conv, Pointwise Conv, 1x1 Conv) with skip connections, as illustrated in a detailed inset below the main block. The ST-Blocks receive positional encodings: 'Day Positional Encoding' (from t_d) and 'Hour Positional Encoding' (from t_h), both shown as light blue rectangles feeding into the top and bottom of the ST-Block array via ⊕ (addition) operations. The output of the ST-Blocks goes to a Decoder, another light gray trapezoid pointing right, which produces a sequence of predicted satellite images Y_{t+1,T'} — again stacked vertically and labeled with the same spectral bands as the input. The loss function for this model is given as L(F_θ(X_{t,T}), Y_{t+1,T'}), indicating a comparison between predicted and ground truth future frames.

The Satellite-to-Radar Model on the right takes the predicted satellite sequence Y_{t+1,T'} as input. This feeds into a Generator Network G_Φ, represented as a series of seven yellow rectangular blocks of varying heights, symbolizing a deep neural network. The generator outputs a sequence of radar images, shown as a stack of color-coded precipitation maps labeled 'Radar'. This output is fed into a Discriminator Network D_ψ, depicted as a single yellow rectangle below the radar output. The training objective for the generator is specified by a combined loss function: L_{mse}(G_Φ(Y_{t+1,T'}), Z_{t+1}) + λ·E_{Y_{t+1,T'}~generated data}[log(1 - D_ψ(G_Φ(Y_{t+1,T'})))], combining mean squared error with a adversarial term to improve realism. The entire diagram uses solid black arrows to indicate data flow, with dashed lines used for the inset diagram of the ST-Block and for the positional encoding inputs. All major modules are labeled with clear text, and the figure includes mathematical notations for loss functions and network parameters, ensuring full methodological transparency.
