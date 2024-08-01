import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Grid from './Grid';
import './style.css';

type Position = {
    row: number;
    col: number;
};

const initialGrid = [
    ['empty', 'empty', 'empty', 'goal'],
    ['empty', 'obstacle', 'empty', 'penalty'],
    ['start', 'empty', 'empty', 'empty'],
];

const initialPos = {
    row: 2,
    col: 0
};

const PlayableGrid: React.FC = () => {
    const [robotPosition, setRobotPosition] = useState<Position>(initialPos);
    const [reward, setReward] = useState<number>(0);
    const [message, setMessage] = useState<string>('');

    const moveRobot = (direction: string) => {
        setRobotPosition((prevPosition) => {
            const newPosition = { ...prevPosition };
            switch (direction) {
                case 'up':
                    if (newPosition.row > 0) newPosition.row--;
                    break;
                case 'down':
                    if (newPosition.row < initialGrid.length - 1) newPosition.row++;
                    break;
                case 'left':
                    if (newPosition.col > 0) newPosition.col--;
                    break;
                case 'right':
                    if (newPosition.col < initialGrid[0].length - 1) newPosition.col++;
                    break;
                default:
                    break;
            }

            if (initialGrid[newPosition.row][newPosition.col] === 'obstacle') {
                return prevPosition;
            }

            if (initialGrid[newPosition.row][newPosition.col] === 'goal') {
                setReward(reward + 1);
                setMessage('+1');
                setTimeout(() => setMessage(''), 1000);
                return initialPos;
            }

            if (initialGrid[newPosition.row][newPosition.col] === 'penalty') {
                setReward(reward - 1);
                setMessage('-1');
                setTimeout(() => setMessage(''), 1000);
                return initialPos;
            }

            return newPosition;
        });
    };

    const reset = () => {
        setRobotPosition(initialPos);
        setReward(0);
        setMessage('');
    };

    const gridValues = initialGrid.map(row => row.map(() => 0));

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
                <div className="grid_world">
                    {message && <div className={`message ${message === '+1' ? 'positive' : 'negative'}`}>{message}</div>}
                    <div className="reward">Cumulative Reward: {reward}</div>
                    <Grid gridValues={gridValues} robotPosition={robotPosition} showValues={false} withImages={true} />
                    <div className="controls">
                        <button onClick={() => moveRobot('up')}>↑</button>
                        <div className="button-group">
                            <button onClick={() => moveRobot('left')}>←</button>
                            <button onClick={() => moveRobot('down')}>↓</button>
                            <button onClick={() => moveRobot('right')}>→</button>
                        </div>
                        <button onClick={reset} className="reset">Reset</button>
                    </div>
                </div>
            )}
        </BrowserOnly>
    );
};

export default PlayableGrid;
