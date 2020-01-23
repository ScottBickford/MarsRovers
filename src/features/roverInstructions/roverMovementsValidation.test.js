import { createAndValidateInstructions } from './roverMovementsValidation';

describe('Create Movement Validation', () => {
  it('validate and create successfull object', () => {
    const instructionsText = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
    const newState = createAndValidateInstructions(instructionsText);

    const expected = {
      rovers: [
        {
          id: 1,
          initialPosition: { compassPoint: 'N', x: 1, y: 2 },
          instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
        },
        {
          id: 2,
          initialPosition: {
            compassPoint: 'E',
            x: 3,
            y: 3
          },
          instructions: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
        }
      ],
      upperRightCoords: {
        x: 5,
        y: 5
      }
    };
    expect(newState).toEqual(expected);
  });

  validateErrorTest('no instructions', '');
  validateErrorTest('validate and fail less than 3 lines', '5 5\n1 2 N');
  validateErrorTest('validate and fail on incorrect number of lines', '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM\nExtra Line');
  validateErrorTest('first line incorrect', '5DD5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM');
  validateErrorTest('first rover instruction incorrect', '5DD5\n12 RN\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM');
  validateErrorTest('second rover instruction incorrect', '5DD5\n1 2 N\nLEMLMLMLMM\n3 3 E\nMMRMMRMRRM');
});

function validateErrorTest(desc, instructions) {
  it(desc, () => {
    let error = null;
    try {
      createAndValidateInstructions(instructions);
    } catch (ex) {
      error = ex.message;
    }
    expect(error).toBeTruthy();
  });
}