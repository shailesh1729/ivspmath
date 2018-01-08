Limit Points
==========================

* On real line, we usually take advantage of the notion of "closeness" in the
  form of distance to compute limits of sequences. 
* In a general topological space we don't have a "distance function".
* We define the notion of limit point without resorting to distances.
* We will also introduce the notion of connectedness.
* In :math:`\mathbb{R}`, while the sets :math:`[0,1]\cup[2,3]` and
  :math:`[4,6]` both have length 2, but they are different in the 
  sense of connectedness.
  
  
Limit Points and Closure
---------------------------------

* If :math:`(X, \mathcal{T})` is a topological space then it is
  usual to refer to the elements of the set :math:`X` as **points**.
  
.. index:: limit point
.. index:: accumulation point
.. index:: cluster point

.. topic:: Definition

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    A point :math:`x \in X` is said to be a **limit point** (or **accumulation point**
    or **cluster point**) of A if every open set, :math:`U` containing
    :math:`x` contains a point of :math:`A` different from :math:`x`.
    
.. rubric:: Example

* :math:`X = \{a,b,c,d,e\}`
* :math:`\mathcal{T} = \{X, \phi, \{a\},\{c,d\},\{a,c,d\}, \{b,c,d,e\}\}`
* :math:`A = \{a,b,c\}`
* Note that :math:`A` is neither an open set nor a closed set.
* :math:`b, d, e` are limit points of :math:`A`.
* :math:`a,c` are not limit points of :math:`A`.
* The limit point need not belong to :math:`A`. :math:`d,e \notin A`.
* Every point in :math:`A`, need not be a limit point. :math:`a,c\in A` but
  they are not limit points.
  
.. rubric:: Example

* Let :math:`(X, \mathcal{T})` be a discrete space and 
  :math:`A \subseteq X`.
* :math:`A` has no limit points since for each :math:`x \in X`, we have
  the singleton set :math:`\{x\} \in \mathcal{T}` containing no point
  of :math:`A` different from :math:`x`.

.. rubric:: Example

* Consider the subset :math:`A = [a,b) \subseteq \mathbb{R}`.
* Every element in :math:`[a,b)` is a limit point of :math:`A`.
* The point :math:`b` is also a limit point of :math:`A`.
  
.. rubric:: Example

* A singleton set has no limit points.
  
How do we test whether a set is closed?

.. topic:: Proposition

    Let :math:`A` be a subset of a topological space :math:`(X,\mathcal{T})`.
    Then :math:`A` is closed in :math:`(X,\mathcal{T})` if and only if
    :math:`A` contains all of its limit points.
    
    
.. rubric:: Example

* The set :math:`[a,b)` is not closed in :math:`\mathbb{R}`, since
  :math:`b` is a limit point and :math:`b \notin [a,b)`.
  
* The set :math:`[a,b]` is closed in :math:`\mathbb{R}`, since
  all limit points belong to the set itself.

* The set :math:`(a,b)` is not closed in :math:`\mathbb{R}`, since
  :math:`a` is a limit point and :math:`a \notin (a,b)`.
  
  
* :math:`[a,\infty)` is a closed subset of :math:`\mathbb{R}`.

.. topic:: Proposition

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})` and
    :math:`A'` the set of all limit points of :math:`A`. Then 
    :math:`A \cup A'` is a closed set.
    
    
.. topic:: Definition

    Let  :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    Then the set :math:`A \cup A'` consisting of :math:`A` and all its limit points
    is called the **closure** of :math:`A` and is denoted by :math:`\overline{A}`.
    
    
.. rubric:: Example

* :math:`X = \{a,b,c,d,e\}`
* :math:`\mathcal{T} = \{X,\phi, \{a\}, \{c,d\}, \{a,c,d\} , \{b,c,d,e\} \}`
* The only limit point of :math:`\{b\}` is :math:`e`
* :math:`\overline{\{b\}} = \{b,e\}`.
* The limit points of :math:`\{a,c\}` are :math:`b,d,e`
* Thus :math:`\overline{\{a,c\}} = X`.

.. topic:: Remark

    Every closed set containing :math:`A` must also contain the
    set :math:`A'`. So :math:`A \cup A' = \overline{A}` is the
    smallest closed set containing :math:`A`. This implies
    that :math:`\overline{A}` is the intersection of all closed
    sets containing :math:`A`.
    
.. rubric:: Example

* :math:`\overline{\mathbb{Q}} = \mathbb{R}`.


.. topic:: Definition

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    Then :math:`A` is said to be **dense** in :math:`X` or **everywhere dense**
    in :math:`X` if :math:`\overline{A} = X`.

.. rubric:: Example

* Let :math:`(X, \mathcal{T})` be a discrete space. Then the only dense
  subset of :math:`X` is :math:`X` itself.
* Each subset is its own closure since every subset is both open and closed.


.. topic:: Proposition

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    Then :math:`A` is dense in :math:`X` if and only if every non-empty 
    open subset of :math:`X` intersects :math:`A` non-trivially (i.e.
    if :math:`U \in \mathcal{T}, U \neq \phi`, then :math:`A \cap U \neq \phi`)

Let :math:`S` and :math:`T` be non-empty subsets of a topological
space :math:`(X,\mathcal{T})` with :math:`S \subseteq T`.

* If :math:`p` is a limit point of the set :math:`S`, then :math:`p` is
  also a limit point of the set :math:`T`.
* Thus :math:`\overline{S} \subseteq \overline{T}`.
* If :math:`S` is dense in :math:`X`, then :math:`T` is dense in :math:`X` too.


Neighborhoods
-------------------------

.. index:: neighborhood

.. topic:: Definition

    Let :math:`(X, \mathcal{T})` be a topological space, :math:`N` a subset
    of :math:`X` and :math:`p` a point in :math:`N`. Then :math:`N` is said
    to be a **neighborhood** of the point :math:`p` if there exists an open
    set :math:`U` such that :math:`p \in U \subseteq N`.
    
.. rubric:: Example

* The closed interval :math:`[0,1]` in :math:`\mathbb{R}^2` is a neighborhood 
  of the point :math:`\frac{1}{2}` since :math:`\frac{1}{2} \in (\frac{1}{4}, \frac{3}{4}) 
  \subseteq [0,1]`.

* The interval :math:`(0,1]` in :math:`\mathbb{R}^2` is a neighborhood 
  of the point :math:`\frac{1}{4}` since :math:`\frac{1}{4} \in (0, \frac{1}{2}) 
  \subseteq (0,1]`. But :math:`(0,1]` is not a neighborhood of the point :math:`1`.
  
  
.. rubric:: Example
  
  
* If :math:`(X, \mathcal{T})` is a topological space and :math:`U \in \mathcal{T}`,
  then :math:`U` is a neighborhood of every point :math:`p \in U`.
* Every open interval :math:`(a,b)` is a neighborhood of every point it contains. 
* Let :math:`N` be a neighborhood of a point :math:`p`. Then If :math:`S` is
  any subset of :math:`X` such that :math:`N \subseteq S`, then :math:`S` is
  also a neighborhood of :math:`p`.
  
.. topic:: Proposition

    Let :math:`A` be a subset of a topological space :math:`(X,\mathcal{T})`. 
    A point :math:`x \in X` is a limit point of :math:`A` if and only if 
    every neighborhood of :math:`x` contains a point of :math:`A` different
    from :math:`x`.
    
    
.. topic:: Corollary

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    Then the set :math:`A` is closed if and only if for each :math:`x \in X\setminus A`,
    there is a neighborhood :math:`N` of :math:`x` such that :math:`N \subseteq X\setminus A`.
    
    
.. topic:: Corollary

    Let :math:`U` be a subset of a topological space :math:`(X,\mathcal{T})`. Then
    :math:`U \in \mathcal{T}` if and only if for each :math:`x \in U` there exists
    a neighborhood :math:`N` of :math:`x` such that :math:`N \subseteq U`.
    
.. topic:: Corollary

    Let :math:`U` be a subset of a topological space :math:`(X,\mathcal{T})`. Then
    :math:`U \in \mathcal{T}` if and only if for each :math:`x \in U` there exists
    a :math:`V \in \mathcal{T}` such that :math:`x \in V \subseteq U`.
    
    
* A set is open if and only if it contains an open set about each of its points.

.. index:: separable; topology

.. topic:: Definition

    A topological space :math:`(X,\mathcal{T})` is said to be **separable** if it
    has a dense subset which is countable.

.. rubric:: Example

* :math:`\mathbb{Q}` is countable and a dense subset of :math:`\mathbb{R}`. 
  Hence :math:`\mathbb{R}` is separable.

.. index:: interior;topology
  
.. topic:: Definition

    Let :math:`(X,\mathcal{T})` be a topological space and :math:`A` any
    subset of :math:`X`. The largest open set contained in :math:`A` is
    called the **interior** of :math:`A` and is denoted by :math:`\text{Int}(A)`.
    
    
* :math:`\text{Int}([0,1]) = (0,1)`
* :math:`\text{Int}((3,4)) = (3,4)`
* :math:`\text{Int}({5}) = \phi`
* If :math:`A` is open in :math:`(X,\mathcal{T})`, then :math:`Int(A) = A`


Connectedness
--------------------------

Let :math:`S` be any set of real numbers.

* If there is an element :math:`b \in S` such that :math:`x \leq b \forall x \in S`,
  then :math:`b` is called **the greatest element** of :math:`S`.
  
* If :math:`S` contains an element :math:`a` such that :math:`a \leq x \forall x \in S`,
  then :math:`a` is called **the least element** of :math:`S`.

* A set :math:`S` of real numbers is called **bounded above** if there exists a real
  number :math:`c` such that :math:`x \leq c \forall x \in S`, and :math:`c` is
  called an **upper bound** for :math:`S`.

* Similarly the terms **bounded below** and **lower bound** are defined.

* A set which is bounded above and bounded below is called **bounded**.

.. topic:: Least Upper Bound Axiom

    Let :math:`S` be a non-empty set of real numbers. If :math:`S` is bounded
    above, then it has a **least upper bound**.

* The least upper bound, a.k.a. the **supremum** of :math:`S`, denoted by :math:`\sup(S)`
  may or may not belong to :math:`S`.
* Any set of real numbers which is bounded below has a **greatest lower bound** which
  is also called the **infimum** and is denoted by :math:`\inf(S)`.


.. topic:: Lemma

    Let :math:`S` be a subset of :math:`\mathbb{R}` which is bounded above and
    let :math:`p` be the supremum of :math:`S`. If :math:`S` is a closed subset of
    :math:`\mathbb{R}`, then :math:`p \in S`.
    
    
.. topic:: Proposition

    Let :math:`T` be a clopen set of :math:`\mathbb{R}`. Then either :math:`T = \mathbb{R}`
    or :math:`T = \phi`.
    
.. index:: connected space
    
.. topic:: Definition

    Let :math:`(X, \mathcal{T})` be a topological space. Then it is said to be
    **connected** if the only clopen sets of :math:`X` are :math:`X` and :math:`\phi`.
    
    
.. topic:: Proposition

    The topological space :math:`\mathbb{R}` is connected.
    
.. rubric:: Example

* If :math:`(X, \mathcal{T})` is any discrete space with more than one element, then
  :math:`(X, \mathcal{T})` is not connected as each singleton set is clopen.
  
* If :math:`(X, \mathcal{T})` is an indiscrete space, then it is connected as the only
  clopen sets are :math:`X` and :math:`\phi`.
  
.. index:: disconnected space

.. topic:: Remark

    A topological space :math:`(X, \mathcal{T})` is not connected (that is **disconnected**)
    if and only if there are non-empty open sets :math:`A` and :math:`B` such that
    :math:`A \cap B = \phi` and :math:`A \cup B = X`.
    
* :math:`\mathbb{R}^2` and in general :math:`\mathbb{R}^n` are connected spaces.
