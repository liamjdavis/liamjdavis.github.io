---
title: "Online Learning for Neural Network Verification"
authors:
- admin
date: "2024-12-01"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Formal verification of neural networks is an essential component for deploying AI in safety-critical applications, but current approaches often struggle with scalability and efficiency. This work investigates how online learning techniques can dynamically improve branching in neural network verification frameworks like Marabou, Beta-Crown, and NeuralSAT. We are developing reinforcement learning methods that adaptively select branching variables during the verification process, potentially reducing verification time. Our preliminary explorations suggest that adaptive, learned heuristics may outperform static branching rules across various network architectures and verification queries. This research aims to address key bottlenecks in neural network verification, contributing to more scalable and reliable safety guarantees for deep learning systems.

tags:
- Artificial Intelligence
- AI Safety

featured: true

links:
url_code: 'https://github.com/NeuralNetworkVerification/Marabou'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption:
  focal_point: ""
  preview_only: false

---

This ongoing research explores the application of online learning techniques to improve neural network verification efficiency. By developing reinforcement learning methods that adapt branching strategies during verification, we aim to significantly reduce computational costs while maintaining formal guarantees. Our work extends the Marabou verification framework with learned decision heuristics that show promise for overcoming scalability challenges in neural network safety verification.