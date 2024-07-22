import React from 'react';
import Plot from 'react-plotly.js';
import { range, randomNormal } from 'd3-array';
import './distributions.css'


const BernoulliDistribution = ({ p }) => {
  if (p < 0 || p > 1) {
    throw new Error('Probability p must be between 0 and 1.');
  }

  const xValues = [0, 1];
  const yValues = [1 - p, p];

  return (
    <div className="plot-container">
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'bar',
        //   marker: { color: 'blue' },
        },
      ]}
      layout={{
        title: `Bernoulli Distribution (p = ${p})`,
        xaxis: { title: 'Outcome' },
        yaxis: { title: 'Probability' },
      }}
    />
    </div>
  );
};

const PoissonDistribution = ({ lambda }) => {
  const xValues = range(0, 20);
  const yValues = xValues.map((x) => (Math.pow(lambda, x) * Math.exp(-lambda)) / factorial(x));

  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

  return (
    <div className="plot-container">
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'bar',
        //   marker: { color: 'green' },
        },
      ]}
      layout={{
        title: `Poisson Distribution (λ = ${lambda})`,
        xaxis: { title: 'k' },
        yaxis: { title: 'P(X=k)' },
      }}
    />
    </div>
  );
};

const UniformDistribution = ({ a, b }) => {
  const xValues = range(a, b, 0.01);
  const yValues = xValues.map(() => 1 / (b - a));

  return (
    <div className="plot-container">
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
        //   line: { color: 'red' },
        },
      ]}
      layout={{
        title: 'Uniform Distribution',
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' },
      }}
    />
    </div>
  );
};

const NormalDistribution = ({ mean, std }) => {
  const xValues = range(mean - 4 * std, mean + 4 * std, 0.1);
  const yValues = xValues.map((x) => (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / std, 2)));

  return (
    <div className="plot-container">
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
        //   line: { color: 'purple' },
        },
      ]}
      layout={{
        title: 'Normal Distribution',
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' },
      }}
    />
    </div>
  );
};

const TDistribution = ({ df }) => {
  const xValues = range(-4, 4, 0.1);
  const yValues = xValues.map((x) => (gamma((df + 1) / 2) / (Math.sqrt(df * Math.PI) * gamma(df / 2))) * Math.pow(1 + (Math.pow(x, 2) / df), -((df + 1) / 2)));

  function gamma(n) {
    const g = 7;
    const p = [
      0.99999999999980993,
      676.5203681218851,
      -1259.1392167224028,
      771.32342877765313,
      -176.61502916214059,
      12.507343278686905,
      -0.13857109526572012,
      9.9843695780195716e-6,
      1.5056327351493116e-7,
    ];

    if (n < 0.5) {
      return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
    }

    n -= 1;
    let x = p[0];
    for (let i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }

    const t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
  }

  return (
    <div className="plot-container">
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
        //   line: { color: 'orange' },
        },
      ]}
      layout={{
        title: "Student's t-Distribution",
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' },
      }}
    />
    </div>
  );
};

export default { BernoulliDistribution, PoissonDistribution, UniformDistribution, NormalDistribution, TDistribution };