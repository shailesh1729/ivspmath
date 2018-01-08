Compactness
====================


* Most important topological property
* If we don't understand compactness, we don't understand topology
* Compactness is topological generalization of finiteness

Compactness
---------------------

.. index:: compact; topology

.. topic:: Definition

    Let :math:`A` be a subset of a topological space :math:`(X, \mathcal{T})`.
    Then :math:`A` is said to be **compact** if for every set :math:`I`
    and every family of open sets, 
    :math:`\{O_i, i \in I | A \subseteq \cup_{i \in I}O_i\}`
    there exists a finite subfamily :math:`\{O_{i_1},O_{i_2},\dots, O_{i_n}\}` such
    that :math:`A \subseteq O_{i_1} \cup O_{i_2} \cup \dots \cup O_{i_n}`.
    
.. rubric:: Example
    
* If :math:`(X, \mathcal{T}) = \mathbb{R}` and :math:`A = (0, \infty)` then :math:`A`
  is not compact.
  
* Let :math:`(X, \mathcal{T})` be a topological space and :math:`A  = \{x_1, x_2, \dots, x_n\}`
  be any finite subset of :math:`(X, \mathcal{T})`. Then :math:`A` is compact.


.. topic:: Remark

    Every finite set in a topological space is compact.
    "Compactness" is a generalization of "finiteness".

.. rubric:: Example

* A subset :math:`A` of a discrete space :math:`(X, \mathcal{T})` is compact
  if and only if it is finite.


Cover
''''''''''''''''  

.. index:: open covering
.. index:: finite subcovering

.. topic:: Definitions

    Let :math:`I` be a set and :math:`O_i, i \in I` a family of open sets
    in a topological space :math:`(X, \mathcal{T})`. Let :math:`A` be a
    subset of :math:`(X, \mathcal{T})`. Then :math:`O_i, i \in I` is said
    to be an **open covering** of :math:`A` if :math:`A \subseteq \cup_{i \in I} O_i`.
    A finite subfamily, :math:`O_{i_1}, O_{i_2}, \dots, O_{i_n}` of :math:`O_i, i \in I`
    is said to be a **finite subcovering** (of :math:`A`) if
    :math:`A \subseteq O_{i_1} \cup O_{i_2} \cup \dots \cup O_{i_n}`.
    
    
Now we can rephrase compactness

.. topic:: Definition

    A subset :math:`A` of a topological space :math:`(X, \mathcal{T})` is said
    to be **compact** if every open covering of :math:`A` has a finite subcovering.
    If the compact subset :math:`A` equals :math:`X`, then :math:`(X, \mathcal{T})` is
    said to be a **compact space**.
    
    
.. topic:: Proposition

    The closed interval :math:`[0,1]` is compact.
    
Heine-Borel Theorem
-----------------------

.. topic:: Proposition

    Let :math:`f: (X,\mathcal{T}) \to (Y,\mathcal{T}_1)` be a continuous surjective
    map. If :math:`(X,\mathcal{T})` is compact then :math:`(Y,\mathcal{T}_1)` is compact.
    
    
.. topic:: Corollary

    Let :math:`(X,\mathcal{T})` and :math:`(Y,\mathcal{T}_1)` be homeomorphic
    topological spaces.  If :math:`(X,\mathcal{T})` is compact then 
    :math:`(Y,\mathcal{T}_1)` is compact.
    
    
.. topic:: Corollary

    For :math:`a,b \in \mathbb{R}, a<b`, :math:`[a,b]` is compact while 
    :math:`(a,b)` is not compact.
    
* :math:`[a,b]` is homeomorphic to :math:`[0,1]` (a compact spacce).
* :math:`(a,b)` is homeomorphic to :math:`(0,\infty)` (a non-compact space).

.. topic:: Proposition

    Every closed subset of a compact space is compact.
    
    
.. topic:: Proposition

    A compact subset of a Hausdorff topological space is closed.
    
    
.. topic::  Corollary

    A compact subset of a metrizable space is closed.
    
* :math:`(a,b]` and :math:`[a,b)` are not compact since they are not closed.

.. topic:: Proposition

    A compact subset of :math:`\mathbb{R}` is bounded.
    
    
.. topic:: Theorem (Heine-Borel Theorem)

    Every closed bounded subset of :math:`\mathbb{R}` is compact.
    
    
* If :math:`A` is a closed and bounded subset of :math:`\mathbb{R}` then
  :math:`A \subseteq [a,b]` for some :math:`a,b\in \mathbb{R}`.
* :math:`[a,b]` is compact and :math:`A` is a closed subset of a compact set, hence compact.


.. topic:: Proposition (Converse of Heine-Borel Theorem)

    Every compact subset of :math:`\mathbb{R}` is closed and bounded.
    
Metric spaces
''''''''''''''''''''''''''''
    
.. index:: bounded
    
.. topic:: Definition
    
    A subset :math:`A` of a metric space :math:`(X,d)` is said to be
    **bounded** if there exists a real number :math:`r` such that
    :math:`d(a_1, a_2) \leq r  \forall a_1, a_2 \in A`.
    
    
.. topic:: Proposition

    Let :math:`A` be a compact subset of a metric space :math:`(X,d)`. 
    Then :math:`A` is closed and bounded. 
    
    
.. topic:: Theorem (Generalized Heine-Borel theorem)

    A subset of :math:`\mathbb{R}^n` is compact if and only if it is
    closed and bounded.
    
    
.. topic:: Proposition

    Let :math:`(X,\mathcal{T})` be a compact space and :math:`f` a
    continuous mapping from :math:`(X,\mathcal{T})` into :math:`\mathbb{R}`.
    Then the set :math:`f(X)` has a greatest element and
    a least element.
    
    
.. topic:: Proposition

    Let :math:`a, b \in \mathbb{R}` and :math:`f` a continuous function
    from :math:`[a,b]` into :math:`\mathbb{R}`.  Then :math:`f([a,b]) =[c,d]`
    for some :math:`c, d \in \mathbb{R}`.
    