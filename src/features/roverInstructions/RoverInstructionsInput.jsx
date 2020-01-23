import React, { useEffect, useRef } from 'react';
import { Segment, Header, Divider, Button } from 'semantic-ui-react';

const RoverInstructionsInput = ({
  instructions,
  setInstructions,
  handleSubmitInstructions
}) => {
  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);

  return (
    <form onSubmit={handleSubmitInstructions}>
      <Segment.Group>
        <Segment inverted color='teal'>
          <Header>Input</Header>
        </Segment>
        <Segment attached>
          <textarea
            ref={inputRef}
            style={{ width: '100%' }}
            rows='10'
            placeholder='Enter your instructions here...'
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
          />
          <Divider />
          <Button
            content='Submit'
            // disabled={instructions === null || instructions === ''}
          />
        </Segment>
      </Segment.Group>
    </form>
  );
};

export default RoverInstructionsInput;
