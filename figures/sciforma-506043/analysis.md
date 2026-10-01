# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LTX-Video: Realtime Video Latent Diffusion — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram of two Generative Adversarial Network (GAN) frameworks: (a) Traditional GAN and (b) Reconstruction GAN, illustrating differences in how the discriminator processes inputs. The layout is split into two main panels side-by-side, each labeled at the top with its respective title. Panel (a) on the left shows the conventional GAN setup, while panel (b) on the right depicts the proposed Reconstruction GAN architecture.

In panel (a), the Traditional GAN structure consists of two distinct input paths feeding into a shared discriminator module. The top path represents real data, indicated by a horizontal blue line entering a light green rectangular module labeled 'D' (discriminator), which outputs the label 'real' in blue text. The bottom path shows the generator pipeline: an input feeds into a light blue trapezoidal module labeled 'Enc' (encoder), followed by another light blue trapezoid labeled 'Dec' (decoder), whose output goes to the same discriminator 'D', which then outputs 'fake' in blue text. This illustrates the standard adversarial training where the discriminator distinguishes between real samples and generated (reconstructed) ones.

Panel (b), the Reconstruction GAN, features two identical generator pipelines stacked vertically. Each pipeline consists of an 'Enc' encoder and 'Dec' decoder, both depicted as light blue trapezoids connected sequentially. The key difference lies in the discriminator's input: for each pipeline, the original input is fed directly to the discriminator 'D' (light green rectangle) via a bypass connection, while simultaneously the reconstructed output from 'Dec' is also fed to the same discriminator. These two inputs are concatenated before being processed by 'D'. The top discriminator receives the original and reconstructed versions and outputs '(real, fake)' in blue text, indicating it classifies the original as real and the reconstruction as fake. The bottom discriminator receives the same pair but outputs '(fake, real)', suggesting a reversal in labeling — possibly reflecting a training strategy where the roles are swapped or the model learns bidirectional discrimination. Both discriminators are visually identical to those in panel (a).

Connections throughout the diagram are represented by solid blue arrows indicating data flow direction. All modules are outlined with thin dark blue borders. Text labels inside modules ('Enc', 'Dec', 'D') are black, while output labels ('real', 'fake', '(real, fake)', '(fake, real)') are in blue. The overall visual design emphasizes clarity through consistent shapes, colors, and alignment, facilitating comparison between the traditional and novel architectures. The caption below the figure explains that in the Reconstruction GAN, the discriminator sees both versions of the same sample (concatenated) and must determine which is the original and which is the reconstructed version, contrasting with the traditional setup where only one sample type is presented per training step.
