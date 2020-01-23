import React from 'react'
import { RoverCoverageTable } from './RoverCoverageTable';

export const RoverTotalCoverage = ({ roverMovements }) => {
  const positions = [];
  roverMovements.rovers.forEach(rover => {
    positions.push(...rover.positions);
  })
  return (
    <div style={{ paddingTop: 15 }}>
      <label>Total Coverage</label>
      <RoverCoverageTable upperRightCoords={roverMovements.upperRightCoords} positions={positions} />
    </div>
  )
}
