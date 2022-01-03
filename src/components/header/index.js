import react from "react"
import { Item, List, Header,Text } from "./style"

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
            <Text>Tenha a casa que você sempre sonhou</Text>
            </Header>
        </div>
    )
}