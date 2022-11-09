import React from "react";
import logo from "./logo.svg";
import Styled from "styled-components";
import "./App.css";

const Container = Styled.div` text-align:center`;

const Header = Styled.header`
  background-color: #282c34 !important;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size:calc(10px+2vmin);
  color:white;

`;

function App() {
  return (
    //<div className="App">
    <Container>
      {/*<header className="App-header">*/}
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
      {/*</header>*/}
    </Container>
    //</div>
  );
}

export default App;
