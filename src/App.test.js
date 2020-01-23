import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders input', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Input/i);
  expect(headerElement).toBeInTheDocument();
});

export const roverMovementsTestObject = {
  rovers: [
    {
      id: 1,
      initialPosition: { compassPoint: 'N', x: 1, y: 2 },
      instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
      positions: [
        {
          compassPoint: 'N',
          error: null,
          x: 1,
          y: 2
        },
        {
          compassPoint: 'W',
          error: null,
          x: 1,
          y: 2
        },
        {
          compassPoint: 'W',
          error: null,
          x: 0,
          y: 2
        },
        {
          compassPoint: 'S',
          error: null,
          x: 0,
          y: 2
        },
        {
          compassPoint: 'S',
          error: null,
          x: 0,
          y: 1
        },
        {
          compassPoint: 'E',
          error: null,
          x: 0,
          y: 1
        },
        {
          compassPoint: 'E',
          error: null,
          x: 1,
          y: 1
        },
        {
          compassPoint: 'N',
          error: null,
          x: 1,
          y: 1
        },
        {
          compassPoint: 'N',
          error: null,
          x: 1,
          y: 2
        },
        {
          compassPoint: 'N',
          error: null,
          x: 1,
          y: 3
        }
      ]
    },
    {
      id: 2,
      initialPosition: {
        compassPoint: 'E',
        x: 3,
        y: 3
      },
      instructions: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
      positions: [
        {
          compassPoint: 'E',
          error: null,
          x: 3,
          y: 3
        },
        {
          compassPoint: 'E',
          error: null,
          x: 4,
          y: 3
        },
        {
          compassPoint: 'E',
          error: null,
          x: 5,
          y: 3
        },
        {
          compassPoint: 'S',
          error: null,
          x: 5,
          y: 3
        },
        {
          compassPoint: 'S',
          error: null,
          x: 5,
          y: 2
        },
        {
          compassPoint: 'S',
          error: null,
          x: 5,
          y: 1
        },
        {
          compassPoint: 'W',
          error: null,
          x: 5,
          y: 1
        },
        {
          compassPoint: 'W',
          error: null,
          x: 4,
          y: 1
        },
        {
          compassPoint: 'N',
          error: null,
          x: 4,
          y: 1
        },
        {
          compassPoint: 'E',
          error: null,
          x: 4,
          y: 1
        },
        {
          compassPoint: 'E',
          error: null,
          x: 5,
          y: 1
        }
      ]
    }
  ],
  upperRightCoords: {
    x: 5,
    y: 5
  }
};