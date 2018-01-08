Logic and Sets
===========================


Logic
--------------------

* Let :math:`A` and :math:`B` be statements.

.. index:: negation;logic

* The **negation** of :math:`A` is the statement (not :math:`A`).

.. index:: both;logic

* The **both** of :math:`A` and :math:`B` is the statement (:math:`A` and :math:`B`).


.. index:: either;logic

* The **either** of :math:`A` and :math:`B` is the statement (:math:`A` or :math:`B`).

* The statement (:math:`A` or :math:`B`) does not contradict (:math:`A` and :math:`B`).

* Every statement is is assumed to be either true or false.

* No statement can be both true and false.

* The statements ":math:`A` and :math:`B` or :math:`C`" and ":math:`A` or :math:`B` and :math:`C`" are
  ambiguous.
  
* We therefore write ":math:`A` and either :math:`B` or :math:`C`" and
  "either :math:`A` or both :math:`B` and :math:`C`".
  

Implication
''''''''''''''''''''''''''''''''

* Let :math:`A` and :math:`B` be statements.

.. index:: implication;logic

* The implication statement "if :math:`A` is satisfied, then :math:`B` is satisfied" 
  or, equivalently, ":math:`A` implies :math:`B`" is written as :math:`A \Rightarrow B`.

* :math:`A \Leftrightarrow B` is equivalent to 
  :math:`[(A \Rightarrow B) \text{ and } (A \Leftarrow B)]`
  
* :math:`A \Leftarrow B` means :math:`B \Rightarrow A`.  


Tautology
''''''''''''''''''''''''''


.. index:: tautology;logic

* A **tautology** is a statement which is true regardless of whether
  the component statements are true or false.
  
* E.g. the statement "(:math:`A` and :math:`B`) implies :math:`A`)" is a
  tautology.


Contradiction
''''''''''''''''''''''''''''

.. index:: contradiction;logic
  
* A **contradiction** is a statement that is false regardless of
  whether the component statements are true or false.


Implication contd.
'''''''''''''''''''''''''''  
  
* Suppose that :math:`A \Leftrightarrow B`. 

.. index:: if and only if;logic

* Then, :math:`A` is satisfied *if and only if* :math:`B` is satisfied.

.. index:: necessity; logic

* The implication :math:`A \Rightarrow B` (the "only if" part) 
  is **necessity**.
  
.. index:: sufficiency; logic

* :math:`B \Rightarrow A` (the "if" part) is **sufficiency**.

.. index:: converse; logic

* The **converse** statement of :math:`A \Rightarrow B` 
  is :math:`B \Rightarrow A`.

.. index:: contraposition; logic

* The statement :math:`A \Rightarrow B` is equivalent to its
  **contrapositive** statement :math:`(\text{not } B) \Rightarrow (\text{not } A)`.


Statements
''''''''''''''''''''

.. index:: theorem; logic

* A **theorem** is a significant statement.

.. index:: proposition; logic

* A **proposition** is a theorem of less significance.

.. index:: lemma; logic

* The primary role of a **lemma** is to support the proof of a theorem
  or proposition.

  
.. index:: corollary; logic

* A **corollary** is a consequence of a theorem or proposition.

.. index:: fact; logic

* A **fact** is either a theorem or a proposition or a lemma or a corollary.

* Theorems, propositions, lemmas, corollaries, and facts are provably 
  true statements.

* Suppose that :math:`A' \Rightarrow A \Rightarrow B \Rightarrow B'`. 

* Then, :math:`A' \Rightarrow B'` is a corollary of :math:`A \Rightarrow B`.

.. index:: strengthening; logic

* Let :math:`A`, :math:`B`, and :math:`C` be statements, and assume
  that :math:`A \Rightarrow B`.

* Then, :math:`A \Rightarrow B` is a **strengthening** of the statement
  :math:`(A \text{ and } C) \Rightarrow B`.

.. index:: redundancy; logic

* If in addition :math:`A \Rightarrow C`, then the statement 
  :math:`(A \text{ and } C) \Rightarrow B` has a **redundant** assumption.
  

Sets
-------------------------

* A **set** is a collection of elements.

.. index:: element;set

* Let :math:`\mathcal{X} \triangleq = \{x,y,z\}` be a **set**. Then

  .. math::
  
    x \in \mathcal{X}
    
  means that :math:`x` is an element of :math:`\mathcal{X}`.

* If :math:`w` is not an element of :math:`\mathcal{X}`, then we write:

  .. math::

    w \notin \mathcal{X}

.. index:: empty set

* The set with no elements, denoted by :math:`\phi`, is the **empty set**.  

.. index:: nonempty; set

* If :math:`\mathcal{X} \neq \phi`, then :math:`\mathcal{X}` is **nonempty**.

Cardinality
''''''''''''''''''''''''

* A set cannot have repeated elements. e.g. :math:`\{x,x\} = \{x\}`.

.. index:: multiset

* A **multiset** is a collection of elements that allows for repetition.

* The multiset consisting of two copies of :math:`x` is written as
  :math:`{x,x}_{ms}`.
 
* We do not assume that the listed elements :math:`x,y` of the 
  conventional set :math:`\{x,y\}`  are distinct.

.. index:: cardinality;set,cardinality;multiset
  
* The number of distinct elements of the set :math:`\mathcal{S}` or
  not-necessarily-distinct elements of the multiset :math:`\mathcal{S}`
  is the **cardinality** of :math:`\mathcal{S}`, which is denoted by
  :math:`\text{card}(\mathcal{S})` or :math:`\left|\mathcal{S}\right|`.
  
Statements
''''''''''''''''''''''

* There are two basic types of mathematical statements involving
  quantifiers.
  
.. index:: existential statement

* An **existential statement** is of the form:

    there exists :math:`x \in \mathcal{X}` such that statement :math:`Z`
    is satisfied.

.. index:: universal statement
    
* A **universal statement** has the structure

    for all :math:`x \in \mathcal{X}`, it follows that statement
    :math:`Z` is satisfied.
    
  or equivalently 
  
    statement :math:`Z` is satisfied :math:`\forall x \in \mathcal{X}`.
    
    
Operations
'''''''''''''''''''''''''''

* Let :math:`\mathcal{X}` and :math:`\mathcal{Y}` be sets.

.. index:: intersection; set

* The **intersection** of :math:`\mathcal{X}` and :math:`\mathcal{Y}`
  is the set of common elements of :math:`\mathcal{X}` and :math:`\mathcal{Y}` 
  given by
  
  .. math::
  
    \mathcal{X} \cap \mathcal{Y} \triangleq 
    \{x : x \in \mathcal{X} \wedge x \in \mathcal{Y} \}
    = \{x : x \in \mathcal{Y} \wedge x \in \mathcal{X} \}
    = \mathcal{Y} \cap \mathcal{X}
    