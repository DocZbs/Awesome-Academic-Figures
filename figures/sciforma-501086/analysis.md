# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

OmniPrism: Learning Disentangled Visual Concept for Image Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12242

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive data construction pipeline for generating paired image datasets under three distinct conceptual categories: 'Content', 'Style', and 'Composition'. The overall layout is divided into four main sections labeled (a), (b), (c), and (d), separated by dashed horizontal lines. Section (a) illustrates the 'Content' Concept Construction Pipeline, section (b) the 'Style' Concept Construction Pipeline, section (c) the 'Composition' Concept Construction Pipeline, and section (d) provides example templates for content and style concepts.

In section (a), a user icon and a GPT-4o icon are shown on the left, indicating human input and AI generation. The user instructs GPT-4o to generate two prompts: a reference prompt T_ref describing a subject in a scenario (e.g., 'A coyote prowls through the desert') and a target prompt T_tar describing the same subject with an additional subject in a different scenario (e.g., 'A coyote and parrots engage under sunset'). The concept guidance T_cg is specified as 'coyote'. The reference prompt T_ref is fed into a model labeled FLUX, which generates a reference image I_ref. This image is then processed by SAM (Segment Anything Model) using T_cg to produce a mask, which is subsequently used by Kolors along with T_tar to generate the target image I_tar. All models are represented as gray rectangles, images as colored squares, and masks as black silhouettes. Arrows indicate the flow of data from prompts to images.

Section (b) details the 'Style' pipeline. Again, GPT-4o generates two prompts: T_ref ('A lobed maple leaf') and T_tar ('A spiraled conch shell'), with T_cg as 'style'. T_ref and T_style (a style-specific prompt) are input into SDXL, producing a temporary image I_temp. This image is then processed by Instant-Style, which uses T_ref to generate I_ref and T_tar to generate I_tar. The visual elements follow the same conventions: gray boxes for models, colored squares for images, and arrows for data flow.

Section (c) shows the 'Composition' pipeline. GPT-4o generates a list of artistic style words (e.g., 'cyberpunk', 'watercolor') and then produces T_ref ('Two people doing morning exercise') and T_tar ('Pastel, two people doing morning exercise'), with T_cg as 'composition'. The reference image I_ref is processed to extract a depth map, which is then fed into ControlNet along with T_tar to generate the target image I_tar. The depth map is shown as a grayscale image, and ControlNet is depicted as a gray box.

Section (d) displays two large gray boxes at the bottom: 'Content Template' and 'Style Template T_style'. The Content Template lists various animals with associated descriptive adjectives (e.g., 'Swan': ['elegant', 'white', 'long-necked']). The Style Template provides structured JSON-like entries for different art styles, including 'Name', 'Prompt', and 'Negative Prompt' fields, with examples like 'misc-disco' and 'sai-fantasy art'. These templates serve as the source material for generating the prompts used in the pipelines above. The entire figure emphasizes the role of GPT-4o in generating diverse prompts and the use of specialized models (FLUX, Kolors, SAM, SDXL, Instant-Style, ControlNet) to create paired images for training or evaluation purposes.
