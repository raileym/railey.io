---
title: Notes on Negative Binomial Probability Distributions
author: ''
date: '2020-12-20'
slug: notes-on-negative-binomial-probability-distributions
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2020-12-20T11:22:02-05:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
math: true
---

A random variable with a <marker>negative binomial probability distribution</marker> originates from a context similar to that of a random variable with a geometric distribution:

- The random variable is based on a series of TRIALS. 
- The outcome of any TRIAL equals exactly one of two results: SUCCESS or FAILURE. 
- The outcome of every TRIAL is independent of any other TRIAL.

The geometric and negative binomial distributions differ as to their desired final outcome:

- Geometric distribution: The random variable equals the total number of trials up to and including the first SUCCESS;
- Negative Binomial: The random variable equals the total number of trials up to and including the $n^{th}$ SUCCESS.

Clearly, a negative binomial distribution equals the geometric distribution when the $Nth$ trial IS the $1st$ TRIAL.

----

From [Wackerly et al., p. 116], let us select fixed values for $y$ and $r$ and consider events $A$ and $B$, where

$
\ \ \ \ \ A = \\{ \text{ the first } (y-1) \text{ trials contain } (r-1) \text{ successes } \\}
$

and

$
\ \ \ \ \ B = \\{ \text{ trial } y \text{ results in a success } \\}
$

Precisely because the events $A$ and $B$ are independent, we can say

$$P[ A \cap B] = P[A] \times P[B]$$

Given a random variable $Y$ with a negative binomial probability distribution and the desired number of $r$ TRIALS that yield SUCCESS, the probability $P$ that $Y$ will equal $y$ trials is given by the expression:

$$P[Y=y] = {y-1 \choose r-1}p^rq^{y-r}$$

where $p$ is the probability of SUCCESS in a trial, $q=1-p$ is the probability of FAILURE, $r$ is the total number of trials, and $y$ is the total number of trials that yield a SUCCESS.

----

![image](/images/negative-binomial-distribution-example-1.png)

![This example shows y-1 trials for r-1 successes.](/images/negative-binomial-distribution-example-1.png)

[Example3 image](/images/negative-binomial-distribution-example-1.png)

{{< figure 
    src="/images/negative-binomial-distribution-example-1.png"
    title="<strong>Figure 1.</strong> Negative Binomial Distribution" >}}

{{< figure 
    src="/images/negative-binomial-distribution-example-1.png" 
    title="<strong>Figure 1.</strong> Negative Binomial Distribution" >}}

{{< figure 
    src="/images/negative-binomial-distribution-example-1.png" 
    title="<strong>Figure 1.</strong> Negative Binomial Distribution." 
    caption="This is my caption" >}}

----

### References

[Wackerly, Dennis D., William Mendenhall III, and Richard L. Scheaffer. Mathematical Statistics with Applications. Sixth Edition. Duxbury - Thompson Learning. 2002.]
