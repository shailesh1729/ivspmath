Continuous Mappings
=============================


* In most branches of pure mathematics we study what in category theory are called 
  "objects" and "arrows".
  
* In linear algebra the objects are vector spaces and the arrows are linear transformations.
* In group theory, the objects are groups and the arrows are homomorphisms.
* In set theory, the objects are sets and arrows are functions.
* In topology, the objects are topological spaces. The arrows are **continuous mappings**.


Continuous Mappings
------------------------------

.. rubric:: Motivation

A function :math:`f: \mathbb{R} \rightarrow \mathbb{R}` is called **continuous** if
for each :math:`a \in \mathbb{R}` and each positive real number :math:`\epsilon`, 
there exists a positive real number :math:`\delta` such that :math:`|x - a| < \delta`
implies :math:`|f(x) - f(a)| < \epsilon`.
 
We need to generalize this notion for arbitrary topological spaces without the notion
of absolute value or subtraction.


Restating: :math:`f: \mathbb{R} \rightarrow \mathbb{R}` is continuous if and
only if for each :math:`a \in \mathbb{R}` and each interval 
:math:`(f(a) - \epsilon, f(a) + \epsilon)` for :math:`\epsilon > 0`, there
exists :math:`\delta > 0` such that :math:`f(x) \in (f(a) - \epsilon, f(a) + \epsilon)`
for all :math:`x \in (a - \delta, a + \delta)`.


.. topic:: Lemma

    Let :math:`f` be a function mapping :math:`\mathbb{R}` into itself. Then
    :math:`f` is continuous if and only if for each :math:`a \in \mathbb{R}`
    and each open set :math:`U \ni f(a)`, there exists an open set :math:`V`
    containing :math:`a` such that :math:`f(V) \subseteq U`. 
    
Almost ready to generalize for topological spaces!
    
.. topic:: Lemma

    Let :math:`f` be a mapping from a topological space :math:`(X, \mathcal{T})`
    into a topological space :math:`(Y, \mathcal{T}')`. Then the following
    two conditions are equivalent:
    
    #. for each :math:`U \in \mathcal{T}', f^{-1}(U) \in \mathcal{T}`, 
    
    #. for each :math:`a \in X` and each :math:`U \in \mathcal{T}'` with
       :math:`f(a) \in U`, there exists a :math:`V \in \mathcal{T}` such that
       :math:`a \in V` and :math:`f(V) \subseteq U`.
   
:math:`f: \mathbb{R} \rightarrow \mathbb{R}` is continuous if and only if
for each open subset :math:`U` of :math:`\mathbb{R}`, :math:`f^{-1}(U)` is
an open set.

.. index:: continuous mapping; topology

.. topic:: Definition

    Let :math:`f` be a mapping from a topological space :math:`(X, \mathcal{T})`
    into a topological space :math:`(Y, \mathcal{T}')`. Then 
    :math:`f : (X, \mathcal{T}) \rightarrow (Y, \mathcal{T}')` is
    said to be a **continuous mapping** if for each :math:`U \in \mathcal{T}'`,
    :math:`f^{-1}(U) \in \mathcal{T}`.


.. rubric:: Example

* Let :math:`f: \mathbb{R} \rightarrow \mathbb{R}` be given by :math:`f(x) = c` 
  a constant.  Let :math:`U` be any open set in :math:`\mathbb{R}`. Clearly
  :math:`f^{-1}(U) = \mathbb{R} \text{ if } c \in U` and :math:`\phi \text{ if } c \notin U`.
  In both cases, :math:`f^{-1}(U)` is open, hence :math:`f` is a continuous mapping.
  

.. topic:: Proposition

    Let :math:`f` be a mapping of a topological space :math:`(X, \mathcal{T})` into
    a topological space :math:`(Y, \mathcal{T}')`. Then :math:`f` is continuous if
    and only if for each :math:`x \in X` and each :math:`U \in \mathcal{T}' | f(x) \in U`,
    there exists a :math:`V \in \mathcal{T}` such that :math:`x \in V` and 
    :math:`f(V) \subseteq U`.
    
Is continuity associative?
    
.. topic:: Proposition

    Let :math:`(X, \mathcal{T}_1)`, :math:`(Y, \mathcal{T}_2)` and 
    :math:`(Z, \mathcal{T}_3)` be topological spaces. If 
    :math:`f : (X, \mathcal{T}_1) \rightarrow (Y, \mathcal{T}_2)`
    and :math:`g : (Y, \mathcal{T}_2) \rightarrow (Z, \mathcal{T}_3)`
    are continuous mappings, then the composition function
    :math:`f \circ g : (X, \mathcal{T}_1)\rightarrow (Z, \mathcal{T}_3)`
    is continuous.
    
The continuity can be described in terms of closed sets also.

.. topic:: Proposition
    
    Let :math:`(X, \mathcal{T}_1)` and :math:`(Y, \mathcal{T}_2)`
    be topological spaces. Then 
    :math:`f : (X, \mathcal{T}_1) \rightarrow (Y, \mathcal{T}_2)`
    is continuous if and only if for every closed subset :math:`S` 
    of :math:`Y`, :math:`f^{-1}(S)` is a closed subset of :math:`X`.
    
Are continuous mappings and homeomorphisms related? 
    
.. topic:: Remark

    If :math:`f : (X, \mathcal{T}_1) \rightarrow (Y, \mathcal{T}_2)`
    is a homeomorphism then it is a continuous map. But every
    continous mapping doesn't need to be a homeomorphism.
    
Which mappings are homeomorphisms?
    
.. topic:: Proposition

    Let :math:`(X, \mathcal{T}_1)` and :math:`(Y, \mathcal{T}_2)`
    be topological spaces. Let :math:`f` be a function from
    :math:`X` into :math:`Y`. Then :math:`f` is a homeomorphism
    if and only if 
    
    #. :math:`f` is continuous
    #. :math:`f` is one-one and onto.
    #. :math:`f^{-1}` is continuous.
    
What about subspaces? If :math:`f` is continuous on :math:`X` is it
continuous on its subspaces too?
    
.. topic:: Proposition

    Let :math:`(X, \mathcal{T}_1)` and :math:`(Y, \mathcal{T}_2)`
    be topological spaces. And 
    :math:`f : (X, \mathcal{T}_1) \rightarrow (Y, \mathcal{T}_2)`
    be a continuous mapping.
    Let :math:`A` be a subset of :math:`X` and let :math:`\mathcal{T}_3`
    be the induced topology on :math:`A`. 
    Further, let :math:`g : (A, \mathcal{T}_3) \rightarrow (Y, \mathcal{T}_2)`
    be a restriction of :math:`f` to :math:`A`; that is, 
    :math:`g(x) = f(x) \quad \forall x \in A`. Then :math:`g` is continuous.
    
.. index:: finer topology
.. index:: coarser topology
    
.. topic:: Definition

    Let :math:`\mathcal{T}_1` and :math:`\mathcal{T}_2` be two topologies
    on :math:`X`. Then :math:`\mathcal{T}_1` is said to be a **finer topology**
    than :math:`\mathcal{T}_2` (and :math:`\mathcal{T}_2` is said
    to be a **coarser topology** than :math:`\mathcal{T}_1`) if 
    :math:`\mathcal{T}_1 \supseteq \mathcal{T}_2`.
    
Intermediate Value Theorem
------------------------------------------

Is continuity and connectivity related? 

.. topic:: Proposition

    Let :math:`(X, \mathcal{T}_1)` and :math:`(Y, \mathcal{T}_2)`
    be topological spaces and 
    :math:`f : (X, \mathcal{T}_1) \rightarrow (Y, \mathcal{T}_2)`
    be surjective and continuous.
    If :math:`(X, \mathcal{T}_1)` is connected then :math:`(Y, \mathcal{T}_2)`
    is connected.
    
    
* Any continuous image of a connected set is connected.
* If :math:`(X, \mathcal{T}_1)` is connected and :math:`(Y, \mathcal{T}_2)`
  is disconnected, then there exists no mapping which is onto and continuous.
  
* While there are infinite number of mappings from :math:`\mathbb{R}` onto
  :math:`\mathbb{Q}` or :math:`\mathbb{Z}`, none of them are continuous.

But the notion of connectivity is too broad. Can we do something better? 
  
.. index:: path connected

.. topic:: Definition

    A topological space :math:`(X, \mathcal{T})` is said to be
    **path connected** (or **pathwise connected**) 
    if for each pair of distinct points 
    :math:`a,b \in X` there exists a continuous mapping
    :math:`f:[0,1] \rightarrow (X, \mathcal{T})`, such that
    :math:`f(0) = a` and :math:`f(1) = b`. The mapping
    :math:`f`  is said to be a **path joining a to b**.
    
.. rubric:: Example

* Every interval is path connected.

* For each :math:`n \geq 1, \mathbb{R}^n` is path connected.

.. topic:: Proposition

    Every path connected space is connected.
    
* Not every connected space is path connected!

.. rubric:: Example

* Clearly :math:`\mathbb{R}^2 \setminus \{\langle 0, 0 \rangle \}` is path connected
  hence is connected. However, :math:`\mathbb{R} \setminus \{a\}` for any :math:`a \in \mathbb{R}`
  is disconnected. Hence :math:`\mathbb{R} \ncong \mathbb{R}^2`.
  
.. index:: weierstrass intermediate value theorem

.. topic:: Theorem

    **Weierstrass Intermediate Value Theorem** Let :math:`f: [a,b] \rightarrow \mathbb{R}`
    be continuous and let :math:`f(a) \neq f(b)`. Then for every number :math:`p` between
    :math:`f(a)` and :math:`f(b)` there is a point :math:`c \in [a,b]` such that
    :math:`f(c) = p`.


.. topic:: Corollary

    If :math:`f: [a,b] \rightarrow \mathbb{R}` is continuous and such that
    :math:`f(a) > 0` and :math:`f(b) < 0`, then there exists an :math:`x \in [a,b]`
    such that :math:`f(x) = 0`.
    
.. index:: fixed point theorem
    
.. topic:: Corollary

    **Fixed Point Theorem** Let :math:`f` be a continuous mapping of
    :math:`[0,1]` into :math:`[0,1]`.  Then there exists a :math:`z \in [0,1]`
    such that :math:`f(z) = z`. The point :math:`z` is called a **fixed point**.