import React from 'react';
import './Grid.css';

type GridProps = {
  gridValues?: number[][];
  robotPosition?: { row: number; col: number };
  withImages?: boolean;
  showValues?: boolean;
  displayType?: 'values' | 'arrows';
};

const initialGrid = [
  ['empty', 'empty', 'empty', 'goal'],
  ['empty', 'obstacle', 'empty', 'penalty'],
  ['start', 'empty', 'empty', 'empty'],
];

const logInterpolate = (value: number) => {
  return value === 0 ? 0 : Math.sign(value) * (1 - Math.pow(1 - Math.abs(value), 1));
};

const interpolateColor = (
  value: number,
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
) => {
  const logValue = logInterpolate(value);
  const r = Math.round(color1.r + (color2.r - color1.r) * logValue);
  const g = Math.round(color1.g + (color2.g - color1.g) * logValue);
  const b = Math.round(color1.b + (color2.b - color1.b) * logValue);
  return `rgba(${r}, ${g}, ${b}, 0.43)`;
};

const getColorForValue = (
  value: number,
  displayType: 'values' | 'arrows'
): { backgroundColor: string; borderColor: string } => {
  const maxColor = { r: 27, g: 138, b: 90 }; // Dark green
  const midColor = { r: 255, g: 255, b: 255 }; // White
  const midBorderColor = { r: 204, g: 204, b: 204 }; // Light gray
  const minColor = { r: 238, g: 62, b: 50 }; // Red

  // If displayType is 'arrows', return mid colors with full opacity
  if (displayType === 'arrows') {
    return {
      backgroundColor: `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, 1)`, // Opaque
      borderColor: `rgba(${midBorderColor.r}, ${midBorderColor.g}, ${midBorderColor.b}, 1)`,
    };
  }

  // Compute colors based on value for 'values' displayType
  let backgroundColor: string;
  let borderColor: string;

  if (value < 0) {
    backgroundColor = interpolateColor(value + 1, minColor, midColor);
    borderColor = interpolateColor(value + 1, minColor, midBorderColor);
  } else {
    backgroundColor = interpolateColor(value, midColor, maxColor);
    borderColor = interpolateColor(value, midBorderColor, maxColor);
  }

  return {
    backgroundColor,
    borderColor,
  };
};

const getArrowForValue = (value: number): string => {
  switch (value) {
    case 0:
      return '↑'; // Up
    case 1:
      return '→'; // Right
    case 2:
      return '↓'; // Down
    case 3:
      return '←'; // Left
    default:
      return '';
  }
};

const Grid: React.FC<GridProps> = ({
  gridValues,
  robotPosition,
  withImages = false,
  showValues = true,
  displayType = 'values',
}) => {
  return (
    <div className="grid">
      {initialGrid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            let className = `cell ${cell}`;
            // Only add the robot class if robotPosition is provided
            if (
              robotPosition &&
              rowIndex === robotPosition.row &&
              colIndex === robotPosition.col
            ) {
              className += ' robot';
            }
            if (withImages) {
              className += ' with-images';
            }

            const cellValue = gridValues?.[rowIndex]?.[colIndex] || 0;

            // Get the color for the cell based on the value and displayType
            const { backgroundColor, borderColor } = getColorForValue(cellValue, displayType);

            // Apply styles for 'empty' and 'start' cells
            const isEmptyOrStart =
              initialGrid[rowIndex][colIndex] === 'empty' ||
              initialGrid[rowIndex][colIndex] === 'start';

            const style = isEmptyOrStart ? { backgroundColor, borderColor } : {};

            return (
              <div className={className} key={colIndex} style={style}>
                {showValues &&
                  (displayType === 'arrows' ? (
                    <span className="arrow">{getArrowForValue(cellValue)}</span>
                  ) : (
                    cellValue.toFixed(2)
                  ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
