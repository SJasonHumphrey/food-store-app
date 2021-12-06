import React,{ useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
    <GlobalStyle/>
    <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
    <NavBar />
    <Banner />

    <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
