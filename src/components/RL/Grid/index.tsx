import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
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
}

const RobotGrid: React.FC = () => {
    const [robotPosition, setRobotPosition] = useState<Position>({ row: initialPos.row, col: initialPos.col });
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

            // Check if the new position is an obstacle
            if (initialGrid[newPosition.row][newPosition.col] === 'obstacle') {
                return prevPosition; // Return the previous position if it's an obstacle
            }

            // Check if the new position is a goal or penalty
            if (initialGrid[newPosition.row][newPosition.col] === 'goal') {
                setReward(reward + 1);
                setMessage('+1');
                setTimeout(() => setMessage(''), 1000); // Clear message after 1 second
                return initialPos; // Reset to start
            }

            if (initialGrid[newPosition.row][newPosition.col] === 'penalty') {
                setReward(reward - 1);
                setMessage('-1');
                setTimeout(() => setMessage(''), 1000); // Clear message after 1 second
                return initialPos; // Reset to start
            }

            return newPosition;
        });
    };

    const reset = () => {
        setRobotPosition(initialPos);
        setReward(0);
        setMessage('');
    };

    const renderGrid = () => {
        return initialGrid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
                {row.map((cell, colIndex) => {
                    let className = 'cell';
                    if (rowIndex === robotPosition.row && colIndex === robotPosition.col) {
                        className += ' robot';
                    } else {
                        className += ` ${cell}`;
                    }
                    return <div className={className} key={colIndex}></div>;
                })}
            </div>
        ));
    };

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
                <div className="grid_world">
                    {message && <div className={`message ${message === '+1' ? 'positive' : 'negative'}`}>{message}</div>}
                    <div className="reward">Reward: {reward}</div>
                    <div className="grid">{renderGrid()}</div>
                    <div className="controls">
                        <button onClick={() => moveRobot('up')} className="up">↑</button>
                        <div className="middle-buttons">
                            <button onClick={() => moveRobot('left')} className="left">←</button>
                            <button onClick={() => moveRobot('down')} className="down">↓</button>
                            <button onClick={() => moveRobot('right')} className="right">→</button>
                        </div>
                    </div>
                </div>
            )}
        </BrowserOnly>
    );
};

export default RobotGrid;
