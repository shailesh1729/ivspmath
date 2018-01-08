.. _Math_General_measurements:

Levels of measurement
==================================

.. index:: level of measurement
.. index:: scale type
.. index:: scale of measure

* a.k.a. Scales of measure
* Developed by Stanley Smith Stevens

Measurements in science use following scales

* Nominal scale
* Ordinal scale
* Interval scale
* Ratio scale

.. rubric:: Examples of different scale types

============    =============================================================================
Scale type      Example
============    =============================================================================
Nominal         Rocks as igneous, sedimentary, metamorphic; first names
Ordinal         Rank-ordering data: Result of horse race, Mohs scale of mineral hardness
Interval        temperature with the Celsius scale,
Ratio           Mass, length, time, plane angle, energy and electric charge
============    =============================================================================


.. rubric:: Mathematical features of different scale types

===========  ==================================   =================================== ===========================      
Scale type    Permissible statistics               Admissible scale transformation     Mathematical structure
===========  ==================================   =================================== ===========================      
Nominal       Mode,Chi-squared                     One-to-one (equality)               Standard set (unordered)
Ordinal       Median,percentile                    Monotonically increasing (order <)  Totally ordered set
Interval      Mean,std,correlation,regression      Positive linear (affine)            Affine line
Ratio         All above+geometric mean,log etc     Positive similarities               1-D vector space 
===========  ==================================   =================================== ===========================      

* We can notice, that understanding of scale is important in appropriate
  choice of statistical measures for data analysis.


.. index:: nominal scale

Nominal scale
--------------------

* Nominal measures offer names or labels for certain characteristics
* Objects are classified using labels

  * Rocks as igneous, sedimentary, metamorphic
  * A group of people classified based on their first name
  
* Valid operations

  * Equivalence
  * Set memberships
  
.. index:: categorical variables
  
Categorical variables
''''''''''''''''''''''''''''''  

* Variables assessed on a nominal scale are called **categorical variables**.
* Binary variables (or Bernoulli variables) : only two possible categories
    
  * Yes or no
  * success or failure
  
* Multi-way variables

.. index:: categorical distribution

Categorical distribution
''''''''''''''''''''''''''''''''''''

A categorical distribution is a probability distribution that
describes the result of a random event that can take one of
K possible outcomes, with the probability of each outcome separately
specified.

* There is not necessarily an underlying ordering of these outcomes.
* Numerical labels are attached for convenience.

Statistics
'''''''''''''''''''

* Central tendency is given by its mode [e.g. most common name]
* Mean is not defined [what would be average name in a set of people?]
* Median is not defined [There is no ordering in the labels]

.. index:: ordinal scale

Ordinal scale
---------------------

* Rank ordering data puts the data on ordinal scale
* Order of measurements is described. 
* Relative size or degree of difference between measured items is not described.


.. rubric:: Examples

* Result of a horse race, where the horses are ordered based on which one
  arrived 1st, second, or third, etc..
* Names arranged in alphabetical order

  * We can say which name comes first which later in this order.
  * But there is no meaning of difference between names.

* Psychometric measurements [like IQ etc.]

* Food quality : exceptional, great, good, average, bad, poor
  
Statistics
''''''''''''''''''''''''''

* Central tendency specified using mean or median
* Mean cannot be defined
  
Order isomorphism
''''''''''''''''''''''''

* An ordinal scale defines a total preorder of objects
* Scale values may be sorted on a single line with no ambiguities
* Numbers may be assigned to scale values
* Any transformation of numbers using a monotonically increasing function
  doesn't change the order, hence retains validity.
* This is known as :index:`order isomorphism`.  



.. index:: interval scale

Interval scale
-----------------------

* Quantitative attributes are measurable on interval scale
* Difference between levels is meaningful.
* Difference can be multiplied to exceed or equal another difference.
* Ratio between numbers of this scale is not meaningful
* Multiplication and division cannot be done directly.
* Ratio between differences is meaningful.
* Choice or origin is arbitrary and not meaningful. [e.g. 0 degree Celsius]

Statistics
''''''''''''''''''''

* Central tendency can be represented by mode, median, mean all.
* Statistical dispersion can be measured using, standard deviation, quantiles etc.
* Studentized range or coefficient of variation is not supported.
* Moments are not useful since origin is arbitrary. Central moments make sense.



.. index:: ratio scale

Ratio scale
---------------------------

* Measurement is the estimation of ratio between magnitude of a continuous quantity
  and a unit magnitude of same kind.
* A zero value is supported.

  
  
.. rubric:: Examples

* Mass, length, time, plane angle, energy and electric charge
* Kelvin temperature

Statistics
''''''''''''''''''''''

* Since all mathematical operations are supported, hence
  all statistical measures are available.
* Mode, median, arithmetic mean
* Geometric mean, harmonic mean
* Range, standard deviation
* Studentized range, coefficient of variation

References
-----------------

* [wikipediaLevelOfMeasurement]_
* [wikipediaCategoricalDistribution]_



.. rubric:: Change log

:Last Modified:    $Id: measurements.rst 249 2012-08-05 06:17:57Z shailesh $
