# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Architectures for High Resolution Vision-Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02584

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of dense cross-attention layers integrated into a pre-trained and frozen language model to enable conditioning on visual inputs. The global layout is divided into two main sections: a simplified overview on the left and an expanded, detailed view on the right, connected by a dashed line indicating that the right section is an unpacked representation of the left. On the far left, five red squares represent the vision input tokens, which are fed into the system. Below them, five blue squares denote the language input tokens. These inputs are processed through a modular pipeline consisting of a Dense Cross-Attention block followed by an LM Layer, both enclosed within a dashed rectangular boundary. The Dense Cross-Attention block is depicted as a red rectangle with a flame icon, symbolizing active computation, and receives inputs from both vision and language streams. The LM Layer above it is shown as a blue rectangle with a snowflake icon, indicating a frozen or pre-trained component. An upward arrow from this LM Layer suggests the output flow to subsequent layers or final prediction.

On the right side, the architecture is expanded to reveal internal components. The same LM Layer appears at the top, again blue with a snowflake icon. Below it, a red rectangle labeled 'FFW' (Feed-Forward Network), marked with a flame icon, receives input via a summation operation (+) from the preceding Cross-Attention layer. This Cross-Attention layer, also red with a flame icon, takes three inputs: K (keys) and V (values) from the vision input (red squares), and Q (queries) from the language input (blue square). These inputs are explicitly labeled with arrows pointing to the respective ports of the Cross-Attention module. The outputs of the Cross-Attention and FFW layers are combined via summation operations before being passed to the LM Layer. The entire sequence of Cross-Attention, FFW, and LM Layer is enclosed in a dashed box, emphasizing it as a single processing unit. All connections are represented by solid black arrows indicating the direction of data flow. The caption clarifies that the keys and values for the cross-attention layers are derived from vision features, while queries come from language inputs. Additionally, the output matrices of both the cross-attention and feed-forward modules are initialized close to zero to preserve the original language model’s behavior during initialization.
