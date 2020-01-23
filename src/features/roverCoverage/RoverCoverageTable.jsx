import React from 'react';
import { Table } from 'semantic-ui-react';

export const RoverCoverageTable = ({ upperRightCoords, positions }) => {
  const createTable = () => {
    let table = [];
    for (let y = 0; y <= upperRightCoords.y; y++) {
      let children = [];
      for (let x = 0; x <= upperRightCoords.x; x++) {
        const markSquare = positions.some(
          p => p.x === x && upperRightCoords.y - p.y === y // The table is inverted on the y axis, which is why we use upperRightCoords.y - p.y 
        );
        children.push(
          <Table.Cell
            key={x}
            style={{ backgroundColor: markSquare ? 'lightblue' : 'white' }}
          />
        );
      }
      table.push(<Table.Row key={y} children={children} />);
    }

    return table;
  };

  return (
    <Table celled collapsing>
      <Table.Body>{createTable()}</Table.Body>
    </Table>
  );
};
