import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RoversCoverageSection } from './RoversCoverageSection';
import { roverMovementsTestObject } from '../../App.test';

describe('RoverInstructionsOutput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoversCoverageSection roverMovements={roverMovementsTestObject} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Output', () => {
    const { getByText } = render(<RoversCoverageSection roverMovements={roverMovementsTestObject} />);
    const buttonElement = getByText(/Visual Coverage/i);
    expect(buttonElement).toBeInTheDocument();
  });
});