.. _Math_StatisticsProbability_descriptive:

Descriptive Statistics
================================

.. index:: mean;statistics

Mean
----------------

Sample mean is defined as:

.. math::

    \mu = \frac{1}{n} \sum_i x_i
    
    
* Mean of a sample is the summary statistic computed with above formula.
* Mean is one way to describe the central tendency of data.
* Average is one of many summary statistics one might choose to describe the
  typical value or the central tendency of a sample.
  
.. index:: variance;statistics
.. index:: standard deviation;statistics
  
Variance
------------------------

Variance of a sample is defined by:

.. math::

    \sigma^2 = \frac{1}{n-1} \sum_i (x_i - \mu)^2 
    
* :math:`x_i - \mu` is called deviation from mean.
* Square root of variance (:math:`\sigma`) is called standard deviation.



Distribution
----------------------------

* Summary statistics are concise but dangerous.
* Histogram is a graph which shows the frequency or probability of each value.
* Probability in this context is a frequency expressed as a fraction of the sample size.
* Process of converting frequency to probability is called normalization.
* Normalized histogram is called PMF or Probability Mass Function.
* The most common value in a distribution is called its mode.
* Mode is also a summary statistic. In certain cases, mode does a very good job of describing
  the typical value.
* Outliers are the values which are far away from central tendency. 
* It is difficult to compare two histograms.

.. index:: outliers; statistics

Outliers
--------------------

* Outliers are values far away from central tendency.


.. index:: relative risk; statistics

Relative Risk
-----------------------

* Relative risk is a ratio of two probabilities.

.. topic:: Example

  * Probability that a first baby is born early is 18.2%.
  * Probability that other babies are born early is 16.8%.
  * Relative risk is 1.08%. 
  * First babies are about 8% more likely to be early.
  
Conditional Probability
----------------------------------

* Conditional probability is a probability which depends on some condition.


.. glossary::

    Central tendency

        A characteristic of a sample or population; intuitively, it is the most
        average value.
            
    Spread

        A characteristic of a sample or population; intuitively it describes 
        how much variability there is.
        
    Variance

        A summary statistic often used to quantify spread.
        
    Standard deviation

        The square root of variance, also used as a measure of spread.
        
        
    Frequency

        The number of times a value appears in a sample.
        
    Histogram

        A mapping from values to frequencies or a graph that shows this mapping.
        
    Probability

        A frequency expressed as a fraction of the sample size.
        
        
    Normalization

        The process of dividing a frequency by a sample size to get a probability.
        
    Distribution

        A summary of the values that appear in a sample and the frequency, or probability
        of each.
        
    PMF

        Probability mass function: a representation of a distribution as a function
        that maps from values to probabilities.
        
    
    Mode
    
        Most frequent value in a sample.
        
    Outlier
    
        A value far from the central tendency.
        
    Trim
    
        To remove outliers from a dataset.
        
    Bin
        
        A range used to group nearby values.
        
        
    Relative Risk
    
        A ratio of two probabilities, often used to measure a difference
        between distributions
        
    Conditional probability
    
        A probability computed under the assumption that some condition holds.
        
    Clinically significant
    
        A result, a difference between groups, that is relevant in practice.
        
        
        
Reference
---------------------

* [ThinkStatsDowney]_   



.. rubric:: Change log

:Last Modified:    $Id: descriptive.rst 249 2012-08-05 06:17:57Z shailesh $
