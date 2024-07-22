import React, { useState, useEffect } from 'react';

const DistributionChart = ({ type, params }) => {
  const [PlotComponent, setPlotComponent] = useState(null);

  useEffect(() => {
    async function loadComponent() {
      let component;
      switch (type) {
        case 'bernoulli':
          component = (await import('./distributions')).default;
          break;
        case 'poisson':
          component = (await import('./distributions')).default;
          break;
        case 'uniform':
          component = (await import('./distributions')).default;
          break;
        case 'normal':
          component = (await import('./distributions')).default;
          break;
        case 't':
          component = (await import('./distributions')).default;
          break;
        default:
          component = null;
      }
      setPlotComponent(() => component);
    }
    loadComponent();
  }, [type]);

  if (!PlotComponent) {
    return <div>Loading...</div>;
  }

  return <PlotComponent {...params} />;
};

export default DistributionChart;
