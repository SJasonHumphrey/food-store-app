import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
}
h1, h2, h3 {
  font-family: 'Righteous', cursive;
}
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
      <h1>SliceLine</h1>
      Hello World!
    </div>
    </>
  );
}

export default App;