import { processRoverInstructions } from './roverMovements';
import { roverMovementsTestObject } from '../../App.test';

describe('Create Movement Object', () => {
  it('validate and create successfull object', () => {
    const instructionsText = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
    const newState = processRoverInstructions(instructionsText);
    expect(newState).toEqual(roverMovementsTestObject);
  });
});
