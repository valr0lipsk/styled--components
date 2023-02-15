import React from "react";
import styled from "styled-components";
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
        <Title color="green">Console cmd 2022. Valr.lipsk</Title>
      </Flex>
    </AppWrapper>
  );
}

export default App;
