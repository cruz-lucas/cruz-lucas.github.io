import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './style.css';
import { useColorMode } from '@docusaurus/theme-common';

const EntropyGraph: React.FC = () => {
    const { colorMode } = useColorMode();
    const [Plot, setPlot] = useState<any>(null);

    useEffect(() => {
        // Dynamically import react-plotly.js only on the client side
        import('react-plotly.js').then((Plotly) => {
            setPlot(() => Plotly.default);
        });
    }, []);

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                if (!Plot) return <div>Loading...</div>;

                const pValues = Array.from({ length: 101 }, (_, i) => i / 100);
                const entropyValues = pValues.map(p => {
                    if (p === 0 || p === 1) return 0;
                    return -p * Math.log2(p) - (1 - p) * Math.log2(1 - p);
                });

                return (
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <Plot
                            key={colorMode}
                            data={[
                                {
                                    x: pValues,
                                    y: entropyValues,
                                    type: 'scatter',
                                    mode: 'lines',
                                    line: { 
                                        color: colorMode === 'dark' ? '#007BFF' : '#1f77b4',
                                        width: 4,
                                    }
                                },
                            ]}
                            layout={{
                                title: 'Entropy H(X) vs. Probability Pr(X=1)',
                                xaxis: {
                                    title: 'Pr(X=1)',
                                    range: [-0.1, 1.1],
                                    gridcolor: colorMode === 'dark' ? '#808080' : '#ccc',
                                    zerolinecolor: colorMode === 'dark' ? 'white' : 'black',
                                },
                                yaxis: {
                                    title: 'H(X)',
                                    range: [0, 1.1],
                                    gridcolor: colorMode === 'dark' ? '#808080' : '#ccc',
                                    zerolinecolor: colorMode === 'dark' ? 'white' : 'black',
                                },
                                showlegend: false,
                                plot_bgcolor: 'rgba(0,0,0,0)',
                                paper_bgcolor: 'rgba(0,0,0,0)',
                                grid: { rows: 1, columns: 1 },
                                font: { color: colorMode === 'dark' ? 'white' : '' },
                            }}
                            config={{
                                responsive: true,
                                displayModeBar: false
                            }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                );
            }}
        </BrowserOnly>
    );
};

export default EntropyGraph;
