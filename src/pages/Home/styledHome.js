import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Div = styled.div`

`;


export const P1 = styled.p`
    color: #CCCCCC;
    font-weight: bold;
    font-size: 20px; 
`;

export const P2 = styled.p`
    color: #999999;
    font-weight: 500;
    font-size: 16px; 
`;


export const BookLink = styled(Link)`
    width:25vh;
    text-decoration:none;
    box-sizing:border-box;
    margin-right:90px;
`;


export const Img = styled.img`
 
`;

export const GroupDiv = styled.div`
    box-sizing:border-box;
`;
export const Span = styled.div`
padding-left:0;
color:#AAAAAA;
font-size: 25px;
font-weight: normal;
margin-bottom:40px;
font-weight:bolder; 
`;

export const Hr = styled.hr`
     position:absolute;
    border: 2px solid #535353;
    margin-top:450px;
    width:14%;
    margin-bottom:50px; 
`;
export const Ul = styled.ul`
    padding:0;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style:none;
    
`;

export const Li = styled.li`
   
    margin-right:36px;
    width:200px;
    height:500px;
`;