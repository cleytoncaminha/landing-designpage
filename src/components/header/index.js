import react from "react"
import { Item, List, Header,Title,Text, Container, Button, Rotation, Link } from "./style"

const menuItems = ['Quem Somos', 'Projetos', 'Depoimentos', 'Contate-nos']

export const Menu = () => {
    return (
        <div>
            <Header>
            <List>  
            {
                menuItems.map((menuItem, index) => {
                    return <Item key={index}><p>{menuItem}</p></Item>
                })
            }
            </List>
            <Container>
            <Title>INTERIOR DESIGN</Title>
            <Text>Tenha a casa que você sempre sonhou, não aceite menos que o MÁXIMO para o seu lugar afinal de contas é onde você vai morar.</Text>
            <Rotation><Button><Link href="#">‣</Link></Button></Rotation>
            </Container>
            </Header>
        </div>
    )
}