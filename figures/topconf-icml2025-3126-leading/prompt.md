# Reference-guided adaptation prompt

Visually reviewed against the published preview; adaptation generation has not been tested. Scientific inputs in braces must come from the user.

Create a two-band time-series modeling comparison inspired by the attached reference. The upper band contrasts data tokenization; the lower band compares model families with aligned input, model, output and training-objective positions. Use the user's actual categories and objectives instead of copying the source model names.
=== TOKENIZATION BAND ===
Begin with a thin heading and a restrained domain-icon strip. Below it, split into two neighboring panels. At left, show a continuous waveform segmented into rounded patch tokens. At right, show an actual user-provided or explicitly symbolic numerical sequence mapped into discrete token cards. Label the two processes {continuous_tokenization} and {discrete_tokenization}. A compact legend identifies continuous versus discrete tokens using shape/outline as well as muted colors. Symbolic waveforms must be labeled schematic, and no made-up token IDs may be presented as experiment data.
=== MODEL FAMILY BAND ===
Place three equally wide model columns under a common heading. Each column has a short family label, a vertical stack of input tokens, a rounded Model block, an output stack and a narrow training-objective block at the far right. Use the same geometric positions across columns so token type and objective differences are easy to inspect. Reference objectives are prior loss, cross-entropy and TimeFlow; replace them with {training_objectives} and remove a column if the user supplies fewer families. Separate neighboring columns with fine dashed dividers.
=== ANNOTATIONS ===
Use a small legend for specific versus flexible objectives if those distinctions are supported by the user's method. Keep model-family labels below their columns; place individual method names above only when supplied and factually correct. This figure explains methodological contrasts and contains no performance scores or ranked bars.
=== STYLE SPECIFICATIONS ===
Use white space, near-white rose and grey background groups, rounded token outlines and black connecting arrows. Approximate blue #536EEC marks the series/domain header, sage #D7E2CB represents discrete tokens and pale rose #FDE7E7 provides a mild group tint. Avoid a bright rainbow header or unnecessary gradients. Deliver editable source and a paper-resolution preview. Preserve scientific differences through labels and geometry, not color alone; verify that each objective is connected to the intended model.

Preserve the source attribution when distributing the reference. Label the adapted drawing as a new figure; do not imply author endorsement.
