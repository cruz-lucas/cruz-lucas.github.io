import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Grid from './Grid';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const initialGrid = [
    ['empty', 'empty', 'empty', 'goal'],
    ['empty', 'obstacle', 'empty', 'penalty'],
    ['start', 'empty', 'empty', 'empty'],
];

const initialRewards = {
    'empty': 0,
    'goal': 1,
    'penalty': -1,
    'obstacle': 0,
    'start': 0,
};

const transitions = {
    'up': [-1, 0],
    'down': [1, 0],
    'left': [0, -1],
    'right': [0, 1],
};

const isValidPosition = (row: number, col: number) => {
    return row >= 0 && row < initialGrid.length && col >= 0 && col < initialGrid[0].length && initialGrid[row][col] !== 'obstacle';
};

const getNextStateValue = (gridValues: number[][], row: number, col: number, action: string) => {
    const [dRow, dCol] = transitions[action];
    const newRow = row + dRow;
    const newCol = col + dCol;
    if (isValidPosition(newRow, newCol)) {
        return gridValues[newRow][newCol];
    }
    return gridValues[row][col];
};

const AnimationGrid: React.FC = () => {
    const [gridValues, setGridValues] = useState<number[][]>(
        initialGrid.map(row => row.map((cell) => initialRewards[cell]))
    );
    const [step, setStep] = useState<number>(0);
    const [gamma, setGamma] = useState<number>(0.9);
    const [H, setH] = useState<number>(10);
    const [noise, setNoise] = useState<number>(0.2);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (step >= H) {
            setIsPlaying(false);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            return;
        }

        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setGridValues((prevGridValues) => {
                    const newGridValues = prevGridValues.map((row, rowIndex) => row.map((cellValue, colIndex) => {
                        if (initialGrid[rowIndex][colIndex] === 'obstacle' || initialGrid[rowIndex][colIndex] === 'goal' || initialGrid[rowIndex][colIndex] === 'penalty') {
                            return cellValue; // Keep the value for obstacle, goal, and penalty cells
                        }

                        const values = Object.keys(transitions).map(action => {
                            const nextStateValue = getNextStateValue(prevGridValues, rowIndex, colIndex, action);
                            return nextStateValue;
                        });

                        const maxValue = Math.max(...values);
                        const otherValues = values.filter(value => value !== maxValue);
                        const meanOtherValues = otherValues.length > 0 ? otherValues.reduce((a, b) => a + b, 0) / otherValues.length : maxValue;

                        return initialRewards[initialGrid[rowIndex][colIndex]] + 
                               gamma * ((1 - noise) * maxValue + noise * meanOtherValues);
                    }));

                    return newGridValues;
                });
                setStep(prevStep => prevStep + 1);
            }, 100);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, step, gamma, H, noise]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleStop = () => {
        setIsPlaying(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setGridValues(initialGrid.map(row => row.map((cell) => initialRewards[cell])));
        setStep(0);
    };

    const progressPercentage = (step / H) * 100;

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
                <div className="animation">
                    <div className="controls">
                        <div className='fields'>
                        <label>
                            Gamma:
                            <input type="number" value={gamma} onChange={(e) => setGamma(parseFloat(e.target.value))} step="0.1" min="0" max="1" />
                        </label>
                        <label>
                            Steps (H):
                            <input type="number" value={H} onChange={(e) => setH(parseInt(e.target.value))} step="1" min="1" />
                        </label>
                        <label>
                            Noise:
                            <input type="number" value={noise} onChange={(e) => setNoise(parseFloat(e.target.value))} step="0.1" min="0" max="1" />
                        </label>
                        </div>
                    </div>
                    <div className="grid_world">
                        <Grid gridValues={gridValues} />
                        <div className='controls'>
                        <div className="button-group">
                            <button onClick={handlePlay}><i className="fas fa-play"></i></button>
                            <button onClick={handlePause}><i className="fas fa-pause"></i></button>
                            <button onClick={handleStop}><i className="fas fa-stop"></i></button>
                            </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </BrowserOnly>
    );
};

export default AnimationGrid;
