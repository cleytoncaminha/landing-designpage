import styled from "styled-components";

export const Container = styled.div`
background-color: #1C1240;
display:flex;
justify-content: space-between;
@media (max-width: 600px) {
    display:block;
  }
`

export const Form = styled.form`
margin-left: 2%;
`

export const Label = styled.label`
color: white;
font-size: 2vh;
margin-right: 20px;
`

export const Input = styled.input`
font-size: 2vh;
border-radius: 5px;
`

export const Submit = styled.input`
font-size: 2vh;
border-radius: 5px;
margin-left: 2px;
cursor: pointer;
padding: 2px;
`

export const Title = styled.div`
color: white;
margin-left: 2%;
font-size: 2.5vh;
`
export const Icon = styled.div`
color: white;
font-size: 6vh;
padding: 5px;
`
export const MenuFooter = styled.div`
display: flex;
color: white;
justify-content: center;
align-items: center;
`

export const List = styled.ul`
list-style: none;
align-items: center;
align-content: center;
font-size: 2vh;
padding: 5px;
`