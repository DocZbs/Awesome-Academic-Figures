# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Can LLMs Help Create Grammar?: Automating Grammar Creation for Endangered Languages with In-Context Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10960

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a computational linguistic pipeline for analyzing and comparing syntactic structures across languages, specifically Moklen and English, using functional grammar formalism. The global layout is divided into two main sections: on the left, a documentation process workflow; on the right, a linguistic analysis workflow culminating in the mapping of constituent structures to a shared functional structure.

On the left side, the process begins with a 'Community' represented by four stylized human figures, feeding into a 'Documentation Process' (e.g., LangDoc), depicted as a light blue rounded rectangle. This process generates two outputs shown below via dashed lines: a 'Bitext' table and a 'Wordlist (Dictionary)' box. The Bitext table has two columns labeled 'Moklen' and 'English', listing parallel sentences such as 'ญาญ่า' (Moklen) paired with 'She has already eaten' (English). The Wordlist contains lexical entries like 'มาลัด (v) to love' and 'ยู (pron) third person singular pronoun', each with part-of-speech tags and definitions.

On the right side, the 'Linguistic Analysis' (e.g., Grammar Induction), also in a light blue rounded rectangle, initiates a vertical workflow. This consists of four sequential modules in beige rectangles: 'Tokenisation', 'Sense-Mapping', 'Generation', and finally 'Formatted Grammar Rules & Lexical Entries' in a yellow rectangle. Tokenisation breaks down an example Moklen sentence 'ญา มาลัด เจีย ฮะฮี' into tokens: 'ญา | มาลัด | เจีย | ฮะฮี'. Sense-Mapping is visually represented by a green neural network icon, indicating a machine learning component that maps surface forms to semantic or syntactic senses. Generation produces structured output.

The core of the figure displays two syntactic trees side-by-side: one for Moklen and one for English, both rooted at 'S'. The Moklen tree branches into NP (PRON: ญา) and VP (V: มาลัด, PRON: เจีย, negPRT: ฮะฮี). The English tree branches into NP (PRON: She), AUX (did), NEG (not), and VP (V: love, PRON: me). Below these trees, a central functional structure is shown as a vertical list of labeled slots: PRED, SUBJ, OBJ, ADJUNCT, TNS-ASP. Green and orange curved arrows connect elements from the Moklen and English trees respectively to this shared functional structure. For instance, 'ญา' maps to SUBJ with case NOM, 'มาลัด' to PRED with 'love(she, I)', 'เจีย' to OBJ with case ACC, and 'ฮะฮี' to ADJUNCT with PRED 'NEG'. The TNS-ASP slot receives 'indicative' and 'past' from both languages. This demonstrates the φ-mapping concept, where different surface syntactic structures are mapped to a common underlying functional representation, as referenced in Dalrymple (2023).
