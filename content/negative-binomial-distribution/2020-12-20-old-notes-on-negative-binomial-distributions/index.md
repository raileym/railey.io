---
title: Old Notes on Negative Binomial Distributions
author: ''
date: '2020-12-20'
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
draft: true
---

A <strong>negative binomial distribution</strong> is a discrete probability distribution that models the number of successes in a sequence  of independent and identically distributed Bernoulli trials before a specified [fixed] number of failures ... occurs (“Negative Binomial Distribution”).

Suppose there is a sequence of independent Bernoulli trials. Thus, each trial has two potential outcomes called "success" and "failure". In each trial the probability of success is $p$ and of failure is $(1 − p)$. We are observing this sequence until a predefined number $r$ of failures have occurred. Then the random number of successes we have seen, $X$, will have the negative binomial (or Pascal) distribution (“Negative Binomial Distribution”).

The probability mass function (<strong>pmf</strong>) of the negative binomial distribution is

\begin{equation}
Pr[X = x] = { k+r-1 \choose r-1} (1-p)^k p ^ r
\end{equation}

where $r$ is the number of successes, $k$ is the number of failures, and $p$ is the probability of success.

----

Another way to look at the <strong>pmf</strong> is to arrange the sequence of trials into two Events $A$ and $B$, where
the Event $A$ contains all the trials up to but not including the last trial and Event $B$ contains only the last trial. See <strong>Figure 1</strong> below.

{{< img match="example-2.png" figure="Figure 1" caption="Separate the trials into two Events A and B." >}}

Event $A$ contains the number of trials equal to the total number of failures $k$ plus the total number of successes $r$ minus one,

\begin{align}
N[A] = & k+r-1 \\\\[0.5em]
     = & k + (r-1) \\\\
\end{align}

The probability of Event $A$ is the total probability of any combination of $k$ failures and $r-1$ successes,

\begin{equation}
Pr[A] = {k+r-1 \choose r-1 } (1-p)^k p^{r-1}
\end{equation}

The combination denotes the total number of ways to choose $k+r-1$ trials taken $r-1$ at a time. Essentially, I have $k+r-1$ trials, and then I am allocating $r-1$ successes among those trials.

And for any one of those combinations, I have the combined probability of the $k$ independent failures, $(1-p)^k$, times the combined probability of the $r-1$ independent successes.

The probability of Event $B$ is simply

\begin{equation}
Pr[B] = p
\end{equation}

And because we assume these trials are independent, the total probability is simply

\begin{align}
Pr[X=x] = & Pr[A] \cdot Pr[B] \\\\[1em]
        = & \left[ {k+r-1 \choose r-1 } (1-p)^k p^{r-1} \right] \cdot Pr[B] \\\\[1em]
        = & \left[ {k+r-1 \choose r-1 } (1-p)^k p^{r-1} \right] \cdot  p \\\\[1em]
        = & {k+r-1 \choose r-1 } (1-p)^k p^{r-1} \cdot p \\\\[1em]
        = & {k+r-1 \choose r-1 } (1-p)^k p^r
\end{align}

```{theorem, name="Negative Binomial Distribution"}
Here is a definition
```

```{definition, name="Negative Binomial Distribution"}
Here is a definition
```

$$k+r-1$ trials to separate the failures and successes from the final success.

Here, the expression $k+r-1$ refers to the total number of trials, to include the number of failures $k$ plus the number of successes minus one $r-1$. We subtract one here becauseConsider a sequence of independent Bernoulli trials. Here, the outcome of each trial is either a SUCCESS or FAILURE. Let the probability of success equal $p$ and of failure 

produces one of two results

The negative binomial distribution is equivalent to the geometric distribution when the number of successes equals one.

A random variable with a <marker>negative binomial distribution</marker> originates from a context similar to that of a random variable with a geometric distribution:

- The random variable is based on a series of TRIALS. 
- The outcome of any TRIAL equals exactly one of two results: SUCCESS or FAILURE. 
- The outcome of every TRIAL is independent of any other TRIAL.

The geometric and negative binomial distributions differ as to their desired final outcome:

- Geometric distribution: The random variable equals the total number of trials up to and including the first SUCCESS;
- Negative Binomial: The random variable equals the total number of trials up to and including the $n^{th}$ SUCCESS.

Clearly, a negative binomial distribution equals the geometric distribution when the $Nth$ trial IS the $1st$ TRIAL.

----

From (Wackerly et al., p.116), let us select fixed values for $y$ and $r$ and consider events $A$ and $B$, where

$
\ \ \ \ \ A = \\{ \text{ the first } (y-1) \text{ trials contain } (r-1) \text{ successes } \\}
$

and

$
\ \ \ \ \ B = \\{ \text{ trial } y \text{ results in a success } \\}
$

Precisely because the events $A$ and $B$ are independent, we can say

$$P[ A \cap B] = P[A] \times P[B]$$

Given a random variable $Y$ with a negative binomial distribution and the desired number of $r$ TRIALS that yield SUCCESS, the probability $P$ that $Y$ will equal $y$ trials is given by the expression:

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

### In-Text Citations

(Wackerly et al.)

(“Negative Binomial Distribution”)

### References

Wackerly, Dennis D, et al. Mathematical Statistics with Applications. 2002. 6th ed., Belmont, Calif., Brooks-Cole, 2008.

“Negative Binomial Distribution.” Wikipedia, 18 Dec. 2020, en.wikipedia.org/wiki/Negative_binomial_distribution. Accessed 22 Dec. 2020.
