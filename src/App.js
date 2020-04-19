import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import CalendarPanel from "./components/CalendarPanel/CalendarPanel";
import styled from "styled-components";

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperInner = styled.div`
  display: grid;
  grid-template-columns: 265px 1fr;
  height: calc(100vh - 30px);
`;

function App() {
  return (
    <AppWrapper>
      <Wrapper>
        <Header />
        <WrapperInner>
          <SidePanel />
          <CalendarPanel />
        </WrapperInner>
      </Wrapper>
    </AppWrapper>
  );
}

export default App;
