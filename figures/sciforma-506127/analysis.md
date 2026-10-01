# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Whisper Turns Stronger: Augmenting Wav2Vec 2.0 for Superior ASR in Low-Resource Languages — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00425

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative workflow for training a fine-tuned speech processing model using two distinct data preparation pipelines: 'Clean' and 'Augmented'. The layout is divided into two vertical columns, each representing one pipeline, with the left column labeled 'Clean' and the right column labeled 'Augmented'. Both pipelines share a common final stage of fine-tuning a Wav2Vec 2.0 model, but differ in the preprocessing steps applied to the input audio data.

In the 'Clean' pipeline, the process begins with an input block, depicted as a light blue rounded rectangle, containing three example audio inputs represented by waveform icons followed by transcribed text in Arabic, Spanish, and Russian respectively: 'تجدثت معها خلال ساعة', 'nós temos tecos estiscucos', and 'СКАЖУТ ВАМ ВЕС ДУХ'. This input flows via a black arrow to a yellow rounded rectangle labeled 'Data Preprocessing', which lists three steps: removing punctuations and special characters, resampling to 16kHz, and creating a vocab.json file. From there, a black arrow leads to a large gray rounded rectangle titled 'Fine-Tuned Model'. Inside this container, a green rounded rectangle labeled 'Wav2Vec 2.0' is connected by a downward arrow to a pink rounded rectangle labeled 'Fine-Tuning', indicating the sequential model training process.

The 'Augmented' pipeline follows a similar structure but includes an additional augmentation step. It starts with an identical input block, also showing the same three multilingual audio-text examples. A black arrow connects this to a larger yellow rounded rectangle labeled 'Augmentations', which contains three smaller colored rounded rectangles: a light blue one labeled 'Pitch Shift', a purple one labeled 'Gaussian Noise', and an orange one labeled 'Band Stop'. These represent the types of audio augmentations applied. An arrow from the 'Augmentations' block leads to the same 'Data Preprocessing' step as in the clean pipeline, with identical listed operations. Finally, another arrow connects to the same 'Fine-Tuned Model' container, which again contains the 'Wav2Vec 2.0' and 'Fine-Tuning' components in green and pink, respectively, mirroring the clean pipeline's final stages.

All connections between modules are represented by solid black arrows indicating the direction of data flow. The visual design uses consistent shapes (rounded rectangles) and color coding to differentiate components: light blue for input, yellow for preprocessing/augmentation, gray for the model container, green for the base model, and pink for the fine-tuning step. The figure effectively contrasts the two approaches by showing that the augmented pipeline introduces audio transformations before the standard preprocessing, while both converge on the same model fine-tuning procedure.
