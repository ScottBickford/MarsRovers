import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { roverMovementsTestObject } from '../../App.test';
import { RoverTotalCoverage } from './RoverTotalCoverage';

describe('RoverInstructionsInput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverTotalCoverage roverMovements={roverMovementsTestObject} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Input', () => {
    const { getByText } = render(<RoverTotalCoverage roverMovements={roverMovementsTestObject} />);
    const buttonElement = getByText(/Total Coverage/i);
    expect(buttonElement).toBeInTheDocument();
  });
});