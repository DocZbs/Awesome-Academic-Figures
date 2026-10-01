# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Repository Structure-Aware Training Makes SLMs Better Issue Resolver — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19031

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ReSAT training data pipeline, divided into two main stages: (1) Data Scraping and (2) ReSAT Data Construction and Training. The global layout is horizontal and modular, with stage (1) positioned at the top and stage (2) below it, separated by a dashed blue line. Stage (2) is further subdivided into four parallel, vertically stacked modules arranged in a 2x2 grid: File Localization, Function Localization, Line Localization, and Code Edit. Each module contains two submodules—Construction and Training—separated by a dashed horizontal line within each box.

In stage (1), Data Scraping begins with a light blue rounded rectangle labeled 'Repository Selection', which feeds into a rectangular box with a repository icon labeled 'Repository'. This connects via a solid blue arrow to a light blue rounded rectangle labeled 'Issues and PRs scraping'. From there, two parallel outputs emerge: a rectangular box with an issue icon labeled 'Issue' and another with a pull request icon labeled 'Pull'. Both converge into a rectangular box with a code diff icon labeled 'Code Diff'. All boxes in this stage have thin blue borders and use black sans-serif text.

Stage (2) consists of four dashed blue-bordered rounded rectangles, each representing a localization or edit task. Within each, the Construction submodule takes inputs from 'Repository' and 'Code Diff' (both depicted as small rectangular boxes with respective icons) and produces intermediate data outputs such as 'Repository Structure', 'Modified Files', 'Modified File Skeleton', 'Modified Functions', 'Modified Func Content', 'Modified Lines', 'Modified Context', and 'Code Edit'. These outputs are shown as light blue rounded rectangles with black text. The Training submodule in each module takes an 'Issue' (a small rectangular box with an issue icon) and one of the constructed data types (e.g., 'Repository Structure') as input, producing the same output as the Construction phase (e.g., 'Modified Files'). All arrows are solid blue, indicating directional flow from left to right within each submodule.

The visual modules consistently use light blue backgrounds for process steps and white backgrounds for input/output data boxes. Icons are simple and monochromatic: a folder for Repository, a document with a pencil for Code Diff, a circle with an exclamation mark for Issue, and a branching arrow for Pull. Text labels are concise and aligned centrally within each box. The overall structure emphasizes a clear, step-by-step progression from raw repository data through structured construction to targeted training inputs for SLMs.
