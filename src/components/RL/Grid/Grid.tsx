import React from 'react';
import './Grid.css';

type GridProps = {
    gridValues?: number[][];
    robotPosition?: { row: number, col: number };
    withImages?: boolean;
    showValues?: boolean;
};

const initialGrid = [
    ['empty', 'empty', 'empty', 'goal'],
    ['empty', 'obstacle', 'empty', 'penalty'],
    ['start', 'empty', 'empty', 'empty'],
];

const logInterpolate = (value: number) => {
    // Adjust the logarithmic interpolation for higher contrast
    return value === 0 ? 0 : Math.sign(value) * (1 - Math.pow(1 - Math.abs(value), 1));
};

const interpolateColor = (value: number, color1: { r: number; g: number; b: number; }, color2: { r: number; g: number; b: number; }) => {
    const logValue = logInterpolate(value);
    const r = Math.round(color1.r + (color2.r - color1.r) * logValue);
    const g = Math.round(color1.g + (color2.g - color1.g) * logValue);
    const b = Math.round(color1.b + (color2.b - color1.b) * logValue);
    return `rgba(${r}, ${g}, ${b}, 0.43)`;
};

const getColorForValue = (value: number): { backgroundColor: string, borderColor: string } => {
    const maxColor = { r: 27, g: 138, b: 90 }; // #26b226 for value -1
    const midColor = { r: 255, g: 255, b: 255 }; // #ffffff6f for value 0 (background)
    const midBorderColor = { r: 204, g: 204, b: 204 }; // #ccc for value 0 (border)
    const minColor = { r: 238, g: 62, b: 50 }; // #fb565b for value 1

    let backgroundColor: string;
    let borderColor: string;

    if (value < 0) {
        backgroundColor = interpolateColor((value + 1), minColor, midColor);
        borderColor = interpolateColor((value + 1), minColor, midBorderColor);
    } else {
        backgroundColor = interpolateColor(value, midColor, maxColor);
        borderColor = interpolateColor(value, midBorderColor, maxColor);
    }

    return {
        backgroundColor,
        borderColor,
    };
};

const Grid: React.FC<GridProps> = ({ gridValues, robotPosition, withImages = false, showValues = true }) => {
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

                        const cellValue = gridValues?.[rowIndex]?.[colIndex] || 0;
                        const { backgroundColor, borderColor } = getColorForValue(cellValue);

                        const style = (initialGrid[rowIndex][colIndex] === 'empty' || initialGrid[rowIndex][colIndex] === 'start')
                            ? { backgroundColor, borderColor }
                            : {}; // Don't override color for non-empty cells

                        return (
                            <div className={className} key={colIndex} style={style}>
                                {showValues && cellValue.toFixed(2)}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Grid;
