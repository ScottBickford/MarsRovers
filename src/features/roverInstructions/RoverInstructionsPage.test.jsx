import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RoverInstructionsPage from './RoverInstructionsPage';

describe('RoverInstructionsPage', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RoverInstructionsPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes all props to Input', () => {
    const { getByText } = render(<RoverInstructionsPage />);
    const buttonElement = getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
  });
});