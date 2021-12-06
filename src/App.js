import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

function App() {
  return (
    <>
    <GlobalStyle/>
    <NavBar />
    <Banner />
    <Menu/>
    </>
  );
}

export default App;
