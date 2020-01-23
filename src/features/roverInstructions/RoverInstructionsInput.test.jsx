import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RoverInstructionsInput from './RoverInstructionsInput';

describe('RoverInstructionsInput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverInstructionsInput instructions='5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Input', () => {
    const { getByText } = render(<RoverInstructionsInput instructions='5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM' />);
    const buttonElement = getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
  });
});