import React, { Fragment } from 'react'
import { Grid } from 'semantic-ui-react';
import { RoverCoverage } from './RoverCoverage';
import { RoverTotalCoverage } from './RoverTotalCoverage';

export const RoversCoverageSection = ({roverMovements}) => {
  return (
    <Fragment>
    <h3>Visual Coverage</h3>
    <Grid
      columns={
        roverMovements.upperRightCoords.x <= 15
          ? 3
          : roverMovements.upperRightCoords.x <= 23
          ? 2
          : 1
      }
      stackable
    >
      {roverMovements.rovers.map(rover => {
        return (
          <RoverCoverage
            key={rover.id}
            upperRightCoords={roverMovements.upperRightCoords}
            rover={rover}
          />
        );
      })}
    </Grid>
    <RoverTotalCoverage
      roverMovements={roverMovements}
    />
  </Fragment>
  )
}
