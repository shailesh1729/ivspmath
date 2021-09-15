Special Matrix Forms
===========================


* For a matrix :math:`A`, the diagonal elements are the elements :math:`A_{ij}` where :math:`i=j`.
* The off-diagonal elements are elements :math:`A_{ij}` such that :math:`i \neq j`.
* A **diagonal** is a list of entries :math:`A_{ij}` such that :math:`i - j = k` is a fixed integer.
* The **main diagonal** or **principal diagonal** or **primary diagonal** or **leading diagonal** is the list of 
  entries :math:`A_{ij}` where :math:`i = j`.

Consider the matrix:

.. math::

    A &= \begin{bmatrix}
    1 & 3 & 2\\
    4 & 1 & 3\\
    2 & 5 & 2
    \end{bmatrix}\\


* Its main diagonal is :math:`[1, 1, 2]`.
* The diagonal for :math:`k=1` is :math:`[4, 5]`.
* The diagonal for  :math:`k=-1` is :math:`[3,3]`.


.. topic:: Definition

    A **diagonal matrix** is a matrix whose off-diagonal elements are zero.



.. topic:: Definition

    A **banded matrix** or a **band matrix** is a sparse matrix whose non-zero entries are confined to a diagonal band
    consisting of the main diagonal and zero or more diagonals on either side. 


.. topic:: Definition

    A **bidiagonal matrix** is a banded matrix with non-zero entries along the main diagonal and either the diagonal 
    above the main diagonal or the diagonal below the main diagonal (but not both). There are exactly two non-zero
    diagonals.

.. topic:: Definition

    An **upper bidiagonal matrix** is a bidiagonal matrix which has non-zero entries in the diagonal above the
    main diagonal.


.. topic:: Definition

    A **lower bidiagonal matrix** is a bidiagonal matrix which has non-zero entries in the diagonal below the
    main diagonal.
