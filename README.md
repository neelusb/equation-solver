# equation-solver

A script that solves systems of equations with any number of variables.

## How it works

The coefficients of the variables are represented using a matrix A. The variables are put into a vector **x**. The constants are put into a vector **v**.

This can be shown as A **b** = **v**.

Multiplying each side by the inverse of A results in:

A<sup>-1</sup> A **x** = A<sup>-1</sup> **v**

**x** = A<sup>-1</sup> **v**

A<sup>-1</sup> is then found by diving the adjugate of A by the determinant of A. The adjugate is found by transposing the cofactor matrix of A, and the determinant is found recursively by using minors.
