# Reference-guided adaptation prompt

Visually reviewed against the published preview; adaptation generation has not been tested. Scientific inputs in braces must come from the user.

Create a controller-replacement mechanism comparison inspired by the attached reinforcement-learning reference. Separate a small agent/environment context above from a larger two-row controller-output comparison below. Use the user's actual controller and environment names; do not copy the source's simulated road screenshot.
=== CONTEXT ===
At top left, show a compact reinforcement-learning enclosure with Actor and Critic modules. At top right, show {environment} as an original schematic scene or user-owned image. Draw a double-headed interaction connection only if the user's description includes both acting and feedback; otherwise use labeled directed arrows. Indicate that the lower enclosure magnifies the actor/controller component, without suggesting an unprovided training loop.
=== CONTROLLER REPLACEMENT ===
Inside a lower-left outlined group, place two comparable controller blocks one above the other. The source contrasts MLP with LipsNet++; replace these with {baseline_controller} and {proposed_controller}. A curved annotation labeled replace or compare indicates the conceptual substitution, not time-varying switching during deployment. Keep each block's input/output relation explicit.
=== OUTPUT COMPARISON ===
Align two dashed output cards at right with the controller rows. The upper card illustrates {baseline_output_behavior}; the lower card illustrates {proposed_output_behavior}. If real measured signals are supplied, plot them with shared time range, units and scale. If not, draw clearly labeled schematic signals without numeric axes or claims of empirical improvement. Avoid inventing a frequency, noise amplitude, smoothness metric or statistical significance.
=== STYLE AND OUTPUT ===
Use a white canvas, thin dark outlines, muted lavender #D4B8ED controller blocks and pale cream #F9EDC7 context accents. Approximate slate-blue #516C91 is suitable for schematic signal strokes. Use consistent arrow thickness, ample text clearance and an original environment pictogram. The source preview is cropped at the edges; design a complete new canvas rather than reproducing the crop or guessing missing labels. Output editable vector source plus a high-resolution preview. Check that every stated benefit is supported by the user's scientific text.

Preserve the source attribution when distributing the reference. Label the adapted drawing as a new figure; do not imply author endorsement.
