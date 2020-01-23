const minCoordSize = 2;
const maxCoordSize = 50;

export const createAndValidateInstructions = instructionsText => {
  // Check that input has been entered
  if (instructionsText === null || instructionsText === '') {
    throw new Error('No instructions are entered');
  }

  const lines = createAndValidateLines(instructionsText);
  const upperRightCoords = createAndValidateLine1(lines[0]);
  let rovers = [];
  for (let i = 1; i <= lines.length - 1; i += 2) {
    var rover = createAndValidateRoverItem(lines[i], lines[i + 1], i);
    rovers = [
      ...rovers,
      {...rover, id: rovers.length + 1}
    ];
  }

  return {
    upperRightCoords,
    rovers
  };
};

// Validate the lines in general
const createAndValidateLines = instructionsText => {
  // Split and remove any empty lines
  const lines = instructionsText
    .split('\n')
    .filter(line => line !== null && line.trim() !== '');

  // Check that there are a minimum of 3 lines
  if (lines.length < 3) {
    throw new Error('Incorrect input - you need at least 3 lines');
  }
  // The number of lines needs to be an odd number - as the rover instructions are always 2 lines, added with the initial position, will always make it an odd number
  if (lines.length % 2 === 0) {
    throw new Error(
      'Incorrect input - the number of instructions lines must be an odd number (eg 3 lines, 5 lines, or 7 lines)'
    );
  }

  return lines;
};

// Validate line 1
const createAndValidateLine1 = line1 => {
  const coords = line1.split(' ');
  if (coords.length !== 2) {
    throw new Error('The first line must be 2 numbers seperated by a space');
  }
  const x = validateLine1Coord(coords, 0, 'first');
  const y = validateLine1Coord(coords, 1, 'second');
  return {
    x,
    y
  };
};

const validateLine1Coord = (coords, index, desc) => {
  const coord = parseInt(coords[index], 10);
  if (Number.isNaN(coord)) {
    throw new Error(`In the first line, the ${desc} coordinate is not numeric`);
  }
  if (coord < minCoordSize) {
    throw new Error(
      `In the first line, the ${desc} coordinate cannot be less than ${minCoordSize.toString()}`
    );
  }
  if (coord > maxCoordSize) {
    throw new Error(
      `In the first line, the ${desc} coordinate cannot be greater than ${maxCoordSize.toString()}`
    );
  }
  return coord;
};

// Validate the 2 lines for the rover position and instructions
const createAndValidateRoverItem = (
  positionText,
  instructionsText,
  lineNo
) => {
  const initialPosition = createAndValidateRoverPosition(positionText, lineNo);
  const instructions = createAndValidateRoverInstructions(instructionsText, lineNo);
  return { initialPosition, instructions };
};

// Validate the rover position
const createAndValidateRoverPosition = (positionText, lineNo) => {
  const positions = positionText.split(' ');
  if (positions.length !== 3) {
    throw new Error(
      `In line ${lineNo.toString()}, the value must be 2 numbers and a letter representing a cardinal compass points (N, E, S or W).`
    );
  }
  const x = validateRoverPositionCoord(positions, 0, 'first', lineNo);
  const y = validateRoverPositionCoord(positions, 1, 'second', lineNo + 1);
  positions[2] = positions[2]
    .toString()
    .toUpperCase()
    .trim();
  if (!['N', 'E', 'S', 'W'].includes(positions[2])) {
    throw new Error(
      `In line ${lineNo.toString()}, the cardinal compass point is incorrect, it must be either an N, E, S or W.`
    );
  }
  return { x, y, compassPoint: positions[2] };
};

const validateRoverPositionCoord = (positions, index, desc, lineNo) => {
  const coord = parseInt(positions[index], 10);
  if (Number.isNaN(coord)) {
    throw new Error(
      `In line ${lineNo.toString()}, the ${desc} coordinate is not numeric`
    );
  }
  if (coord < 0) {
    throw new Error(
      `In line ${lineNo.toString()}, the ${desc} coordinate cannot be less than 0}`
    );
  }
  if (coord > maxCoordSize) {
    throw new Error(
      `In line ${lineNo.toString()}, the ${desc} coordinate cannot be greater than ${maxCoordSize.toString()}`
    );
  }
  return coord;
};

// Validate the rover instructions
const createAndValidateRoverInstructions = (instructionsText, lineNo) => {
  const instructions = [...instructionsText.toUpperCase()];
  const validMovements = ['L', 'R', 'M'];
  instructions.forEach(movement => {
    if (!validMovements.includes(movement)) {
      throw new Error(
        `In line ${lineNo.toString()}, the movement instructions contains an invalid value (each letter can only be L, R or M).`
      );
    }
  });
  return instructions;
};
