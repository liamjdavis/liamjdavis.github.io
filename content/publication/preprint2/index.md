---
title: "Lookahead Branching for Neural Network Verification"
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
publication: "Under Review at NeurIPS 2025"
publication_short: ""

abstract: In this paper, we investigate the effect of lookahead branching strategy in neural network verification. We present a general recipe for integrating lookahead into any branch- and-bound search framework, and show that the current state-of-the-art heuristic, FSB, can be viewed as a specific case of lookahead. We also describe how, in addition to guiding branching, lookahead can generate additional lemmas that accelerate verification. We instantiate the method in two representative branch-and-bound-based verifiers (Marabou and α-β-CROWN), and demonstrate consistent reductions in overall verification time across both systems.

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

We present a general lookahead branching method for branch-and-bound in neural network verification, and demonstrate that spending more time at key points in branch-and-bound evaluating branching decisions leads to more efficient verification.