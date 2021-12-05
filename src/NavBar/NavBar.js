import React from 'react';
import styled from "styled-components";
import { pizzaRed } from '../styles/colors';
import { Title } from '../styles/title';

const NavBarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502
`

export function NavBar(){
    return <NavBarStyled>
     <Logo>
         Sliceline 🍕
     </Logo>
    </NavBarStyled>;
}