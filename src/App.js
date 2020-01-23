import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import RoverInstructionsPage from "./features/roverInstructions/RoverInstructionsPage";

function App() {
  return (
    <Container className='main'>
      <h2>Rover Instructions</h2>
      <RoverInstructionsPage />
    </Container>
  );
}

export default App;
