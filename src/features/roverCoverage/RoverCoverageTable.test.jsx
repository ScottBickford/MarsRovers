import React from 'react';
import renderer from 'react-test-renderer';
import { roverMovementsTestObject } from '../../App.test';
import { RoverCoverageTable } from './RoverCoverageTable';

describe('RoverInstructionsOutput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverCoverageTable upperRightCoords={roverMovementsTestObject.upperRightCoords} positions={roverMovementsTestObject.rovers[0].positions} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});