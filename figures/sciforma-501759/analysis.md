# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FlexPose: Pose Distribution Adaptation with Limited Guidance — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13463

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a generator decomposition framework for pose distribution adaptation, structured as a sequential pipeline with distinct functional modules and two parallel data paths. The global layout is horizontal, progressing from left to right, with a light green background enclosing the core processing stages. At the top, a legend specifies that orange-bordered boxes represent 'Update in Generic Pose Distribution Estimation' and red-bordered boxes denote 'Update in Pose Distribution Adaptation'.

The workflow begins with two input streams: one represented by blue arrows labeled 'Path of g_s(·)' and another by green arrows labeled 'Path of g_t(·)', indicating separate processing paths for source and target distributions. Both paths first pass through an orange-bordered rectangular module labeled f(·), which serves as a shared feature extractor or initial transformation stage.

Following f(·), both paths enter a second orange-bordered module labeled A(·), which contains a 3x3 grid with three gray-shaded cells (top-left, center, bottom-right), symbolizing a spatial or structural transformation. This module is associated with the source domain, denoted by δ_s above it. From here, the blue path continues directly to the final output module φ(·), while the green path proceeds to a red-bordered module τ(·), which also contains a 3x3 grid with the same three gray-shaded cells. This τ(·) module is explicitly marked as the adaptation component, responsible for adjusting the source generator for pose distribution adaptation, as stated in the caption. It is associated with the target domain, denoted by δ_t above it.

After passing through τ(·), the green path merges with the blue path at the final orange-bordered module φ(·), which represents the output generator or final transformation stage. The outputs of φ(·) are shown as continuing along both blue and green arrows, indicating that the adapted and unadapted paths converge into a unified output. The visual distinction between orange and red borders clearly separates the generic estimation updates from the adaptation-specific updates, emphasizing the modular design where τ(·) is the key adaptation component inserted only in the target path.
