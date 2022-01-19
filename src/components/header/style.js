import styled, { keyframes } from "styled-components";
import headerImage from "../../assets/header.jpg"

const margin = keyframes`
  
  0% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(20px);
    
  }

  100% {
    transform: translateX(10px);
    
  }
`;

export const Header = styled.header`
background: url(${headerImage});
background-size: 100% 100%;
height: 100vh;
`

export const List = styled.ul`
list-style: none;
display: flex;
justify-content: flex-end;
align-items: center;
align-content: center;
gap: 1%;
font-size: 1rem;
margin-right: 5%;
`

export const Item = styled.li`
color:white;
border-radius: 8px;
padding:0.5%;
letter-spacing: 1px;
text-align: center;
box-sizing: border-box;
margin-top: 1%;
transition: all 400ms ease; 
&:hover{
  background-color: rgba(250,250,250,0.5);
  cursor: pointer;

`
export const Title = styled.div`
color:white;
text-align: center;
font-size: 8vh;
letter-spacing: 8px;
font-weight: 600;
`

export const Text = styled.p`
color:white;
text-align: center;
font-size: 1.5vh;
letter-spacing: 3px;
width: 50%;
margin: auto;
`
export const Container = styled.div`
width: 50%;
margin-top: 12%;
margin-left: 5%;
text-align: center;
`
export const Rotation = styled.div`
transform: rotate(90deg);
width: 30%;
margin: auto;
`
export const Button = styled.div`
color: white;
font-size: 8vh;
animation: ${margin} 1500ms infinite;
`
export const Link = styled.a`
color: white;
cursor: pointer;
`

export const Icon = styled.div`
color: white;
font-size: 8vh;
float: left;
margin-left: 3%;
`