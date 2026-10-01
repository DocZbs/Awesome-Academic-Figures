# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

QuIM-RAG: Advancing Retrieval-Augmented Generation with Inverted Question Matching for Enhanced QA Performance — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative workflow diagram illustrating two different Retrieval-Augmented Generation (RAG) systems: 'QuIM-Rag on Custom Dataset' on the left and 'Traditional Rag on Dataset' on the right, both processing the same user query: 'What is the location and contact information for NDSU's Career Advising Center?'. The global layout is split into two vertical columns, each depicting a five-step process numbered 1 through 5, with steps indicated by circular numbered labels (brown for traditional, blue for QuIM-Rag). The left column details the QuIM-Rag approach, while the right column shows the traditional RAG method.

In the QuIM-Rag workflow (left), Step 1 involves converting the user query into a query vector and searching for semantic matches in a VectorDB. Step 2 calculates similarity scores and retrieves the top k=3 matching questions from a Question database. Step 3 retrieves associated chunks corresponding to those questions. Step 4 returns these retrieved chunks as context to a base LLM. Finally, Step 5 generates an answer using the LLM and returns it to the user. The output response includes specific details: location (306 Ceres Hall, Fargo, ND-58108), phone number (701-231-7111), email (ndsu.cac@ndsu.edu), and a website link (https://career-advising.ndsu.edu/). The associated question database contains three sample queries (Q1, Q2, Q3) related to phone number, mailing address, and email contact, with corresponding chunks providing detailed context for each.

In the Traditional RAG workflow (right), Step 1 is not explicitly shown but implied as the initial query input. Step 2 retrieves the top k=3 chunks directly from the dataset without prior question matching. These chunks contain raw text snippets about Jessie Bauer, contact details, and office hours. Step 3 returns these retrieved chunks to the base LLM. Step 4 generates an answer based on the retrieved text. The final response includes location (306 Ceres Hall, Fargo, ND-58108), contact person (Jessica Bauer, Assistant Director), and email (jessica.m.bauer@ndsu.edu), but omits the phone number and website.

Visual modules include rectangular boxes with rounded corners for steps, colored borders (yellow for steps, green for QuIM-Rag content blocks, purple for traditional RAG content blocks), and distinct text formatting (e.g., bold for chunk headers, italic for names). Connections are represented by implicit flow from top to bottom within each column, with step numbers guiding the sequence. The figure highlights how QuIM-Rag uses a structured question-to-chunk mapping for more accurate retrieval, whereas traditional RAG relies on direct text chunk retrieval, leading to differences in the completeness and precision of the generated responses.
