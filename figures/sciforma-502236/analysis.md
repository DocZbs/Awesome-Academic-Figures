# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14161

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the TAC benchmark, designed to evaluate autonomous agents in a realistic professional software engineering environment. The global layout is divided into three main sections: on the left, a 'Reproducible Self-hosted Environment' simulates a typical workplace; in the center, an 'Agent' interacts with this environment; and on the right, a list of 'Diverse Realistic Professional Tasks' is shown alongside a 'Checkpoint-based Evaluation' mechanism.

In the left section, the environment includes a browser window displaying common tools such as Rocket.Chat (red speech bubble icon), ownCloud (dark cloud icon), GitLab (orange fox icon), and Plane (blue grid icon). Below the browser are a terminal (black rectangle with command prompt symbol) and Python code (stacked code blocks with < /> symbols). To the left of the browser, three 'Simulated Colleagues' are depicted as circular avatars: an Engineer (blue circle with person at laptop), a CTO (yellow circle with person in red shirt), and HR (green circle with person wearing headphones). These colleagues interact with the environment via bidirectional arrows connecting them to the browser.

The central component is the 'Agent', represented by a black robot icon with a smiling face. It communicates with the environment through two labeled arrows: 'action' from the agent to the browser, and 'observe' from the browser back to the agent, forming a feedback loop.

On the right, under the heading 'Diverse Realistic Professional Tasks', six task categories are listed, each with a colored label and corresponding task description: Admin (gray) – arrange meeting room; DS (orange) – analyze spreadsheet; SDE (light blue) – prepare code release; HR (light green) – resume screening; PM (yellow) – team sprint planning; Finance (lavender) – reimburse travel bills. A yellow arrow points from the 'Tasks' label to this list, indicating the source of tasks.

Below the tasks, the 'Checkpoint-based Evaluation' is illustrated as a horizontal timeline with four checkpoints. From left to right: 'access bills' (green dot, +1 score), 'check reimbursement criteria' (green dot, +1 score), 'consult Mike' (red dot, +0 score), and 'confirm reimbursement amount' (red dot, +0 score). The total score is displayed as '2/4' at the far right. This evaluation framework tracks progress and assigns scores based on whether each step is completed correctly.

The entire diagram uses clean, flat design elements with consistent color coding for roles and clear directional arrows to indicate interaction flow. Text labels are placed near relevant components for clarity, and the overall structure emphasizes the agent's ability to perform complex, multi-step tasks within a controlled, reproducible environment.
