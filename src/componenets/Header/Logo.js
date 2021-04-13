import logo from '../../assests/images/Logo/Logo.png';
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Div = styled.div`
    top:0;
    width:100%;
    background-color:#535353;
`;

const Img = styled.img`
    margin:auto;
    padding:18px;
    :hover{
        cursor:pointer;
    }
`;

function Logo() {
    return (
        <Div>
            <Link to='/'><Img src={logo} alt='logo'></Img></Link>
        </Div>
    )
}

export default Logo
