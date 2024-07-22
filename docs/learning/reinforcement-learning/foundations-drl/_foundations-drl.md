


**Q-Values**

Analogously to the Value function, we have Q-Values, that are going to be important in the future, and help us solve small MDPs, where we can loop through all the states and actions repeatedly.

$Q^*(s,a)=$ expected utility starting in $s$, taking action $a$, and (thereafter) acting optimally.

Bellman Equation:

$$
Q^*(s,a)=\sum_{s'}P(s'|s,a)(R(s,a,s')+\gamma \max_{a'}Q^*(s',a'))
$$

Q-Value Iteration:

$$
Q^*_{k+1}(s,a) \larr \sum_{s'}P(s'|s,a)(R(s,a,s')+\gamma\max_{a'}Q^*_k(s',a'))
$$

### Policy Iteration

Some of the approximate methods we are going to see in the future are built on Value Iteration, but some are built on Policy Iterations.

**Policy Evaluation**

In policy evaluation, we fix a policy and sample the action from that policy, we do not maximize the expected reward by choosing action.

- Policy evaluation for a given $\pi(s)$:

$$
V^\pi_k(s) \larr \sum_{s'} P(s'|s,\pi(s))(R(s,\pi(s),s')+

\gamma V^\pi_{k-1} (s))
$$

At convergence:

$$
\forall s \ V^\pi(s) \larr \sum_{s'} P(s'|s,\pi(s))(R(s,\pi(s),s')+

\gamma V^\pi (s))
$$

For a stochastic policy, we have the iteration:

$$
V^\pi_{k+1}(s) \larr \sum_{s'} \sum_a

\pi(a|s)P(s'|s,a) (

R(s,a,s')+\gamma V^\pi_k(s')

)
$$

**Policy Iteration**

- Policy evaluation for current policy $\pi_k$:
    - Iterate until convergence

$$
V^{\pi_k}_{i+1}(s) \larr \sum_{s'} P(s'|s,\pi_k(s))(R(s,\pi_k(s),s')+

\gamma V^{\pi_k}_{i} (s'))
$$

- Policy improvement: find the best action according to a one-step look-ahead:

$$
\pi_{k+1}(s) \larr \argmax_a \sum_{s'} P(s'|s,a)[R(s,a,s')+

\gamma V^{\pi_k} (s')]
$$

So we choose an action that maximizes the immediate reward and then we follow the previous policy to get the discounted value.

We repeat until policy converges. At convergence: optimal policy; and converges faster than value iteration under some conditions.

**Policy Iteration Guarantees**

- **Theorem.** Policy iteration is guaranteed to converge and at convergence, the current policy and its value function are the optimal policy and the optimal value function.

Proof Sketch:

- *Guarantee to converge:* in every step, the policy improves. This means that a given policy can be encountered at most once. This means that after we have iterated as many times as there are different policies, i.e., $(\text{number of actions})^{(\text{number of states})}$, we must be done and hence have converged.
- *Optimal at convergence:* by definition, at convergence $\pi_{k+1}(s) = \pi_k(s)$ for all states $s$, This means $\forall s \ V^{\pi_k}(s)-\max_a\sum_{s'}T(s,a,s')[R(s,a,s')+\gamma V_i^{\pi_k}(s')]$. Hence $V^{\pi_k}$ satisfies the Bellman equation, which means $V^{\pi_k}$ is equal to the optimal value function $V^*$.

## Maximum Entropy Formulation

This is another method to frame MDPs, and some methods in the future will borrow ideas from this method.

**What if we could find a distribution over near-optimal solutions?**

- More robust policy: if the environment changes, the distribution over near-optimal solutions might still have some good ones for the new situation.
- More robust learning: if we can retain a distribution over near-optimal solutions our agent will collect more interesting exploratory data during learning.

**Entropy**

Entropy is the measure of uncertainty over a random variable $X$, the number of bits required to encode $X$, on average. Log 2 is used in the case of bits, but it can be measured with a natural log.

$$
\mathcal{H}(X) = \sum_ip(x_i)\log_2\frac{1}{p(x_i)}=-\sum_ip(x_i) \log_2 p(x_i)
$$

**Maximum Entropy MDP**

- Regular formulation:

$$
\max_\pi \mathbb{E} [\sum_{t=0}^Hr_t]
$$

- Max-ent formulation (discount is left out for simplification):

$$
\max_\pi \mathbb{E} [\sum_{t=0}^Hr_t + \beta \mathcal{H}(\pi(\cdot|s_t))]
$$

So we a maximizing the expected reward plus the entropy of the policy. The policy gives the action to take in each state. Beta is a trade-off factor, the more we can control our actions, the more precise the agent is in what it achieves and the reward it gets. The larger the beta, the more we focus on the entropy and the less reward we are going to get.

**Constrained Optimization**

- Original problem:

$$
\begin{aligned}
\max_x \ & f(x)\\
\textrm{s.t.} \ & g(x)=0\\
\end{aligned}
$$

- Lagrangian:

$$
\max_x\min_\lambda\mathcal{L}(x,\lambda)=f(x)+\lambda g(x)
$$

- At optimum:

$$
\frac{\partial\mathcal{L}(x,\lambda)}{\partial x} = 0 \\

\frac{\partial\mathcal{L}(x,\lambda)}{\partial \lambda} = 0
$$

**Max-ent for 1-step problem**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88df98cf-9ad2-4d6f-852f-31623533c662/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1a97dc7-7a06-4320-b4b1-717f1be10ad7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10decfca-6ae6-458d-835c-af0bc024f4c5/Untitled.png)

# Deep Q-Learning

# Policy Gradients and Advantage Estimation

# TRPO and PPO

# DDPG and SAC

# Model-based RL