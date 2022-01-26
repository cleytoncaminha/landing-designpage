import styled from "styled-components";
import First from "../../assets/first.jpg";
import Second from "../../assets/second.jpg";
import Third from "../../assets/third.jpg";
import Fourth from "../../assets/fourth.jpg";


export const Total = styled.div`
display:flex;
justify-content: space-around;
margin-top: 5%;
@media (max-width: 768px) {
    display:block;
  }
`

export const Card = styled.div`
color: white;
width: 18vw;
height: 40vh;
border-radius: 20px;
box-shadow: 20px 20px 20px -10px rgba(37, 38, 148, 0.5);
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
@media (max-width: 768px) {
    width: 70vw;
    margin: auto;
    margin-bottom: 5%;
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
@media (max-width: 768px) {
    font-size: 5vw;
  }
`

export const Text = styled.div`
width: 70%;
margin: auto;
text-align: center;
font-size: 1vw;
padding: 5%;
@media (max-width: 768px) {
    font-size: 3vw;
  }
`

export const Content = styled.div`
opacity:0;
transition: all 1s;
width: 100%;
background-color: rgba(37, 38, 148, 0.5);
${Card}:hover & {
    opacity:1;
  }
  @media (max-width: 768px) {
    height: 80%;
  }

`