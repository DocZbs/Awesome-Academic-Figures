# Media sources and attribution

Film: Awesome Academic Figures — product walkthrough. Captured 2026-10-02.

- Live gallery: https://doczbs.github.io/Awesome-Academic-Figures/
- Repository UI: https://github.com/DocZbs/Awesome-Academic-Figures
- UI views are genuine captured states. Cropping, deterministic cursor overlays and transitions were added for the film.
- Two CollabLLM reference images were reused from the actual downloaded demo reference ZIP. No full image corpus was downloaded.
- Music and edit accents: original deterministic synthesis in build_sound.py. No third-party song or music samples.
- Narration: authored English script synthesized with Kokoro v1.0, af_heart, American English. The user approved the opening voice preview. No cloned voice.

## Paper figures visible in source screenshots

### CollabLLM: From Passive Responders to Active Collaborators
Authors: Shirley Wu, Michel Galley, Baolin Peng, Hao Cheng, Gavin Li, Yao Dou, Weixin Cai, James Zou, Jure Leskovec, Jianfeng Gao
Paper: https://proceedings.mlr.press/v267/wu25i.html
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://proceedings.mlr.press/pmlr-license-agreement.html
Gallery record: icml-2025-collabllm-fig-1
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.

### GRPO-CARE: Consistency-Aware Reinforcement Learning for Multimodal Reasoning
Authors: Yi Chen, Yuying Ge, Rui Wang, Yixiao Ge, Junhao Cheng, Ying Shan, Xihui Liu
Paper: https://aclanthology.org/2026.findings-acl.210/
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://aclanthology.org/faq/copyright/
Gallery record: topconf-acl2026-2026-findings-acl-210-leading
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.

### Speech Recognition With LLMs Adapted to Disordered Speech Using Reinforcement Learning
Authors: Chirag Nagpal, Subhashini Venugopalan, Jimmy Tobin, Marilyn Ladewig, Katherine Heller, Katrin Tomanek
Paper: https://arxiv.org/abs/2501.00039
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://arxiv.org/abs/2501.00039 (view license → CC BY 4.0; checked 2026-10-02)
Gallery record: sciforma-506020
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.

### Towards Unraveling and Improving Generalization in World Models
Authors: Qiaoyi Fang, Weiyu Du, Hang Wang, Junshan Zhang
Paper: https://arxiv.org/abs/2501.00195
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://arxiv.org/abs/2501.00195 (view license → CC BY 4.0; checked 2026-10-02)
Gallery record: sciforma-506076
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.

### From Pixels to Predicates: Learning Symbolic World Models via Pretrained Vision-Language Models
Authors: Ashay Athalye, Nishanth Kumar, Tom Silver, Yichao Liang, Jiuguang Wang, Tomás Lozano-Pérez, Leslie Pack Kaelbling
Paper: https://arxiv.org/abs/2501.00296
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://arxiv.org/abs/2501.00296 (view license → CC BY 4.0; checked 2026-10-02)
Gallery record: sciforma-506089
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.

### PIGDreamer: Privileged Information Guided World Models for Safe Partially Observable Reinforcement Learning
Authors: Dongchi Huang, Jiaqi Wang, Yang Li, Chunhe Xia, Tianle Zhang, Kaige Zhang
Paper: https://proceedings.mlr.press/v267/huang25ai.html
License: CC-BY-4.0 — https://creativecommons.org/licenses/by/4.0/
License evidence: https://proceedings.mlr.press/pmlr-license-agreement.html
Gallery record: topconf-icml2025-1088-leading
Attribution: See the paper and metadata linked above.
Changes: shown in a website screenshot or contain-fitted inside the promotional composition; graphical content not rewritten.


## English narration in this revision

- Model: [hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M), v1.0; model weights Apache-2.0.
- Voice: `af_heart`, American English; [official voice inventory](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md). Synthesized narration, not a human voice recording or voice clone.
- Inference: [kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx), MIT; released fp16 model and v1.0 voices.
- Production: authored conversational English paragraphs, generated at native speed 1.0, with source audio kept. Program timing follows measured sample counts; no word alignment or karaoke claim.
- Temporary inference environment and model weights were removed after generation.
