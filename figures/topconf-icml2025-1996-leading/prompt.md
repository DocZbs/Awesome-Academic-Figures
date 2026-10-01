# 两种方法的三维场与截面热图对比：参考图改绘提示词

按现有预览逐区重建；不是原作者prompt。文字/视觉已核，改绘未生成或渲染验证。

```text
Create a quantitative comparison using ONLY the lower two-row, three-column plot grid of the attached reference. Exclude the cropped paper title, author lines, page rules and excessive upper whitespace. Use a clean white canvas sized around the six plots, not the damaged full crop.

=== METHOD ROWS AND VIEW COLUMNS ===
Use {{method_names}} for two aligned rows. The left column shows a three-dimensional field; the middle and right show slices from {{slice_coordinates}}. Keep corresponding axes, plot sizes, view angles and coordinate definitions consistent where scientifically appropriate. Put method labels below each row, optional {{panel_labels}} at row ends and a thin separator between rows.

=== VOLUME AND SLICES ===
Render {{volumetric_fields}} with the user's specified volume/surface/sample representation and the true {{field_quantity}}. The source's exact colored quantity is unknown without its caption, so do not invent a periodic bright-point lattice or label it error. Include genuine coordinate axes and a narrow colorbar. Compute both square slice heatmaps from the same true field arrays, using {{axis_labels}} and concise coordinate headings. Do not reuse y=-1/y=0 unless these are actual user slice locations. Give each plotted slice a readable colorbar.

=== SCALE INTEGRITY ===
Approximate the reference's dark-blue/blue/pale/red colors using #080E79, #173BDB, #F4F0DA and #CF2926. Apply {{colorbar_ranges}} and actual units. The reference has different ranges across methods; a new figure must explicitly state whether scales are shared or independent. Use a common range only for comparable quantities and units. Never infer superiority from darker colors alone or copy the source tick values as new results. If numerical arrays are missing, request them before drawing any numerical heatmaps.

=== STYLE AND DELIVERABLE ===
Keep a white background, minimal scientific axes, aligned panels and enough space for six colorbars. Every data-bearing mark must come from {{true_data}}. Add {{comparison_notes}} only when supported by the user's method and data. Follow {{layout_changes}}, {{language}} and {{output_format}} with editable axes/labels and appropriately resolved data renderings. Verify slice extraction, coordinate units, scales and readability. This is a layout reconstruction, not verification of the source number, its colored physical quantity or a scientific performance claim.
```
