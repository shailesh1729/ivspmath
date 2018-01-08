Calculus on Euclidean Space
============================================


Euclidean Space
---------------------------


.. index:: point;geometry
.. index:: euclidean 3-space

.. topic:: Definition

    Euclidean 3-space :math:`\mathbf{R}^3` is the set of
    all ordered triples of real numbers. 
    Such a triple :math:`\mathbf{p} = (p_1, p_2, p_3)`
    is called a **point** of :math:`\mathbf{R}^3`.
 
*  :math:`\mathbf{R}^3` is a vector space over the real numbers.

   .. math::
   
    &\mathbf{p} = (p_1, p_2, p_3)\\
    &\mathbf{q} = (q_1, q_2, q_3)\\    
    &\mathbf{p}+\mathbf{q} = (p_1 + q_1, p_2 +q_2, p_3 + q_3)\\
    &a\mathbf{p} = (ap_1, ap_2, ap_3)\\
    &\mathbf{0} = (0,0,0)    
    
.. index:: coordinate functions; geometry
    
.. topic:: Definition 
    
    Let :math:`x,y,z` be the real-valued functions on
    :math:`\mathbf{R}^3` such that for each point
    :math:`\mathbf{p} = (p_1, p_2, p_3)`
    
    .. math::
    
        x(\mathbf{p}) = p_1\\
        y(\mathbf{p}) = p_2\\
        z(\mathbf{p}) = p_3\\
  
    These functions :math:`x,y,z` are called the 
    **natural coordinate functions** of :math:`\mathbf{R}^3`.
    
    We also write:
    
    .. math::
    
        x_1 = x, \quad x_2 = y, \quad  x_3 = z
        
We thus have:

.. math::

    \mathbf{p} = (p_1, p_2, p_3) = (x_1(\mathbf{p}), x_2(\mathbf{p}), x_3(\mathbf{p}))
    
.. index:: differentiable function; geometry
    
.. topic:: Definition

    A real-valued function :math:`f` on :math:`\mathbf{R}^3`
    is **differentiable** (or **infinitely differentiable**
    or **smooth**) provided all partial derivatives of :math:`f`,
    of all orders, exist and are continuous.
    
    
* :math:`(f+g)(\mathbf{p}) = f(\mathbf{p}) + g(\mathbf{p})`
* :math:`(fg)(\mathbf{p}) = f(\mathbf{p})g(\mathbf{p})`
* In the following all functions are assumed to be differentiable real valued
  functions unless stated otherwise.
  
  
.. rubric:: Differentiation

* Is always a local operation.
* The domain of :math:`f` need not be :math:`\mathbf{R}^3`. It needs
  to be only an open set of :math:`\mathbf{R}^3`.
  

  
