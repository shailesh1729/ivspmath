Vector Spaces
=======================



Vector Spaces
---------------------

.. topic:: Definition

    A **vector space** (or linear space) consists of the following:
    
    * a field :math:`F` of scalars;
    * a set :math:`V` of objects, called vectors;
    * a rule (or operation), called vector addition, which associates with
      each pair of vectors :math:`\alpha, \beta \in V` a vector 
      :math:`\alpha + \beta \in V`, called the sum of :math:`\alpha` and
      :math:`\beta`, in such a way that
      
      * addition is commutative, :math:`\alpha + \beta = \beta + \alpha`;
      * addition is associative, :math:`\alpha + (\beta + \gamma) = (\alpha + \beta) + \gamma`;
      * there is a unique vector :math:`0 \in V`, called the zero vector, such that
        :math:`\alpha + 0 = \alpha \quad \forall \alpha \in V`;
      * for each vector :math:`\alpha \in V`, there is a unique vector 
        :math:`-\alpha \in V` such that :math:`\alpha + (-\alpha) = 0`;
        
    * a rule (or operation), called scalar multiplication, which associates
      with each scalar :math:`c \in F` and vector :math:`\alpha \in V` a vector
      :math:`c\alpha \in V` in such a way that
      
      * :math:`1\alpha = \alpha \quad \forall \alpha \in V`;
      * :math:`(c_1 c_2)\alpha = c_1 (c_2 \alpha)`;
      * :math:`c (\alpha + \beta) = c\alpha + c\beta`;
      * :math:`(c_1 + c_2) \alpha = c_1 \alpha  + c_2 \alpha`.
      
      

.. rubric:: Example 1

The n-tuple space, :math:`F^n`
    
.. rubric:: Example 2

The space of :math:`m\times n` matrices :math:`F^{m \times n}`

.. rubric:: Example 3

The space of functions from a set :math:`S` to a field :math:`F`. 
    
    
.. rubric:: Example 4

The space of polynomial functions over field :math:`F`.

.. math::

    f(x) = c_0 + c_1 x + \dots + c_n x^n


.. rubric:: Example 5

Field of complex numbers :math:`C` as a vector space over the field :math:`R` of
real numbers.
    
.. rubric:: Remarks

* :math:`0\alpha = 0`.
* If :math:`c \neq 0` and :math:`c \alpha = 0`, then :math:`\alpha = 0`.
* :math:`(-1)\alpha = -\alpha`.


.. topic:: Definition

    A vector :math:`\beta \in V` is said to be a **linear combination** of
    the vectors :math:`\alpha_1, \dots, \alpha_n \in V` provided there exist
    scalars :math:`c_1, \dots c_n \in F` such that
    
    .. math::
    
        \beta &= c_1 \alpha_1 + \dots + c_n \alpha_n\\
              &= \sum_{i=1}^{n}c_i \alpha_i
        

Subspaces
-----------------------------

.. topic:: Definition

    Let :math:`V` be a vector space over the field :math:`F`. A **subspace**
    of :math:`V` is a subset :math:`W \subset V` which is itself a vector space
    over :math:`F` with the operations of vector addition and scalar multiplication
    on :math:`V`.
        
.. topic:: Theorem 1

    A non-empty subset :math:`W` of :math:`V` is a subspace of :math:`V`
    if and only if for each pair of vectors :math:`\alpha, \beta` in
    :math:`W`,  and each scalar :math:`c` in :math:`F`, the vector
    :math:`c\alpha + \beta` is again in :math:`W`.


.. rubric:: Example 6

* If :math:`V` is a vector space, :math:`V` is a subspace of :math:`V`.
* The subset :math:`\{0\}` is a subspace of :math:`V` called the **zero
  subspace** of :math:`V`.
* In :math:`F^n`, the set of n-tuples :math:`(x_1, \dots, x_n)` with
  :math:`x_1 = 0` is a subspace of :math:`F^n`. The set of n-tuples with
  :math:`x_1 = 1 + x_2` is not a subspace.
* The space of polynomial functions over the field :math:`F` is a subspace
  of the space of all functions from :math:`F` into :math:`F`.
* An :math:`n \times n` (square) matrix :math:`A` over the field :math:`F` is
  symmetric if :math:`A_{i j} = A_{j i} \forall i,j`. The symmetric
  matrices form a subspace of the space of all :math:`n \times n` matrices
  over :math:`F`.
* An :math:`n \times n` matrix :math:`A` over the field :math:`C` of
  complex numbers is **Hermitian** if
  
  .. math::
  
    A_{j k} = \overline{A_{k j}} \quad \forall j,k.
    
 The set of Hermitian matrices is not a subspace of the space of all 
 :math:`n \times n` matrices over :math:`C`.


.. rubric:: Example 7

The solution space of a system of homogeneous linear equations. 

* Let :math:`A` be an :math:`m\times n` matrix over field :math:`F`.
* The set of all :math:`n \times 1` (column) matrices over :math:`F`
  such that :math:`AX = 0` is a subspace of of the space of all 
  :math:`n \times 1` matrices over :math:`F`.


.. topic:: Lemma

    If :math:`A` is an :math:`m \times n` matrix over :math:`F`
    and :math:`B,C` are :math:`n \times p` matrices over :math:`F`,
    then 
    
    .. math::
    
        A (dB + C) = d(AB) + AC \quad \forall d \in F.
        
.. topic:: Theorem 2
        
    Let :math:`V` be a vector space over the field :math:`F`.
    The intersection of any collection of subspaces of :math:`V`
    is a subspace of :math:`V`.


.. topic:: Definition

   Let :math:`S` be a set of vectors in a vector space :math:`V`. 
   The **subspace spanned** by :math:`S` is defined to be the intersection
   :math:`W` of all subspaces of :math:`V` which contain :math:`S`. When
   :math:`S` is a finite set of vectors, 
   :math:`S = \{\alpha_1, \dots, \alpha_n\}`, we shall simply call :math:`W`
   the **subspace spanned by the vectors** :math:`\alpha_1, \dots \alpha_n`.


.. topic:: Theorem 3

    The subspace spanned by a non-empty subset :math:`S` of a vector
    space :math:`V` is a set of all linear combinations of vectors in
    :math:`S`.


.. topic:: Definition

    If :math:`S_1, S_2, \dots, S_k` are subsets of a vector space
    :math:`V`, the set of all sums 
    
    .. math::
    
        \alpha_1 + \alpha_2 + \dots + \alpha_k
        
    of vectors :math:`\alpha_i \in S_i` is called the **sum** of the
    subsets :math:`S_1, S_2, \dots, S_k` and is denoted by
    
    .. math::
    
        S_1 + S_2 + \dots + S_k
        
    or by 
    
    .. math::
    
        \sum_{i=1}^{k} S_i
        
    If :math:`W_1, W_2, \dots, W_k` are subspaces of :math:`V`, then the
    sum

    .. math::
    
        W = W_1 + W_2 + \dots + W_k
        
    is easily seen to be a subspace of :math:`V` which contains each of
    the subspaces :math:`W_i`. :math:`W` is the subspace spanned by the
    union of :math:`W_1, W_2, \dots, W_k`.


.. rubric:: Example 10

Let :math:`A` be an :math:`m \times n` matrix over a field :math:`F`. The
**row vectors** of :math:`A` are the vectors in :math:`F^n` given by
:math:`\alpha_i = (A_{i1}, \dots , A_{in}), i = 1,\dots,m`. The subspace
of :math:`F^n` spanned by the row vectors of :math:`A` is called the **row
space** of :math:`A`. 


.. rubric:: Example 11

Let :math:`V` be the space of all polynomial functions over :math:`F`.
Let :math:`S` be the subset of :math:`V` consisting of the polynomial
functions :math:`f_0, f_1, f_2,\dots` defined by:

.. math::

    f_n(x) = x^n, \quad n = 0,1,2,\dots
    
Then :math:`V` is the subspace spanned by the set :math:`S`.

Bases and dimensions
------------------------------------

.. topic:: Definition

    Let :math:`V` be a vector space over :math:`F`. A subset
    :math:`S` of :math:`V` is said to be **linearly dependent**
    (or simply dependent) if there exist distinct vectors
    :math:`\alpha_1, \alpha_2, \dots, \alpha_n` in :math:`S`
    and scalars :math:`c_1, c_2, \dots, c_n` in :math:`F`, not
    all of which are 0, such that:
    
    .. math::
    
        c_1 \alpha_1 + c_2 \alpha_2 + \dots  + c_n \alpha_n = 0
        
    A set which is not linearly dependent is called **linearly
    independent**. If the set S contains only finitely many 
    vectors :math:`\alpha_1, \alpha_2, \dots, \alpha_n`, we
    sometimes say that :math:`\alpha_1, \alpha_2, \dots, \alpha_n`
    are dependent (or independent) instead of saying :math:`S` is
    dependent (or independent).

* Any set which contains a linearly dependent set is linearly 
  dependent. 

* Any subset of a linearly independent set is linearly independent.

* Any set which contains the 0 vector is linearly dependent. 

* A set :math:`S` of vectors is linearly independent if and only
  if each finite subset of :math:`S` is linearly independent, 
  i.e. if and only if for any distinct vectors 
  :math:`\alpha_1, \alpha_2, \dots, \alpha_n \in S`, 
  :math:`c_1 \alpha_1 + c_2 \alpha_2 + \dots + c_n \alpha_n = 0` 
  implies that each :math:`c_i = 0`.


.. topic:: Definition

    Let :math:`V` be a vector space. A **basis** for :math:`V`
    is a linearly independent set of vectors in :math:`V` which
    spans the space :math:`V`. The space :math:`V` is **finite
    -dimensional** if it has a finite basis.


.. rubric:: Example 13

Let :math:`F` be a field and in :math:`F^n` let :math:`S` be the
subset consisting of vectors :math:`\epsilon_1, \epsilon_2, \dots, \epsilon_n`
defined by:

.. math::

        \epsilon_1 &= (1,0,0,\dots, 0)\\
        \epsilon_2 &= (0,1,0,\dots, 0)\\
                   &\dots\\
        \epsilon_n &= (0,0,0,\dots, 1) 

Lets :math:`x_1, x_2, \dots, x_n` be scalars in :math:`F` and put

.. math::

    \alpha = x_1 \epsilon_1 + x_2 \epsilon_2 + \dots + x_n \epsilon_n
    
Then 

.. math::
    
    \alpha = (x_1, x_2, \dots, x_n)
    
This shows that :math:`\epsilon_1, \epsilon_2, \dots, \epsilon_n` span
:math:`F^n`. Since :math:`\alpha = 0` if and only if 
:math:`x_1 = x_2 = \dots = x_n = 0`, the vectors 
:math:`\epsilon_1, \epsilon_2, \dots, \epsilon_n` are linearly
independent. The set :math:`S = \{\epsilon_1, \epsilon_2, \dots, \epsilon_n\}`
is accordingly a basis for :math:`F^n`. We shall call particular basis 
the **standard basis** of :math:`F^n`.


.. rubric:: Example 14

* Let :math:`P` be an invertible :math:`n \times n` matrix with
  entries in the field :math:`F`. 
  
* Then :math:`P_1, \dots, P_n`,  the columns of :math:`P`, form a basis 
  for the space of column matrices, :math:`F^{n\times 1}`. 
  
* If :math:`X` is a column matrix, then 

.. math::

    PX= x_1P_1 + \dots + x_n P_n
    
* Since :math:`PX = 0` has only the trivial solution :math:`X = 0`,
  it follows that  :math:`\{P_1, \dots, P_n\}` is a linearly independent
  set. 

* Why does it span :math:`F^{n \times 1}` ? 

* Let :math:`Y` be any column matrix. 

* If :math:`X = P^{-1} Y`, then :math:`Y = PX`, i.e.

  .. math::

    Y = x_1 P_1 + \dots + x_n P_n.
    
* So :math:`\{P_1, \dots, P_n\}` is a basis for :math:`F^{n \times 1}`.


.. rubric:: Example 15

TBD 

.. rubric:: Example 16

*Polynomial functions infinite basis*

* Let :math:`F` be a subfield of complex numbers and let :math:`V`
  be the space of polynomial functions over :math:`F`.
  
  .. math::
  
    f(x) = c_0 + c_1 x + \dots + c_n x^n.
    
* Let :math:`f_k(x) = x^k, k = 0,1,2,\dots` 

* The infinite set :math:`\{f_0, f_1, \dots\}` is a basis for :math:`V`.

* The set spans :math:`V`, because the function :math:`f` above 
  can be expressed as:
  
  .. math::
    
    f = c_0 f_0 + c_1 f_1 + \dots + c_n f_n.

* The set  :math:`\{f_0, f_1, \dots\}` is independent if every finite
  subset of it is independent.

* Consider set :math:`\{f_0, f_1, \dots, f_n\}`.

* Suppose that:

  .. math::

    c_0f_0 + c_1f_1 + \dots + c_n f_n = 0
    
  i.e.
  
  .. math::
  
    c_0 + c_1 x + c_n x^n = 0 \quad \forall x \in F.
    
* It means: every :math:`x \in F` is a root of the polynomial
  :math:`f(x) = c_0 + c_1 x + c_n x^n`.  

* A polynomial of degree :math:`n` cannot have more than :math:`n`
  distinct roots.
  
* Hence :math:`c_0 = c_1 = \dots = c_n = 0`. 

* Hence the set :math:`\{f_0, f_1, \dots, f_n\}` is linearly independent.

Is the vector space :math:`V` infinite dimensional? 

* Assume that :math:`V` has a finite basis.
* Suppose polynomials :math:`\{g_1, \dots, g_r\}` form the basis.
* There will be a largest power of :math:`x` which appears in one of the
  :math:`g_i`. 
* If the power is :math:`k`, then clearly :math:`f_{k+1}(x) = x^{k+1}` 
  is not in the span of  :math:`\{g_1, \dots, g_r\}`.
  
* Hence :math:`V` is not finite dimensional.
 
  
.. topic:: Theorem 4

    Let :math:`V` be a vector space which is spanned by a finite set
    of vectors :math:`\beta_1, \beta_2, \dots \beta_m`. Then any 
    independent set of vectors in :math:`V` is finite and contains
    no more than :math:`m` elements.
    
.. topic:: Corollary 1

    If :math:`V` is a finite-dimensional vector space, then any
    two bases of :math:`V` have the same (finite) number of
    elements.

.. topic:: Definition
    
    The **dimension** of a finite-dimensional vector space :math:`V`
    is defined as the number of elements in a basis for 
    :math:`V`. This is denoted by :math:`\dim V`. 

.. topic:: Corollary 2

    Let :math:`V` be a finite-dimensional vector space and let 
    :math:`n = \dim V`. Then
    
    * any subset of :math:`V` which contains more than :math:`n` vectors is
      linearly dependent.
      
    * No subset of :math:`V` which contains less than  :math:`n` vectors 
      can span :math:`V`.
      

.. topic:: Lemma      
    
    Let :math:`S` be a linearly independent subset of a vector space :math:`V`.
    Suppose :math:`\beta` is a vector in :math:`V` which is not
    in the subspace spanned by :math:`S`. Then the set obtained by
    adjoining :math:`\beta` to :math:`S` is linearly independent.

.. rubric:: Example 17

TBD


.. topic:: Theorem 5

    If :math:`W` is a subspace of a finite-dimensional vector space :math:`V`,
    every linearly independent subset of :math:`W` is finite and is part
    of a (finite) basis for :math:`W`.


.. topic:: Corollary 1

    If :math:`W` is a proper subspace of a finite-dimensional vector
    space :math:`V`, then :math:`W` is finite dimensional and 
    :math:`\dim W < \dim V`.
    
    
.. topic:: Corollary 2

    In a finite dimensional vector space :math:`V` every non-empty
    linearly independent set of vectors is part of a basis.
    
    
.. topic:: Corollary 3

    Let :math:`A` be an :math:`n \times n` matrix over a field :math:`F`,
    and suppose the row vectors of :math:`A` form a linearly independent
    set of vectors in :math:`F^n`. Then :math:`A` is invertible.
    
.. topic:: Theorem 6

    If :math:`W_1` and :math:`W_2` are finite-dimensional subspaces of a 
    vector space :math:`V`, then :math:`W_1 + W_2` is finite-dimensional
    and 
    
    .. math::
    
        \dim W_1 + \dim W_2 = dim (W_1 \cap W_2) + dim (W_1 + W_2)
        


Coordinates
-------------------------------------

A basis :math:`\mathfrak{B}` in an n-dimensional space :math:`V` 
enables one to introduce coordinates in :math:`V` analogous to
the 'natural coordinates' :math:`x_i` of a vector 
:math:`\alpha = (x_1, \dots, x_n)` in the space :math:`F^n`.


.. topic:: Definition

    IF :math:`V` is a finite-dimensional vector space, an
    **ordered basis** for :math:`V` is a finite sequence
    of vectors which is linearly independent and spans
    :math:`V`.
    
* If :math:`\alpha_1, \dots, \alpha_n` is an ordered basis
  for :math:`V`, then the set :math:`\{\alpha_1, \dots, \alpha_n\}`
  is a basis for :math:`V`.

* Ordered basis is a set together with a specified ordering.

* We shall abuse the notation and say that: 

  .. math::

    \mathfrak{B} = \{\alpha_1, \dots, \alpha_n\}
    
  is an ordered basis for :math:`V`.

* Given :math:`\alpha \in V`, there is a unique n-tuple
  :math:`x = (x_1, x_2, \dots, x_n)` such that:

  .. math::
    
    \alpha = \sum_{i=1}^{n} x_i \alpha_i

* We shall call :math:`x_i` the **ith coordinate of** :math:`\alpha`
  **relative to the ordered basis** :math:`\mathfrak{B}`.
  
  
* If 

  .. math::
  
    \beta = \sum_{i=1}^{n} y_i \alpha_i
    
    
* then

    .. math::
    
      \alpha + \beta = \sum_{i=1}^{n} (x_i + y_i) \alpha_i
      
* The ith coordinate of :math:`(\alpha + \beta)` in the
  ordered basis is :math:`(x_i + y_i)`.
  
* Similarly ith coordinate of :math:`c\alpha` is :math:`c x_i`.

* Every n-tuple :math:`x = (x_1, x_2, \dots, x_n)` 
  in :math:`F^n` is the n-tuple of coordinates
  of some vector in :math:`V` namely the vector:
  
  .. math::
  
    \sum_{i=1}^{n} x_i \alpha_i
    
* Each ordered basis for :math:`V` determines a one-one
  correspondence 
  
  .. math::
  
    \alpha \mapsto (x_1, \dots, x_n)
    
    
  between the set of all vectors in :math:`V` and the set of all n-tuples
  in :math:`F^n`.
  
  
.. topic:: Definition

    Coordinate matrix of :math:`\alpha` relative to the ordered 
    basis :math:`\mathfrak{B}`:
    
    .. math::
    
        X = \left[\begin{array} {c} x_1\\ \vdots \\ x_n \end{array}\right]
        
        
    To indicate the dependence of this coordinate matrix on the basis,
    we shall use the symbol
    
    .. math::
    
        [\alpha]_{\mathfrak{B}}


.. topic:: Theorem 7

    Let :math:`V` be an n-dimensional vector space over the field
    :math:`F`, and let :math:`\mathfrak{B}`, and :math:`\mathfrak{B}'`
    be two ordered bases of :math:`V`. Then there is a unique, 
    necessarily invertible, :math:`n \times n` matrix :math:`P`
    with entries in :math:`F` such that
    
    * :math:`[\alpha]_{\mathfrak{B}} = P [\alpha]_{\mathfrak{B}'}`
    * :math:`[\alpha]_{\mathfrak{B}'} = P^{-1} [\alpha]_{\mathfrak{B}}`
    
    for every vector :math:`\alpha` in :math:`V`. The columns of
    :math:`P` are given by
    
    .. math::
    
        P_j = [\alpha'_j]_{\mathfrak{B}}

    where 
    
    .. math::
        
        \mathfrak{B} = \{ \alpha_1, \dots, \alpha_n \}
        
        \mathfrak{B}' = \{ \alpha'_1, \dots, \alpha'_n \}
        
    Thus :math:`P` represents the basis vectors in :math:`\mathfrak{B}'` 
    in terms of basis vectors in :math:`\mathfrak{B}`.



.. topic:: Theorem 8


    Suppose :math:`P` is an :math:`n \times n` invertible matrix
    over :math:`F`. Let :math:`V` be an n-dimensional vector
    space over :math:`F`, and let :math:`\mathfrak{B}` be an
    ordered basis of :math:`V`. Then there is a unique ordered
    basis :math:`\mathfrak{B}'` of :math:`V` such that 
    
    * :math:`[\alpha]_{\mathfrak{B}} = P [\alpha]_{\mathfrak{B}'}`
    * :math:`[\alpha]_{\mathfrak{B}'} = P^{-1} [\alpha]_{\mathfrak{B}}`

    
    for every vector :math:`\alpha` in :math:`V`.
    
.. rubric:: Example 18

Let :math:`F` be a field and let

.. math::

        \alpha = (x_1, x_2, \dots, x_n)
        
be a vector in :math:`F^n`. If :math:`\mathfrak{B}` is the standard
ordered basis of :math:`F^n`, 

.. math::

    \mathfrak{B} = {\epsilon_1, \epsilon_2, \dots,\epsilon_n}
    
the coordinate matrix of the vector :math:`\alpha` in the basis :math:`\mathfrak{B}`
is given by :

.. math::

        [\alpha]_{\mathfrak{B}} = \left[ \begin{array}{c} x_1\\x_2\\\vdots\\x_n \end{array} \right]
        
        
.. rubric: Example 19

Let :math:`R` be the field of real numbers and let :math:`\theta` be
a fixed real number. The matrix

.. math::

    P = \left[ \begin{array}{rr}\cos\theta & -\sin\theta \\
    \sin\theta & \cos\theta \end{array} \right]
    
is invertible with inverse:

.. math::

    P^{-1} = \left[ \begin{array}{rr}\cos\theta & \sin\theta \\
    -\sin\theta & \cos\theta \end{array} \right]
    
Thus for each :math:`\theta`, the set consisting of vectors 
:math:`(\cos\theta, \sin\theta), (-\sin\theta,\cos\theta)` is a
basis for :math:`R^2`; intuitively the basis may be described
as the one obtained by rotating the standard basis through the
angle :math:`\theta`.

If :math:`\alpha` is the vector :math:`(x_1, x_2)` then,

.. math::

    [\alpha]_{\mathfrak{B}'} = P^{-1} [\alpha]_{\mathfrak{B}}
    = \left[ \begin{array}{rr}\cos\theta & \sin\theta \\
    -\sin\theta & \cos\theta \end{array} \right] 
    \left[\begin{array}{c}x_1 \\ x_2 \end{array} \right]

or

.. math::

    x'_1 &= x_1 \cos\theta + x_2 \sin\theta\\
    x'_2 &= -x_1 \sin\theta + x_2 \cos\theta.


Summary of row-equivalence
------------------------------------------

* If :math:`A` is an :math:`m \times n` matrix over the field :math:`F`
  the row vectors of :math:`A` are the vectors 
  :math:`\alpha_1, \dots, \alpha_n` in :math:`F^n` defined by:

  .. math::

    \alpha_i = (A_{i 1}, \dots, A_{i n})
    
* The row space of :math:`A` is the subspace of :math:`F^n` spanned
  by these vectors. 

.. topic:: Definition

    The **row rank** of :math:`A` is the dimension of the row space
    of :math:`A`.
    
* If :math:`P` is a :math:`k \times m` matrix over :math:`F`, then
  the product :math:`B = PA` is a :math:`k \times n` matrix whose
  row vectors :math:`\beta_1, \dots, \beta_n` are linear combinations

  .. math::

    \beta_i = P_{i 1} \alpha_1 + \dots + P_{i m} \alpha_m
    
of the row vectors of :math:`A`. 

* Visualizing as a matrix multiplication:

  .. math::
  
    \begin{bmatrix} \beta_1 \\ \vdots \\ \beta_k\end{bmatrix}
    = \begin{bmatrix} 
      P_{1 1} & \ldots & P_{1 m} \\
      \vdots & \ddots & \vdots \\
      P_{k 1} & \ldots & P_{k m}
      \end{bmatrix}
     \begin{bmatrix} \alpha_1 \\ \vdots \\ \alpha_m \end{bmatrix}

* The row space of :math:`B` is a subspace of row space of :math:`A`.
* If :math:`P` is an :math:`m \times m` invertible matrix, then
  :math:`B` is row-equivalent to :math:`A`.
  
  * :math:`A = P^{-1} B`
  * Thus row-space of :math:`A` is also a subspace of row space of :math:`B`.
  
  
.. topic:: Theorem 9

    Row-equivalent matrices have the same row space.
    
.. topic:: Theorem 10

    Let :math:`R` be a non-zero row-reduced echelon matrix of :math:`A`. Then
    the non-zero row vectors of :math:`R` form a basis for the 
    row space of :math:`A`.


.. topic:: Theorem 11

    Let :math:`m` and :math:`n` be positive integers and
    let :math:`F` be a field. Suppose :math:`W` is  a 
    subspace of :math:`F^n` and :math:`\dim W \leq m`.
    Then there is precisely one :math:`m \times n` row
    -reduced echelon matrix over :math:`F` which has
    :math:`W` as its row space.

Long proof here.
    
.. topic:: Corollary

    Each :math:`m \times n` matrix :math:`A` is row-equivalent to 
    one and only one row-reduced echelon matrix. 
    
    
.. topic:: Corollary

    Let :math:`A` and :math:`B` be :math:`m \times n` matrices
    over the field :math:`F`. Then :math:`A` and :math:`B` are
    row equivalent if and only if they have the same row space.
    
If :math:`A` and :math:`B` are :math:`m \times n` matrices over
the field :math:`F`, the following statements are equivalent.

* :math:`A` and :math:`B` are row-equivalent.
* :math:`A` and :math:`B` have same row space.
* :math:`B = PA`, where :math:`P` is an invertible :math:`m \times m` matrix.


Computations concerning subspaces
---------------------------------------------------

Suppose we are given :math:`m` vectors 
:math:`\alpha_1,\dots,\alpha_m` in :math:`F^n`. We consider
the following questions

* How does one determine if the vectors :math:`\alpha_1,\dots,\alpha_m`
  are linearly independent?
* How does one find the dimension of the subspace :math:`W` spanned
  by these vectors?
* Given :math:`\beta \in F^n`, how does one determine whether 
  :math:`\beta` is a linear combination of :math:`\alpha_1,\dots,\alpha_m`,
  i.e., whether :math:`\beta \in W`?
* How can one give an explicit description of the subspace :math:`W`?

  