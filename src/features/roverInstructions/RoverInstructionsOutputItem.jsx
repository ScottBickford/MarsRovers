import React, { Fragment } from 'react';

const RoverInstructionsOutputItem = ({ rover : {positions} }) => {
  const lastPosition = positions && positions[positions.length - 1];
  return (
    <Fragment>
      {lastPosition.error && (
        <div style={{ color: 'red' }}>{lastPosition.error}</div>
      )}
      {!lastPosition.error && (
        <div>
          {lastPosition.x} {lastPosition.y} {lastPosition.compassPoint}
        </div>
      )}
    </Fragment>
  );
};

export default RoverInstructionsOutputItem;
