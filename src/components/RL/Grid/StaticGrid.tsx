import React from 'react';
import Grid from './Grid';
import './Grid.css';

type StaticGridProps = {
    predefinedValues: number[][];
};

const StaticGrid: React.FC<StaticGridProps> = ({ predefinedValues }) => {
    return (
        <div className="animation">
        <div className="grid_world">
            <Grid gridValues={predefinedValues} />
        </div>
        </div>
    );
};

export default StaticGrid;
