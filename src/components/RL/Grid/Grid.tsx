import React from 'react';
import './style.css';

type GridProps = {
    gridValues: number[][];
    robotPosition?: { row: number, col: number };
    showValues?: boolean;
    withImages?: boolean;
};

const initialGrid = [
    ['empty', 'empty', 'empty', 'goal'],
    ['empty', 'obstacle', 'empty', 'penalty'],
    ['start', 'empty', 'empty', 'empty'],
];

const Grid: React.FC<GridProps> = ({ gridValues, robotPosition, showValues = true, withImages = false }) => {
    return (
        <div className="grid">
            {initialGrid.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, colIndex) => {
                        let className = `cell ${cell}`;
                        if (robotPosition && rowIndex === robotPosition.row && colIndex === robotPosition.col) {
                            className += ' robot';
                        }
                        if (withImages) {
                            className += ' with-images';
                        }
                        return (
                            <div className={className} key={colIndex}>
                                {showValues && gridValues[rowIndex][colIndex].toFixed(2)}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Grid;
