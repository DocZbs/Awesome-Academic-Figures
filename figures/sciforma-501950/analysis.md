# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AnchorInv: Few-Shot Class-Incremental Learning of Physiological Signals via Representation Space Guided Inversion — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13714

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct evaluation procedures for Few-Shot Class-Incremental Learning (FSCIL), labeled as (a) and (b), each depicting a sequential learning process across multiple sessions from Session 0 to Session T.

In part (a), the global layout is a linear, single-path workflow. It begins at Session 0, where an initial model, denoted as f_θ^(0), is trained using a training dataset D_tr^(0). This model is represented as a central rounded rectangle with four rectangular extensions, symbolizing a neural network or deep learning model. The model then progresses through subsequent sessions: Session 1, Session t, and finally Session T. At each session transition, the model is updated via an 'Adapt' step using a new training dataset D_tr^(k) for session k. The adaptation is indicated by a rightward arrow labeled with the corresponding dataset and the word 'Adapt'. The model evolves sequentially as f_θ^(1), f_θ^(t), and f_θ^(T), maintaining the same visual structure throughout. The entire process is depicted as a horizontal chain, emphasizing a single, continuous adaptation path.

Part (b) illustrates a modified, multi-branch evaluation procedure. The global structure remains session-based but introduces parallelism. The process starts identically in Session 0, with the initial model f_θ^(0) being trained on D_tr^(0). However, in Session 1, instead of a single adaptation, M separate copies of the base model f_θ^(0) are created. These M copies are shown vertically stacked, each labeled f_θ^(1), indicating they are all derived from the same base model. Each copy is then independently adapted using a different, randomly sampled training subset, denoted as D_tr^(1,1), D_tr^(1,2), ..., D_tr^(1,M). This branching is visually represented by a single curved arrow from the Session 0 model splitting into M separate arrows, each pointing to one of the M copies in Session 1. The adaptation continues in subsequent sessions (Session t and Session T) for each of the M model copies, with each copy receiving its own unique training data D_tr^(k,m) for session k and trial m, and undergoing an 'Adapt' step. The result is M parallel adaptation paths, each producing a final model f_θ^(T) at Session T. The figure uses ellipses (...) to indicate intermediate sessions and models, preserving the sequential nature within each branch. The visual modules are consistent: all models are drawn as identical rounded rectangles with four side extensions, and all datasets are labeled with D_tr superscripts indicating session and trial number. The connections are directed arrows labeled 'Adapt', with the dataset used for adaptation written above the arrow. The caption clarifies that in this work, the M copies are evaluated on the test set, and the mean and standard deviation of performance are reported across all M trials, providing a more robust assessment of model stability and generalization under varying data sampling.
