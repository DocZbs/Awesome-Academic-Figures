# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Learning Models for Colloidal Nanocrystal Synthesis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10838

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a dual-pathway machine learning framework for predicting nanomaterial properties from both imaging data and synthesis recipes. The top pathway begins with a TEM image dataset (labeled ①), showing grayscale transmission electron microscopy images of star-shaped nanoparticles at 100 nm scale. These images are fed into a segmentation network, depicted as a series of stacked gray rectangular blocks representing convolutional layers, which processes the images to extract particle regions. The output is then used in a semi-supervised learning module, shown as a box containing two side-by-side images labeled 'Weak & Full labels' — one with sparse, coarse masks and the other with dense, precise masks — connected by a red circular arrow indicating iterative refinement. This process leads to clustering, where individual particles are grouped and labeled (e.g., Star-4, Star-6), with example images highlighted in red boxes. The resulting segmentation outputs, showing numbered star shapes (1, 2, 3), are passed as labels to the bottom pathway.

The bottom pathway starts with a synthesis recipe dataset (labeled ②), represented by icons of an experimenter, lab equipment, and literature, symbolizing experimental and literature-derived data. This data is converted into two types of descriptors: condition descriptors (in orange) including temperature (thermometer icon), time (clock icon), and concentration (flask icon); and chemical descriptors (in blue) including precursor, ligand, and solvent, each illustrated with molecular structures. These descriptors feed into a reaction intermediate block, shown as a chemical reaction A + B → AB, which also includes a 'Data augmentation' label below it, suggesting synthetic data generation. The augmented data is then processed through a deep learning model, visualized as a sequence of alternating light pink and light green vertical bars, representing neural network layers. The final outputs are predictions of nanomaterial properties: 'Size', illustrated with wavy lines, and 'Shape', shown with three distinct nanoparticle morphologies — a star, a cube, and a sphere — all within teal-colored boxes. A black arrow labeled 'As labels' connects the top pathway's segmentation results to the bottom pathway's deep learning model, indicating that the segmented particle features serve as supervisory signals for training the property prediction model. The overall layout is horizontal and modular, with clear left-to-right data flow, and uses color-coded blocks and icons to distinguish data types and processing stages.
