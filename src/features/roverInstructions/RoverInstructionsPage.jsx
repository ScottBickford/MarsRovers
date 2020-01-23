import React, { useState } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import RoverInstructionsInput from './RoverInstructionsInput';
import { RoverInstructionsOutput } from './RoverInstructionsOutput';
import { processRoverInstructions } from './roverMovements';
import { RoversCoverageSection } from '../roverCoverage/RoversCoverageSection';

const RoverInstructionsPage = () => {
  const [instructions, setInstructions] = useState('');
  const [roverMovements, setRoverMovements] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitInstructions = event => {
    event.preventDefault();
    setError(null);
    try {
      var movements = processRoverInstructions(instructions);
      setRoverMovements(movements);
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoaded(true);
    }
  };

  return (
    <div>
      <Grid columns={2}>
        <Grid.Column>
          <RoverInstructionsInput
            instructions={instructions}
            setInstructions={setInstructions}
            handleSubmitInstructions={handleSubmitInstructions}
          />
        </Grid.Column>
        <Grid.Column>
          {loaded && error && (
            <Label color='red' basic pointing='left'>
              {error}
            </Label>
          )}
          {loaded && !error && (
            <RoverInstructionsOutput roverMovements={roverMovements} />
          )}
        </Grid.Column>
      </Grid>
      {loaded && !error && (
        <RoversCoverageSection roverMovements={roverMovements} />
      )}
    </div>
  );
};

export default RoverInstructionsPage;
