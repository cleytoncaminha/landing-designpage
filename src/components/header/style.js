import styled from "styled-components";
import headerImage from "../../assets/header.jpg"

export const Header = styled.header`
background: url(${headerImage});
background-size: 100% 100%;
width: 100vw;
height: 80vh;
`

export const List = styled.ul`
list-style: none;
display: flex;
justify-content: flex-end;
align-items: center;
align-content: center;
gap: 1%;
font-size: 1.5rem;
margin-right: 10%;
`

export const Item = styled.li`
color: black;
border-radius: 8px;
padding:0.5%;
letter-spacing: 1px;
text-align: center;
box-sizing: border-box;
margin-top: 1%;
font-weight: 600;
transition: all 400ms ease; 
&:hover{
  background-color: rgba(28,18,64,0.5);
  cursor: pointer;

`
export const Text = styled.div`
color:#CFDCE8;
text-align: center;
font-size: 10vh;
margin-top: 10%;
background-color: rgba(28,18,64,0.5);
width: 50%;
margin-left: auto;
margin-right: auto;
border-radius: 8px;
`
