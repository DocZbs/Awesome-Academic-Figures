# Reference-guided adaptation prompt

Visually reviewed against the published preview; adaptation generation has not been tested. Scientific inputs in braces must come from the user.

Create a two-row conceptual mechanism comparison inspired by the attached predictive-visual-representation figure. Both rows read left to right, share aligned input/model/output positions, and are separated by a dark dashed horizontal rule.
=== STATIC REPRESENTATION, UPPER ROW ===
Place one small observation thumbnail at left, a solid grey arrow, a rounded rectangular encoder module in the center, and a two-dimensional feature grid at right. Label the row with {baseline_representation_name} and the module with {baseline_encoder}. Use a user-owned image or original schematic observation. The feature grid is symbolic; it must not pretend to visualize measured activations unless actual values are provided.
=== PREDICTIVE REPRESENTATION, LOWER ROW ===
Show a short stack of observation frames at left with a separate instruction card beneath. Lead both into a dashed model boundary containing a short sequence of processing blocks. Label the boundary {predictive_model}; replace the source video-diffusion block labels with the user's real operations. A main arrow leads to a stack of feature grids, where the current representation is blue and the future representations are orange. A thin connection from the intermediate representation to the output is used only if scientifically justified in {connections}. Treat any dimension annotation such as T,H,W as a replaceable scientific input, not a guessed tensor shape.
=== GLOBAL ANNOTATIONS ===
Use three simple swatches below the figure: encoder/module, current representation and future representations. Match swatches to module and grid colors. Keep the top and bottom row titles outside the model boxes. Make the temporal distinction understandable through stacked layers and labels as well as color.
=== STYLE SPECIFICATIONS ===
White background, large legible black labels, restrained dark-grey outlines, grey arrows. Use approximate pale yellow #FFE58A encoder fill, pale blue #A8C4DF current-state grid and dark orange #BE5F12 future-state cells, with neutral grey processing blocks. Avoid decorative 3D lighting; a small offset is sufficient for temporal layers. Deliver editable vector source and a high-resolution preview. Replace all scientific labels with user-provided claims and never add an equation or numerical improvement unsupported by the user's text.

Preserve the source attribution when distributing the reference. Label the adapted drawing as a new figure; do not imply author endorsement.
