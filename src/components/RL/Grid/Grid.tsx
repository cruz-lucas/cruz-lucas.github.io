import React from 'react';
import './style.css';

type GridProps = {
    gridValues?: number[][];
    qValues?: number[][][];
    robotPosition?: { row: number, col: number };
    withImages?: boolean;
    showValues?: boolean;
    useQValues?: boolean;
};

const initialGrid = [
    ['empty', 'empty', 'empty', 'goal'],
    ['empty', 'obstacle', 'empty', 'penalty'],
    ['start', 'empty', 'empty', 'empty'],
];

const Grid: React.FC<GridProps> = ({ gridValues, qValues, robotPosition, withImages = false, showValues = true, useQValues = false }) => {
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
                                {useQValues && qValues ? (
                                    <>
                                        <div className="quadrant up">{showValues && qValues[rowIndex][colIndex][0].toFixed(2)}</div>
                                        <div className="quadrant left">{showValues && qValues[rowIndex][colIndex][1].toFixed(2)}</div>
                                        <div className="quadrant down">{showValues && qValues[rowIndex][colIndex][2].toFixed(2)}</div>
                                        <div className="quadrant right">{showValues && qValues[rowIndex][colIndex][3].toFixed(2)}</div>
                                    </>
                                ) : (
                                    showValues && gridValues[rowIndex][colIndex].toFixed(2)
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Grid;
