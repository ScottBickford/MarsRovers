import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RoverInstructionsOutputItem from './RoverInstructionsOutputItem';
import { roverMovementsTestObject } from '../../App.test';

describe('RoverInstructionsOutputItem', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverInstructionsOutputItem rover={roverMovementsTestObject.rovers[0]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Input', () => {
    const { getByText } = render(<RoverInstructionsOutputItem rover={roverMovementsTestObject.rovers[0]} />);
    const buttonElement = getByText(/1 3 N/i);
    expect(buttonElement).toBeInTheDocument();
  });
});