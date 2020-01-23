import { createAndValidateInstructions } from './roverMovementsValidation';

export const processRoverInstructions = instructionsText => {
  const roverMovements = createAndValidateInstructions(instructionsText);
  let processedRovers = []; // Keep an array of processed rovers for collision detection
  roverMovements.rovers.forEach(rover => {
    createRoverMovements(rover, roverMovements.upperRightCoords, processedRovers);
    processedRovers = [...processedRovers, rover]; // Add to the processed rovers for collision detection
  });
  return roverMovements;
};

const createRoverMovements = (rover, upperRightCoords, processedRovers) => {
  rover.positions = [{...rover.initialPosition, error: null}];
  let currentPosition = rover.initialPosition;
  let errorOccured = false;
  rover.instructions.forEach(instruction => {
    if (!errorOccured) {
      currentPosition = moveRover(currentPosition, instruction, upperRightCoords, processedRovers);
      rover.positions = [...rover.positions, currentPosition];
      errorOccured = currentPosition.error !== null;
    }
  });
};

const moveRover = (currentPosition, instruction, upperRightCoords, processedRovers) => {
  let compassPoint = currentPosition.compassPoint;
  switch (instruction) {
    case 'R':
      compassPoint = compassPointRotate(compassPoint, true);
      return { ...currentPosition, compassPoint, error: null };
    case 'L':
      compassPoint = compassPointRotate(compassPoint, false);
      return { ...currentPosition, compassPoint, error: null };
    case 'M':
      return moveRoverForward(currentPosition, upperRightCoords, processedRovers);
    default:
      return currentPosition;
  }
};

const compassPointRotate = (initialCompassPoint, rotateRight) => {
  switch (initialCompassPoint) {
    case 'N':
      return rotateRight ? 'E' : 'W';
    case 'E':
      return rotateRight ? 'S' : 'N';
    case 'S':
      return rotateRight ? 'W' : 'E';
    case 'W':
      return rotateRight ? 'N' : 'S';
    default:
      return initialCompassPoint;
  }
};

const moveRoverForward = (currentPosition, upperRightCoords, processedRovers) => {
  let x = currentPosition.x;
  let y = currentPosition.y;
  let error = null;
  const compassPoint = currentPosition.compassPoint;
  switch (compassPoint) {
    case 'N':
      y++;
      break;
    case 'E':
      x++;
      break;
    case 'S':
      y--;
      break;
    case 'W':
      x--;
      break;
    default:
      break;
  }
  if (y < 0 || x < 0 || y > upperRightCoords.y + 1 || x > upperRightCoords.x + 1) {
    error = 'woops, your rover has fallen off the plateau';
  }
  // Check for any collision detection
  processedRovers.forEach(rover => {
    const lastPosition = rover.positions[rover.positions.length - 1];
    if (lastPosition.x === x && lastPosition.y === y) {
      error = 'woops, your rover collided with another rover'
    }
  });
  return { x, y, compassPoint, error };
};
