Topological Spaces
================================


Introduction
---------------------------

.. :: 1.1.1

.. index:: topological space

.. topic:: Definition

    Let :math:`X` be a  non-empty set. A set :math:`\mathcal{T}` of subsets of
    :math:`X` is said to be a **topology** on :math:`X` if:
    
    #. :math:`X` and the empty set, :math:`\phi`, belong to :math:`\mathcal{T}`,
    #. the union of any (finite or infinite) number of sets in :math:`\mathcal{T}` belongs
       to :math:`\mathcal{T}`, and
    #. the intersection of any two sets in :math:`\mathcal{T}` belongs to :math:`\mathcal{T}`.
    
    The pair :math:`(X, \mathcal{T})` is called a **topological space**.
    
.. sidebar:: Differences from a :math:`\sigma`-algebra

    :math:`\sigma`-algebra has
    
    * Countable unions
    * Countable intersections
    * Complements
    
    topology
    
    * Unions can be finite/countable/uncountable
    * Intersections are only finite
    * Complement of an open set is closed and doesn't belong to topology
      unless it is a clopen set.
    
    
    
.. rubric:: Example

* :math:`X = \{a,b,c,d,e,f\}` 
  and :math:`\mathcal{T} = \{X, \phi, \{a\}, \{c,d\}, \{a,c,d\}, \{b, c, d, e, f\}\}`.
  
.. index:: discrete space
.. index:: discrete topology
  
.. topic:: Definition

    Let :math:`X` be any non-empty set and let :math:`\mathcal{T}` be the collection
    of all subsets of :math:`X`. Then :math:`\mathcal{T}` is called the **discrete topology**
    on the set :math:`X`.  The topological space :math:`(X,\mathcal{T})` is called a 
    **discrete space**.


.. index:: indiscrete space
.. index:: indiscrete topology
  
.. topic:: Definition

    Let :math:`X` be any non-empty set and :math:`\mathcal{T} = \{X,\phi\}`. Then
    :math:`\mathcal{T}` is called **indiscrete topology** and :math:`(X, \mathcal{T})`
    is said to be an **indiscrete space**.


.. topic:: Proposition

    If :math:`(X, \mathcal{T})` is a topological space such that, for every 
    :math:`x \in X`,  the singleton set :math:`\{x\}` is in :math:`\mathcal{T}`,
    then :math:`\mathcal{T}` is the discrete topology.


.. topic:: Remark

    The intersection of any finite number of members of :math:`\mathcal{T}`
    is a member of :math:`\mathcal{T}`.
    
.. index:: initial segment topology
.. index:: final segment topology

.. topic:: Definition

    Let :math:`\mathbb{N}` be the set of all positive integers. 
    
    * :math:`\mathcal{T}_1` consists of :math:`\mathbb{N}, \phi`, and every
      set :math:`\{1,2,\dots,n\}` for :math:`n` any positive integer.
      This is called the **initial segment topology**.
      
    * :math:`\mathcal{T}_2` consists of :math:`\mathbb{N}, \phi`, and every
      set :math:`\{n,n+1,\dots\}` for :math:`n` any positive integer.
      This is called the **final segment topology**.

      
Open Sets, Closed Sets, Clopen Sets
-----------------------------------------------

.. index:: open set

.. topic:: Definition

    Let :math:`(X, \mathcal{T})` be any topological space. Then the members
    of :math:`\mathcal{T}` are said to be **open sets**.

.. topic:: Proposition

    If :math:`(X,\mathcal{T})` is any topological space, then
    
    #. :math:`X` and :math:`\phi` are open sets,
    #. the union of any (finite or infinite) number of open sets is an open set, and
    #. the intersection of any finite number of open sets is an open set.

The intersection of infinite number of open sets need not be open.

.. index:: closed set


.. topic:: Definition

    Let :math:`(X,\mathcal{T})` be a topological space. A subset :math:`S` of :math:`X`
    is said to be a **closed set** in :math:`(X,\mathcal{T})` if its compliment in :math:`X`,
    namely :math:`X\setminus S`, is open in :math:`(X,\mathcal{T})`.
    
    
.. topic:: Proposition

    If :math:`(X,\mathcal{T})` is any topological space, then
    
    #. :math:`\phi` and :math:`X` are closed sets,
    #. the intersection of any (finite or infinite) number of closed sets is a closed set
       and
    #. the union of any finite number of closed sets is a closed set.

.. rubric:: Example

* :math:`X = \{a,b,c,d,e,f\}` 
  and :math:`\mathcal{T} = \{X, \phi, \{a\}, \{c,d\}, \{a,c,d\}, \{b, c, d, e, f\}\}`.

* The closed sets are: :math:`\phi, X, \{b,c,d,e,f\}, \{a,b,e,f\}, \{b,e,f\}, \{a\}`
* :math:`\{a\}` is both open and closed.
* :math:`\{b,c\}` is neither open nor closed.
* :math:`\{c,d\}` is open but not closed.
* :math:`\{a,b,e,f\}` is closed but not open.


.. index:: clopen set

.. topic:: Definition

    A subset :math:`S` of a topological space :math:`(X,\mathcal{T})` is said
    to be **clopen** if it is both open and closed in :math:`(X,\mathcal{T})`.

* In every topological space :math:`(X,\mathcal{T})`, both :math:`X` and :math:`\phi`
  are always clopen.    
* In a discrete space all subsets of :math:`X` are clopen.
* In an indiscrete subspace the only clopen subsets   are :math:`X` and :math:`\phi`.


Finite-Closed Topology
--------------------------------

Sometimes it is more natural to describe the topology by saying which
sets are closed.

.. index:: finite closed topology

.. topic:: Definition

    Let :math:`X` be any non-empty set. A topology :math:`\mathcal{T}` on
    :math:`X` is called the **finite-closed topology** or the **cofinite topology**
    if the closed subsets of :math:`X` are :math:`X` and all 
    finite subsets of :math:`X`; i.e., the open sets are :math:`\phi` and
    all subsets of :math:`X` which have finite complements. 
    
.. rubric:: Example

* Let :math:`\mathcal{T}` be a finite-closed topology over :math:`\mathbb{N}`.
* :math:`\{1\}, \{5,7,6\}, \{2,4,6,8\}` are finite and hence closed.
* Their complements are open sets.
* Set of even positive integers is not a closed set (its infinite), hence
  its complement, the set of odd positive integers, is not an open set.
* While all finite sets are closed, not all infinite sets are open.
 

.. topic:: Remark

    Let :math:`\mathcal{T}` be the finite closed topology on a set :math:`X`. If
    :math:`X` has at least 3 distinct clopen subsets, then :math:`X` is
    a finite set.


Functions and topologies
-----------------------------------

.. topic:: Definitions

    Let :math:`f` be a function from a set :math:`X` into a set :math:`Y`.
    
    #. The function :math:`f` is said to be **one-one** or **injective**
       if :math:`f(x_1)=f(x_2) \implies x_1 = x_2, \forall x_1,x_2\in X`.
    #. The function :math:`f` is said to be **onto** or **surjective** if
       for each :math:`y \in Y \quad\exists x \in X | f(x) = y`
    #. The function :math:`f` is said to be **bijective** if it is both
       one-one and onto.
   
.. topic:: Definition

    Let :math:`f` be a function from a set :math:`X` into a set :math:`Y`.
    The function :math:`f` is said to **have an inverse** if there exists
    a function :math:`g` of :math:`Y` into :math:`X` such that 
    :math:`g(f(x))=x,\quad \forall x\in X` and 
    :math:`f(g(y)) = y, \quad\forall y \in Y`. The function :math:`g`
    is called the **inverse function** of :math:`f`.
    
.. topic:: Proposition

    Let :math:`f` be a function from a set :math:`X` into a set :math:`Y`.
    
    #. The function :math:`f` has an inverse if and only if :math:`f`
       is bijective.
    #. Let :math:`g_1` and :math:`g_2` be functions from :math:`Y` into
       :math:`X`. If :math:`g_1` and :math:`g_2` are both inverse functions
       of :math:`f`, then :math:`g_1=g_2`, that is 
       :math:`g_1(y)=g_2(y) \forall y \in Y`.
       
    #. Let :math:`g` be a function from :math:`Y` into :math:`X`. Then
       :math:`g` is an inverse function of :math:`f` if and only if
       :math:`f` is an inverse function of :math:`g`.

.. index:: inverse image

.. topic:: Definition

    Let :math:`f` be a function from a set :math:`X` into a set :math:`Y`.
    If :math:`S` is any subset of :math:`Y`, then the set 
    :math:`f^{-1}(S)` is defined by:
    
    .. math::
        
        f^{-1}(S) = \{x : x \in X \text{ and } f(x) \in S\}
    
    The subset :math:`f^{-1}(S)` of :math:`X` is said to be the
    **inverse image** of :math:`S`.
    
    
.. topic:: Remark

    Let :math:`(Y, \mathcal{T})` be a topological space and :math:`X` a non-empty set.
    Further, let :math:`f` be a function from :math:`X` into :math:`Y`. Put
    :math:`\mathcal{T}_1 = \{f^{-1}(S) : S \in \mathcal{T}\}`.  Then :math:`\mathcal{T}_1` is a 
    topology on :math:`X`.

    
:math:`T_0` and :math:`T_1` spaces
--------------------------------------------


.. index:: T_1 space
    
.. topic:: Definition

    A topological space :math:`(X, \mathcal{T})` is said to be a :math:`T_1`-space
    if every singleton set :math:`\{x\}` is closed in it.

.. topic:: Definition

    A topological space :math:`(X,\mathcal{T})` is said to be a :math:`T_0`-space
    if for each pair of distinct points :math:`a,b \in X`, either there exists
    an open set containing :math:`a` and not :math:`b` or there exists
    an open set containing :math:`b` and not :math:`a`.
    
* Every :math:`T_1`-space is a :math:`T_0` space.
    
.. rubric:: Sierpinski space

* Let :math:`X = \{0,1\}`
* :math:`\mathcal{T} = \{\phi, X, \{0\}\}` is a :math:`T_0` space.
* :math:`\mathcal{T} = \{\phi, X, \{1\}\}` is a :math:`T_0` space.
* Both of above are known as Sierpinski spaces.
* :math:`\mathcal{T} = \{\phi, X, \{0\}, \{1\}\}` is a :math:`T_0` space 
  as well as a :math:`T_1` space.


Countable-closed topology
---------------------------------------

.. index:: countable closed topology

.. topic:: Definition

    Let :math:`X` be any infinite set. The **countable closed topology** is
    defined to be the topology having as its closed sets :math:`X` and
    all countable subsets of :math:`X`.

Unions and intersections
----------------------------------

Let :math:`\mathcal{T}_1` and :math:`\mathcal{T}_2` be two topologies on :math:`X`.

* :math:`\mathcal{T}_3 = \mathcal{T}_1 \cup \mathcal{T}_2` need not be a topology on :math:`X`.
* :math:`\mathcal{T}_4 = \mathcal{T}_1 \cap \mathcal{T}_2` is a topology on :math:`X`.
* If :math:`(X, \mathcal{T}_1)` and :math:`(X, \mathcal{T}_2)` are :math:`T_1`-spaces
  then :math:`(X, \mathcal{T}_4)` is also a :math:`T_1` space.
* If :math:`(X, \mathcal{T}_1)` and :math:`(X, \mathcal{T}_2)` are :math:`T_0`-spaces
  then :math:`(X, \mathcal{T}_4)` need not be a :math:`T_0` space.
* Intersection of any finite number of topologies on :math:`X` is a 
  topology on :math:`X`.
* If for each :math:`i\in I` for some index set :math:`I`, each :math:`\mathcal{T}_i` 
  is a topology on the set :math:`X`, then :math:`\mathcal{T} = \cap_{i \in I} \mathcal{T}_i`
  is a topology on :math:`X`.
  