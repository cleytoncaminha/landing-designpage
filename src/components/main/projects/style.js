import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background-color: #EEEFF1;
@media (max-width: 768px) {
  height: 100%;
  }
`

export const FlexContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2%;
& :hover{
    opacity: 0.9;
}
@media (max-width: 768px) {
    display: block;
    width: 80%;
    margin: auto;
  }
`

export const ContainerImg = styled.img`
width: 100%;
height: 100%;
transition: all 500ms;
cursor: pointer;
border-radius: 2px;
@media (max-width: 768px) {
  height: 100%;
  }
`

export const H1 = styled.h1`
text-align: center;
font-size: 5vh;
margin-bottom: 2%;
`