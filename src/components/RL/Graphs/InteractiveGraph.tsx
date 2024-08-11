import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Latex from 'react-latex-next';
import './style.css';
import { useColorMode } from '@docusaurus/theme-common';

const InteractiveGraph: React.FC = () => {
    const [clicked, setClicked] = useState<'left' | 'right' | null>(null);
    const [showMath, setShowMath] = useState<boolean>(false);
    const { colorMode } = useColorMode();
    const [Plot, setPlot] = useState<any>(null);

    useEffect(() => {
        // Dynamically import react-plotly.js only on the client side
        import('react-plotly.js').then((Plotly) => {
            setPlot(() => Plotly.default);
        });
    }, []);

    const leftData = [0.25, 0.25, 0.25, 0.125, 0.125];
    const rightData = [0.75, 0.0625, 0.0625, 0.0625, 0.0625];

    const handleLeftClick = () => {
        setClicked('left');
    };

    const handleRightClick = () => {
        setClicked('right');
    };

    const handleToggleMath = () => {
        setShowMath(!showMath);
    };

    const getBorderConfig = (isDark: boolean, isClicked: boolean, side: string) => {
        if (isDark) {
            if (isClicked) {
                return side === 'left' 
                    ? { border: '5px solid #26b226', boxShadow: '2px 5px 2px rgba(0,0,0,.3)' } 
                    : { border: '5px solid #fb565b', boxShadow: '2px 5px 2px rgba(0,0,0,.3)' };
            }
            return { border: '2px solid #666666', boxShadow: "5px 10px 5px rgba(0,0,0,.3)" };
        }
        if (isClicked) {
            return side === 'left' 
                ? { border: '5px solid #26b226', boxShadow: '2px 5px 2px #ccc' } 
                : { border: '5px solid #fb565b', boxShadow: '2px 5px 2px #ccc' };
        }
        return { border: '2px solid #666666', boxShadow: "5px 10px 5px #ccc" };
    };

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                if (!Plot) return <div>Loading...</div>;

                return (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '5%' }}>
                            {/* Left Graph */}
                            <div style={{ textAlign: 'center', width: '45%' }}>
                                <div
                                    onClick={handleLeftClick}
                                    style={{
                                        border: getBorderConfig(colorMode === 'dark', clicked === 'left', 'left').border,
                                        boxShadow: getBorderConfig(colorMode === 'dark', clicked === 'left', 'left').boxShadow,
                                        padding: '10px',
                                        cursor: 'pointer',
                                        borderRadius: "5%",
                                        boxSizing: 'border-box',
                                        height: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <Plot
                                        key={`left-graph-${colorMode}`} // Use colorMode as a key to force re-render on theme change
                                        data={[
                                            {
                                                x: ['A', 'B', 'C', 'D', 'E'],
                                                y: leftData,
                                                type: 'bar',
                                                marker: { color: colorMode === 'dark' ? '#007BFF' : '#1f77b4' },
                                            },
                                        ]}
                                        layout={{
                                            autosize: true,
                                            margin: { t: 30, r: 20, l: 20, b: 40 },
                                            height: 250,
                                            title: {
                                                text: 'Graph 1',
                                                font: {
                                                    size: 16,
                                                },
                                            },
                                            plot_bgcolor: 'rgba(0,0,0,0)',
                                            paper_bgcolor: 'rgba(0,0,0,0)',
                                            xaxis: {
                                                gridcolor: colorMode === 'dark' ? '#808080' : '',
                                                zerolinecolor: colorMode === 'dark' ? 'white' : '',
                                            },
                                            yaxis: {
                                                gridcolor: colorMode === 'dark' ? '#808080' : '',
                                                zerolinecolor: colorMode === 'dark' ? 'white' : '',
                                            },
                                            font: { color: colorMode === 'dark' ? 'white' : '' },
                                        }}
                                        config={{ displayModeBar: false }}
                                        style={{ width: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Right Graph */}
                            <div style={{ textAlign: 'center', width: '45%' }}>
                                <div
                                    onClick={handleRightClick}
                                    style={{
                                        border: getBorderConfig(colorMode === 'dark', clicked === 'right', 'right').border,
                                        boxShadow: getBorderConfig(colorMode === 'dark', clicked === 'right', 'right').boxShadow,
                                        padding: '10px',
                                        cursor: 'pointer',
                                        borderRadius: "5%",
                                        boxSizing: 'border-box',
                                        height: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <Plot
                                        key={`right-graph-${colorMode}`} // Use colorMode as a key to force re-render on theme change
                                        data={[
                                            {
                                                x: ['A', 'B', 'C', 'D', 'E'],
                                                y: rightData,
                                                type: 'bar',
                                                marker: { color: colorMode === 'dark' ? '#007BFF' : '#1f77b4' },
                                            },
                                        ]}
                                        layout={{
                                            autosize: true,
                                            margin: { t: 30, r: 20, l: 20, b: 40 },
                                            height: 250,
                                            title: {
                                                text: 'Graph 2',
                                                font: {
                                                    size: 16,
                                                },
                                            },
                                            xaxis: {
                                                gridcolor: colorMode === 'dark' ? '#808080' : '',
                                                zerolinecolor: colorMode === 'dark' ? 'white' : '',
                                            },
                                            yaxis: {
                                                gridcolor: colorMode === 'dark' ? '#808080' : '',
                                                zerolinecolor: colorMode === 'dark' ? 'white' : '',
                                            },
                                            font: { color: colorMode === 'dark' ? 'white' : '' },
                                            plot_bgcolor: 'rgba(0,0,0,0)',
                                            paper_bgcolor: 'rgba(0,0,0,0)',
                                        }}
                                        config={{ displayModeBar: false, displaylogo: false }}
                                        style={{ width: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Correct/Incorrect Message */}
                        {clicked !== null && (
                            <div style={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold', color: clicked === 'left' ? '#26b226' : '#fb565b' }}>
                                {clicked === 'left' ? 'Correct!' : 'Try again.'}
                            </div>
                        )}

                    </div>
                );
            }}
        </BrowserOnly>
    );
};

export default InteractiveGraph;
