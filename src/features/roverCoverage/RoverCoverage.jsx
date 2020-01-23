import React from 'react';
import { RoverCoverageTable } from './RoverCoverageTable';
import { Grid } from 'semantic-ui-react';

export const RoverCoverage = ({ upperRightCoords, rover }) => {
  return (
    <Grid.Column>
      <label>Rover {rover.id} coverage</label>
      <RoverCoverageTable upperRightCoords={upperRightCoords} positions={rover.positions} />
    </Grid.Column>
  );
};
