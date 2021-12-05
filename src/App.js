import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { NavBar } from './NavBar/NavBar';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  box-sizing: border-box;
}
h1, h2, h3 {
  font-family: 'Righteous', cursive;
}
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <NavBar />
    </>
  );
}

export default App;
