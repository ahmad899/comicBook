import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    width:100%; 
`;
const Ul = styled.ul`
    display:flex;
    justify-content:space-between;
    width:50vh;
    list-style:none;
    padding-left:0;
    
    @media(max-width: 800px){
        width:90%;
    }
`;
const activeClassName = 'active';
const NvLink = styled(NavLink).attrs({ activeClassName: 'active' })`
    
    text-decoration:none;
    color:#777777;
    margin:5px auto;
    :hover,&.${activeClassName} {
        color:white;
        background: #F15454;
        box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
        border-radius: 19px;
    }
    :active{
        color:black;
    }
    
`;

const Li = styled.li`
    padding:10px 20px;
`;





function NavigationBar() {
    return (
        <Nav>
            <Ul>
                <NvLink to='/year' ><Li>Year</Li></NvLink>
                <NvLink to='/Writer'><Li>Writer</Li></NvLink>
                <NvLink to='/Artist'><Li>Artist</Li></NvLink>
                <NvLink to='/Owner'><Li>Owner</Li></NvLink>
                <NvLink to='/Random'><Li>Random</Li></NvLink>
            </Ul>
        </Nav>
    )
}

export default NavigationBar
