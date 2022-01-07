import aboutImage from "../../../assets/about.jpg"
import { Cards } from "../../cards/card"
import { Container, Image, Text, H1, DivImage, Total, Button } from "./style"

export const About = () => {
    return (
        <div>
            <Total>
                <Container id="Quem Somos">
                    <DivImage><Image src={aboutImage}></Image></DivImage>
                    <Text> <H1>Quem Somos ?</H1>
                    <p> Somos uma empresa com mais de 300 projetos, e estamos aqui para mostrar que por mais que você pense que o design não é importante ele vai sim mudar toda a sua estrutura de vida desde gastar menos tempo a se sentir bem no local onde você come, estuda, trabalha ou se diverte nos da Intelligence Design estamos aqui para garantir que o interior seja não somente belo aos olhos, mas também que possa melhorar a sua qualidade de vida.</p>
                    <Button>Veja nossos Projetos</Button>
                    </Text>
                </Container>
                <Cards></Cards>
            </Total>
        </div>
    )
}