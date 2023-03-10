import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #000;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Console cmd 2023. Valr.lipsk</Title>
      </Flex>
      <Flex direction="column" margin="1em 0">
        <Console  />
        <Button alignSelf="flex-end" outlined>Send</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
