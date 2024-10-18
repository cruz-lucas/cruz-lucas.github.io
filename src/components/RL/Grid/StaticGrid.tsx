import React from 'react';
import Grid from './Grid';
import './Grid.css';

type StaticGridProps = {
  predefinedValues: number[][];
  displayType?: 'values' | 'arrows';
  withImages?: boolean;
};

const StaticGrid: React.FC<StaticGridProps> = ({
  predefinedValues,
  displayType = 'values',
  withImages = true, // Enable images
}) => {
  return (
    <div className="animation">
      <div className="grid_world">
        <Grid
          gridValues={predefinedValues}
          displayType={displayType}
          withImages={withImages}
          // Do not provide robotPosition to exclude the robot
        />
      </div>
    </div>
  );
};

export default StaticGrid;
