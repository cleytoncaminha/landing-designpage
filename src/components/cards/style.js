import styled from "styled-components";
import First from "../../assets/first.jpg";
import Second from "../../assets/second.jpg";
import Third from "../../assets/third.jpg";
import Fourth from "../../assets/fourth.jpg";


export const Total = styled.div`
display:flex;
justify-content: space-around;
margin-top: 5%;
`

export const Card = styled.div`
color: white;
width: 20vw;
height: 40vh;
border-radius: 20px;
box-shadow: 30px 30px 30px -20px #6B45F5;
padding: 2%;
&:nth-child(1){
    background: url(${First});
    background-size: cover;
}
&:nth-child(2){
    background: url(${Second});
    background-size: cover;
}
&:nth-child(3){
    background: url(${Third});
    background-size: cover;
}
&:nth-child(4){
    background: url(${Fourth});
    background-size: cover;
}
`

export const Icon = styled.div`
text-align: center;
font-size: 5vw;
`

export const Title = styled.h1`
text-align: center;
font-size: 2vw;
width:80%;
margin: auto;
`

export const Text = styled.div`
width: 70%;
margin: auto;
text-align: center;
font-size: 1vw;
padding: 5%;
`

export const Content = styled.div`
transform: translateY(150%);
opacity: 0;
transition: 0.3s;
background-color: rgba(37, 38, 148, 0.5);
${Card}:hover & {
    transform: translateY(0%);
    opacity:1;
  }

`