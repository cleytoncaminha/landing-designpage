import { useState } from 'react'
import { MdLight } from 'react-icons/md'
import { Item, List, Header, Title, Text, Container, Button, Rotation, Link, Icon, IconMenu,Img } from "./style"
import MenuImg from '../../assets/menu.png'

const menuItems = ['Quem Somos', 'Projetos', 'Contate-nos']

export const Menu = () => {
    const [ active, SetActive ] = useState(false)

    const ToggleMode = () => {
        SetActive(!active)
    }

    return (
        <div>
            <Header id="start">
                <Icon><Link href="#start"><MdLight></MdLight></Link></Icon>
                <IconMenu menu={active ? 'active' : ''} onClick= {ToggleMode}>
                    <Img src={MenuImg}></Img>
                </IconMenu>
                    <List menu={active ? 'Open' : 'Close'} >
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