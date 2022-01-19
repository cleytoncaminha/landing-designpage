import { MdLight } from 'react-icons/md'
import { Item, List, Header, Title, Text, Container, Button, Rotation, Link, Icon } from "./style"

const menuItems = ['Quem Somos', 'Projetos', 'Contate-nos']

export const Menu = () => {
    return (
        <div>
            <Header id="start">
                    <Icon><Link href="#start"><MdLight></MdLight></Link></Icon>
                
                <List>
                    
                    {
                        menuItems.map((menuItem, index) => {
                            return <Item key={index}><Link href={`#${menuItem}`}>{menuItem}</Link></Item>
                        })
                    }
                </List>
                <Container>
                    <Title>INTERIOR DESIGN</Title>
                    <Text>Tenha a casa que você sempre sonhou, não aceite menos que o MÁXIMO para o seu lugar afinal de contas é onde você vai morar.</Text>
                    <Rotation><Button><Link href="#Quem Somos">‣</Link></Button></Rotation>
                </Container>
            </Header>
        </div>
    )
}