import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RoverCoverage } from './RoverCoverage';
import { roverMovementsTestObject } from '../../App.test';

describe('RoverInstructionsInput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverCoverage upperRightCoords={roverMovementsTestObject.upperRightCoords} rover={roverMovementsTestObject.rovers[0]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Input', () => {
    const { getByText } = render(<RoverCoverage upperRightCoords={roverMovementsTestObject.upperRightCoords} rover={roverMovementsTestObject.rovers[0]} />);
    const buttonElement = getByText(/Rover 1 Coverage/i);
    expect(buttonElement).toBeInTheDocument();
  });
});