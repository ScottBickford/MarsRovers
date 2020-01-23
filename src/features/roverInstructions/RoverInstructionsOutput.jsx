import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import RoverInstructionsOutputItem from './RoverInstructionsOutputItem';

export const RoverInstructionsOutput = ({ roverMovements }) => {
  const hasErrors = roverMovements.rovers.some(
    r => r.positions[r.positions.length - 1].error !== null
  );
  return (
    <Segment.Group>
      <Segment inverted color={hasErrors ? 'red' : 'green'}>
        <Header>Output</Header>
      </Segment>
      <Segment attached>
        {roverMovements.rovers.map(rover => {
          return <RoverInstructionsOutputItem key={rover.id} rover={rover} />;
        })}
      </Segment>
    </Segment.Group>
  );
};
