---
title: "Evaluating SAT and SMT Solvers on Large-Scale Sudoku Puzzles"
authors:
- admin
date: "2025-01-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-13T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Modern SMT solvers have revolutionized the approach to constraint satisfaction problems by integrating advanced theory reasoning and encoding techniques. In this work, we evaluate the performance of modern SMT solvers in Z3, CVC5 and DPLL(T) against a standard SAT solver in DPLL. By benchmarking these solvers on novel, diverse 25x25 Sudoku puzzles of various difficulty levels created by our improved Sudoku generator, we examine the impact of advanced theory reasoning and encoding techniques. Our findings demonstrate that modern SMT solvers significantly outperform classical SAT solvers. This work highlights the evolution of logical solvers and exemplifies the utility of SMT solvers in addressing large-scale constraint satisfaction problems.

tags:
- Formal Methods
- Artificial Intelligence
- Satisfiability

featured: true

links:
- name: Package
  url: http://pypi.org/project/sudoku-smt-solvers
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/liamjdavis/Sudoku-SMT-Solvers'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption:
  focal_point: ""
  preview_only: false

---

We benchmark traditional SAT Solvers and modern SMT Solvers against each other with 25x25 Sudoku, deriving insights on the evolution of satisfiability.
