.. _Math_General_convergence:

Convergence
=====================


.. index:: convergence;pointwise

Pointwise convergence
-------------------------------

Suppose :math:`\{f_n\}` be a sequence of functions sharing the same domain :math:`X`
and codomain  :math:`Y`. 

The sequence :math:`\{f_n\}` **converges pointwise** to :math:`f`, written as:

.. math::

    \lim_{n \to \infty} f_n = f
    
if and only if

.. math::

    \lim_{n \to \infty} f_n(x) = f(x) \quad \forall x \in X
    

.. index:: convergence;uniform
    
Uniform convergence
--------------------------------

A sequence :math:`\{f_n\}` **converges uniformly** to :math:`f`, if the 
speed of convergence of :math:`\{f_n(x)\}` to :math:`f(x)` doesn't depend upon :math:`x`.

Consider the sequence :math:`a_n = \sup_x|f_n(x) - f(x)|` where
the supremum is taken over all :math:`x \in X`. 
:math:`\{f_n\}` **converges uniformly** to :math:`f` if and only if
:math:`a_n \to 0`.


* Uniform convergence is stronger than pointwise convergence.
* Every uniformly convergent sequence is pointwise convergent.

.. index:: convergence;almost everywhere

Almost everywhere convergence
------------------------------------

In measure theory, the concept of almost everywhere convergence of a sequence
of measurable functions defined on a measurable space is discussed. It means
pointwise convergence almost everywhere (i.e. the measure of points at which
convergence doesn't happen is zero). 

.. index:: convergence;absolute

Absolute convergence
-----------------------------------

An infinite series of numbers is said to converge absolutely if the sum
of absolute values of the summand is finite.

:math:`\sum_{-\infty}^{+\infty}a_n` is said to **converge absolutely** if
:math:`\sum_{-\infty}^{+\infty}|a_n| < \infty`.

This can also be defined for a one sided series :math:`\sum_{0}^{+\infty}a_n`.

Similarly an improper integral of a function :math:`\int_{-\infty}^{\infty} f(x)dx`
is said to converge absolutely if :math:`\int_{-\infty}^{\infty} |f(x)|dx < \infty`;
i.e. the integral of the absolute value of the integrand is finite.

* Any absolutely convergent series is convergent.



.. rubric:: Change log

:Last Modified:    $Id: convergence.rst 249 2012-08-05 06:17:57Z shailesh $
