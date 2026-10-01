# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Thousand Brains Project: A New Paradigm for Sensorimotor Intelligence — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18354

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural framework for scalable, modular sensor-processing systems, illustrating five distinct configurations that vary in complexity and capability: Simplest, Multi-modal, Wider, Deeper, and Multi-modal, Deep and Wide. The global layout is organized into two rows and three columns, with each configuration depicted as a vertical stack of processing units connected by bidirectional arrows, representing data flow between sensor inputs and learning modules. A horizontal green line labeled 'voting' spans across multiple modules in the upper row, indicating a consensus mechanism among parallel learning units.

Each processing unit consists of a rectangular sensor module at the bottom (with a shaded base), connected via bidirectional arrows (blue and pink) to a central learning module above it. The learning module is represented as a double-bordered rectangle containing a grid with a purple dot, symbolizing feature extraction or processing. In some configurations, additional layers of learning modules are stacked vertically, forming deeper hierarchies.

In the 'Simplest' configuration, a single sensor (labeled 'touch or lidar e.g.') connects to one learning module. The 'Multi-modal' setup includes two parallel sensor modules—'lidar' and 'vision'—each feeding into its own learning module, with a voting mechanism above them, enhancing robustness through complementary sensors. The 'Wider' configuration expands this to four touch and four vision sensors, each paired with a learning module, enabling faster inference and increased dexterity and acuity due to parallel processing.

The 'Deeper' configuration shows a vertical stack of three learning modules connected to a single 'touch1' sensor, emphasizing hierarchical knowledge representation and deeper insights. An example is provided: humans have a four-level visual system, while mice have only one level, illustrating biological inspiration for depth in processing.

Finally, the 'Multi-modal, Deep and Wide' configuration combines all previous features: multiple sensors (four touch, four vision) feed into parallel learning modules arranged in two stacked layers, with the top layer performing voting across modules. This architecture enables deep insights across multiple domains by integrating modality diversity, parallelism, and hierarchical processing.

All connections are bidirectional, indicating feedback loops or recurrent processing. The green horizontal lines represent voting or aggregation layers, while blue and pink arrows denote data flow between sensor and learning modules. Text annotations accompany each configuration, highlighting benefits such as robustness, speed, hierarchical knowledge, and multi-domain insight. The overall design emphasizes scalability through a common messaging protocol, allowing flexible expansion in width (more sensors), depth (more layers), and modality (different sensor types).
