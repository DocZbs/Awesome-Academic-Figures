# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Analyzing the Attention Heads for Pronoun Disambiguation in Context-aware Machine Translation Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11187

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the different types of attention relations investigated in a machine translation model, specifically focusing on how context-dependent words (like pronouns) relate to their antecedents across source and target sequences. The global layout consists of two horizontal text lines: the top line labeled 'Source' contains the English sentence 'This is my house . [SEP] I like it . [EOS]', and the bottom line labeled 'Target' contains the German translation 'Das ist mein Haus . [SEP] Ich mag es . [EOS]'. Key words are color-coded: 'house' and 'Haus' are highlighted in red, indicating they are context cues (S_C and T_C), while 'it' and 'es' are highlighted in purple, representing context-dependent pronouns (S_P and T_P). The [SEP] and [EOS] tokens are shown in black, serving as sequence separators and end-of-sequence markers.

Visual modules include four distinct attention paths represented by colored curved arrows. A blue arrow labeled S_P → S_C connects the source pronoun 'it' to the source context cue 'house', representing self-attention within the source sequence. Two yellow arrows represent cross-attention: one labeled T_P → S_C connects the target pronoun 'es' to the source context cue 'house', and another labeled T_P → S_P connects 'es' to the source pronoun 'it'. These indicate the target-side model attending to source-side elements. Two green arrows represent decoder-attention (decoder self-attention): one labeled T_P → T_C connects 'es' to the target context cue 'Haus', and another labeled T_P → T_{C+1} connects 'es' to the preceding token 'mag' in the target sequence, which corresponds to the antecedent as input during decoding.

Connections and arrows are drawn as smooth curves with arrowheads pointing from the source of attention to the target. The blue arrow originates from 'it' and curves upward to 'house'. The first yellow arrow curves from 'es' to 'house', and the second yellow arrow curves from 'es' to 'it'. The green arrows curve from 'es' to 'Haus' and from 'es' to 'mag', respectively. Each arrow is annotated with its corresponding mathematical notation, clearly labeling the type of attention relation being modeled. The figure's design emphasizes the flow of information between context-dependent words and their antecedents across both source and target languages, highlighting the interplay of self-, cross-, and decoder-attention mechanisms in capturing linguistic dependencies during neural machine translation.
