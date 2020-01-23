import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RoverInstructionsOutput } from './RoverInstructionsOutput';
import { roverMovementsTestObject } from '../../App.test';

describe('RoverInstructionsOutput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverInstructionsOutput roverMovements={roverMovementsTestObject} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Output', () => {
    const { getByText } = render(<RoverInstructionsOutput roverMovements={roverMovementsTestObject} />);
    const buttonElement = getByText(/Output/i);
    expect(buttonElement).toBeInTheDocument();
  });
});