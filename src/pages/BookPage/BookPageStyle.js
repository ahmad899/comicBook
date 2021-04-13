import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
    margin:30px;
    color:#CCCCCC;
`;

export const LinkSpan = styled(Link)`
    float:left;
    margin-bottom:30px;
    color:#777777;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
    :hover{
        cursor: pointer;
    }
 
`;
export const ImgInfoWrapp = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  width: 100%;
`;

export const BookImage = styled.img`
    margin-right:30px;
    width:340px;

`;

export const ImageInfoDiv = styled.div`
    flex:1;
    margin-top:-20px;
`;

export const Hr = styled.hr`
    border: 1px solid #535353;
    margin:50px 0;
    
`;
export const P = styled.p`
    color:#999999;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;

export const PSpan = styled.span`
    color:#CCCCCC;
    font-size: 16px;
`;
export const StarDiv = styled.div`
    display:inline-block;
    margin-left:20px;
`;

export const RandomBookWrrap = styled.div`
display: flex;
flex-flow: row wrap;
justify-content:space-between;
`;

export const Label = styled.label`
margin-bottom:30px;
`;


export const RandomBookDiv = styled.div`
    display:flex;
    margin-top:40px;
`;

export const BookLink = styled(Link)`
    width:22vh;
    text-decoration:none;
    color:#CCCCCC;
`;

