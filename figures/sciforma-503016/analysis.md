# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CrackUDA: Incremental Unsupervised Domain Adaptation for Improved Crack Segmentation in Civil Structures — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15637

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-step deep learning architecture for domain-adaptive binary segmentation, divided into Step 1 and Step 2, with a legend explaining visual components. The global layout is split into two main sections: Step 1 on the left and Step 2 on the right, each depicting a neural network pipeline. Step 1 shows a standard encoder-decoder structure trained on labeled source data, while Step 2 introduces domain adaptation via a shared encoder with domain-specific layers and an adversarial discriminator.

In Step 1, the input is a source domain image X_j^S, represented as a gray square with a crack-like texture. This feeds into an encoder E_φ1, composed of stacked blocks: yellow blocks denote domain-invariant layers φ_i, pink blocks represent domain-specific layer φ_s1, and the entire encoder is shown as a hierarchical structure narrowing toward the center. The output from the encoder is passed to a blue decoder D1, consisting of stacked blue blocks that expand back to the original image size. The decoder outputs a segmentation mask Y_j^S, shown as a black square with a white crack, which is compared to the ground truth via a cross-entropy loss L_CE, indicated by a yellow box with an arrow pointing to the decoder.

Step 2 begins with the same source image X_j^S entering a modified encoder E_φ2. This encoder retains the domain-invariant layers (yellow) and the first domain-specific layer φ_s1 (pink), but adds a second domain-specific layer φ_s2 (purple). The output from E_φ2 splits into two paths: one feeding into decoder D1 (blue), now marked with a lock icon indicating it is frozen, and the other into a new decoder D2 (teal). Decoder D1 is connected to a Kullback-Leibler divergence loss L_KLD, which measures the difference between the latent representations of the two decoders. Decoder D2 is connected to the same L_CE loss as in Step 1, ensuring continued segmentation accuracy on the source domain.

Additionally, Step 2 includes adversarial training. Both source X_j^S and target domain images X_j^T (a different gray image with a crack, shown below) are fed into the same encoder E_φ2. The shared latent representation is then passed through a Gradient Reversal Layer (GRL), depicted as a blue curved arrow, before being input to a gray discriminator d_p. The discriminator outputs a loss L_adv, which is used to train the encoder to produce domain-invariant features. The GRL reverses the gradient during backpropagation, enabling the encoder to learn features that fool the discriminator.

The legend at the bottom left defines the color-coded blocks: yellow for domain-invariant layers φ_i, pink for domain-specific layer φ_s1, purple for domain-specific layer φ_s2, light blue for decoder D1, teal for decoder D2, and gray for discriminator d_p. It also defines the datasets: {X_j^S, Y_j^S} for the source domain S and {X_j^T} for the target domain T. The overall workflow follows an alternating training strategy: first, train for segmentation on the source domain; then, freeze D1 and φ_s1, add φ_s2, and perform adversarial training on both domains to enable domain adaptation.
