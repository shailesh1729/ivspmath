Garden
====================

This page is a collection of a variety of matrices used in different examples 
and contexts and their associated results.


Square Matrices
----------------------------------


2x2 matrices
'''''''''''''''''''''''''''

.. rubric:: Simple examples

.. math::

    A &= \begin{bmatrix}
    3 & 1 \\ 5 & 2
    \end{bmatrix}\\
    det(A) &= 1\\
    A^{-1} &= \begin{bmatrix}2 & -1\\ -5 & 3 \end{bmatrix}

Next

.. math::

    A &= \begin{bmatrix}3&2\\4&0\end{bmatrix}\\
    det(A) &= -8\\
    A^{-1} &= \begin{bmatrix}0 & 1/4 \\ 1/2 & -3/8 \end{bmatrix}

3x3 matrices
'''''''''''''''''''''''''''''''''''''''

.. math::

    A &= \begin{bmatrix}
    1 & 3 & 2\\
    4 & 1 & 3\\
    2 & 5 & 2
    \end{bmatrix}\\
    minor(A) &= \begin{bmatrix}
    -13 & 2 & 18 \\
    -4 & -2 & -1 \\
    7 & -5 & -11
    \end{bmatrix}\\
    cof(A) &= \begin{bmatrix}
    -13 & -2 & 18 \\
    4 & -2 & 1 \\
    7 & 5 & -11
    \end{bmatrix}\\
    adj(A) &= \begin{bmatrix}
    -13 & 4 & 7 \\
    -2 & -2 & 5\\
    18 & 1 & -11
    \end{bmatrix}\\
    det(A) &= 17\\
    A^{-1} &= \begin{bmatrix}
    -13/17 & 4/17 & 7/17 \\
    -2/17 & -2/17 & 5/17\\
    18/17 & 1/17 & -11/17
    \end{bmatrix}

4x4 matrices
''''''''''''''''''''''''''''''''''''''''''''''''

.. math::

    S &= \begin{bmatrix}
    3 & 2 & 0 & 1\\
    4 & 0 & 1 & 2 \\
    3 & 0 & 2 & 1\\
    9 & 2 & 3 & 1
    \end{bmatrix}\\
    |S| &= 24
    
Lets write this as

.. math::

    S &= \begin{bmatrix} A & B \\ C & D \end{bmatrix}
    
Where

.. math::

    A &= \begin{bmatrix} 3 & 2 \\ 4 & 0 \end{bmatrix}\\
    B &= \begin{bmatrix} 0 & 1 \\ 1 & 2 \end{bmatrix}\\
    C &= \begin{bmatrix} 3 & 0 \\ 9 & 2 \end{bmatrix}\\
    D &= \begin{bmatrix} 2 & 1 \\ 3 & 1 \end{bmatrix}

    
We have:

.. math::

    |S| = |A| |D - CA^{-1}B| 
    
.. math::

    |A| &= -8\\
    A^{-1} &= \begin{bmatrix}0 & 1/4 \\ 1/2 & -3/8 \end{bmatrix}\\
    CA^{-1} &= \begin{bmatrix} 0 & 3/4 \\ 1 & 3/2 \end{bmatrix}\\
    CA^{-1}B &= \begin{bmatrix} 3/4 & 3/2 \\ 3/2& 4\end{bmatrix}\\
    D - CA^{-1}B &= \begin{bmatrix} 5/4 & -1/2 \\ 3/2& -3\end{bmatrix}\\
    |D - CA^{-1}B| &= -3\\
    |S| &= |A||D - CA^{-1}B|  = -8 \times -3 = 24 
    
    
.. rubric:: Inverse

.. math::

    \begin{bmatrix} A & B \\ C & D \end{bmatrix}
    \begin{bmatrix} E & F \\ G & H \end{bmatrix} = I
    
gives

.. math::

    E &= (A - BD^{-1}C)^{-1}\\
    G &= -D^{-1}CE\\
    H &= (D - CA^{-1}B)^{-1}\\
    F &= -A^{-1}BH
    
Algorithm:

#. :math:`P = D^{-1}C`
#. :math:`E = (A  - BP)^{-1}`
#. :math:`G = - P E`
#. :math:`Q = A^{-1}B`
#. :math:`H = (D - CQ)^{-1}`
#. :math:`F=-Q H`


Special 2x2 matrices
''''''''''''''''''''''''''''''''''''''''''''''''


Following are 2x2 matrices such that :math:`A^2  = A`.

.. math::

    \left[\begin{array}{cc}1 & 0 \\ 0 & 0\end{array}\right]
    
    \left[\begin{array}{cc}0 & 0 \\ 0 & 1\end{array}\right]
    
    \left[\begin{array}{cc}1 & 0 \\ 0 & 1\end{array}\right]
    
    \left[\begin{array}{cc}1 & 1 \\ 0 & 0\end{array}\right]
    
    \left[\begin{array}{cc}0 & 0 \\ 1 & 1\end{array}\right]
    
    \left[\begin{array}{cc}1 & 0 \\ 1 & 0\end{array}\right]
    
    \left[\begin{array}{cc}0 & 1 \\ 0 & 1\end{array}\right]
    

.. rubric:: Flip matrix

.. math::

    \left[\begin{array}{cc}0 & 1 \\ 1 & 0\end{array}\right]
    \left[\begin{array}{cc}0 & 1 \\ 1 & 0\end{array}\right]
    = 
    \left[\begin{array}{cc}1 & 0 \\ 0 & 1\end{array}\right]
    