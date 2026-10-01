# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LeARN: Learnable and Adaptive Representations for Nonlinear Dynamics in System Identification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12036

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-branch neural network architecture designed for learning a basis function library and a feature selection matrix, which are jointly trained using Model-Agnostic Meta-Learning (MAML). The global layout is horizontal and modular, with two parallel processing streams converging into a single MAML training block on the right. Each stream begins with an input labeled 'State and Control Inputs', represented as a cloud-shaped node with diagonal green stripes, from which a vector X is fed into both branches via thick dark blue arrows.

In the top branch, X is processed by a small neural network denoted by ψ, depicted as a purple multi-layered graph with five nodes: three in the first layer, one in the second, and one in the third. This network outputs two basis functions, m₁ and m₂, which are grouped under a curly brace and combined into a matrix Θ(X;ψ) = [m₁(X)  m₂(X)]. The matrix is shown as a rectangular bracketed array with vertical dividers separating the two output vectors, and the entire structure is labeled Θ(X;ψ) below it.

In the bottom branch, the same input X is processed by a larger, deeper neural network denoted by φ, shown as a gray multi-layered graph with multiple nodes per layer (three in the first, four in the second, four in the third, and one in the fourth). The outputs of this network are n coefficient vectors, e₁ through eₙ, each associated with a state feature, and are grouped under a large curly brace. These are collected into a column vector ε(X;φ) = [e₁(X); e₂(X); ...; eₙ(X)], displayed as a tall rectangular bracketed array with a vertical ellipsis between entries, and labeled ε(X;φ) below.

Both outputs, Θ(X;ψ) and ε(X;φ), are directed via thick dark blue arrows to a rounded rectangle on the right labeled 'MAML Training', which has a light blue diagonal striped fill. The MAML block receives inputs from both branches, indicating that the parameters ψ and φ of the two networks are optimized together during meta-training. The figure thus represents a framework where a basis function library and a feature selection matrix are co-learned from state-control inputs using a meta-learning approach.
