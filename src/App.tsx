import React from "react";
import styled from "styled-components";
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
      <Title color="green">Title</Title>
    </AppWrapper>
  );
}

export default App;
