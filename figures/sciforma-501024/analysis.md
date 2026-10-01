# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Greek2MathTex: A Greek Speech-to-Text Framework for LaTeX Equations Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12167

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a multi-stage system architecture designed for converting spoken audio into LaTeX-formatted mathematical equations. The global layout is linear and left-to-right, depicting a sequential pipeline starting from an audio input on the far left and ending with output LaTeX equations at the bottom right. The structure consists of three main processing stages connected by directional arrows, with intermediate outputs labeled for clarity.

The first visual module on the left is a light blue rounded rectangle labeled 'Fine-tuned XLS-R' with the Meta logo above it. Inside this box is a black icon representing an audio waveform enclosed within a detection frame, symbolizing speech recognition. This module receives input from a black silhouette of a human head speaking, indicated by sound waves emanating toward the module. An arrow leads from this module to the next stage.

The second stage is represented by a document icon with a microphone symbol and the red text label 'Audio Transcription'. Below this icon, a block of Greek text appears: “αλφα συν ανοιξε παρενθεση βτα πολλαπλασιασμος με γαμα κλείσε παρένθεση”, which translates to 'alpha plus open parenthesis beta times gamma close parenthesis'. This transcription serves as the intermediate output from the speech recognition step and is passed to the next module.

The third module is a beige rounded rectangle labeled 'GPT3.5', featuring the OpenAI logo (a black interwoven knot) on the left and a cartoon robot sitting at a laptop on the right. This module processes the transcribed Greek text and generates the final output. A downward arrow extends from this module to the bottom of the diagram, pointing to the output labeled 'LATEX equations'. Below this label is the rendered LaTeX equation: α + (β · γ), demonstrating the successful conversion of spoken mathematical expression into formal notation.

All connections between modules are depicted using solid black arrows indicating the flow of data. The overall design emphasizes a clear, step-by-step transformation from spoken language to structured mathematical notation, leveraging fine-tuned speech recognition and large language model interpretation.
