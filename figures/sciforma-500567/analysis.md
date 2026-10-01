# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters Themselves — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11509

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the code implementation of the CSkip step at a mini-batch scale, focusing on an exponential image-conditioned class filtering (EICF) strategy. The global layout is structured horizontally from left to right, depicting a data processing pipeline. On the far left, a vertical stack labeled 'mini-batch' contains m input images, denoted as x₁ through xₘ, with example images of a kitten and a tabby cat shown. These images feed into a scoring matrix S of size m×n, where each cell Sᵢ,ⱼ represents the score of the i-th image against the j-th class. The classes are listed above the matrix as 'cat', 'dog', 'lion', 'bear', 'bird', etc., with the first column corresponding to 'cat'. The matrix is visually segmented: the first row (S₁,₁ to S₁,ₙ) is outlined in blue, and the last row (Sₘ,₁ to Sₘ,ₙ) in orange, indicating different image inputs. A dashed line connects the first image x₁ to the first row of scores, emphasizing the per-image scoring process. Below the matrix, a 'max' operation is applied along the rows, producing a vector of maximum scores a₁ to aₙ, displayed in light green boxes. This vector is then passed to a red-bordered rounded rectangle labeled 'EICF', which outputs a filtered list of class names, shown as '[cat, lion, bear]' in red text below. This output is fed into a blue trapezoid labeled 'E_T [ω+1:N]', representing a temporal embedding or feature extractor. Simultaneously, a pink trapezoid labeled 'E_V [ω+1:M]' represents a visual embedding or feature extractor, receiving input from the top of the scoring matrix via a feedback loop. Both E_T and E_V are connected to a loss function L_ITM, indicating that the model is trained using an image-text matching loss. The connections are shown as solid black arrows, with the feedback loop from E_V to the top of the scoring matrix suggesting iterative refinement or conditioning. The entire diagram uses distinct colors and shapes to differentiate components: images in black boxes, scores in white boxes with colored borders, max scores in green, EICF in red, and embeddings in trapezoids with gradient fills. The structure reflects a two-stage process: first, computing class-wise scores for each image in the batch, then applying EICF to select a subset of classes based on the highest scores, which are then used to condition the embeddings for training.
