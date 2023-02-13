import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #000;
`;
function App() {
  return (
    <AppWrapper>
      <div className="App"></div>
    </AppWrapper>
  );
}

export default App;
