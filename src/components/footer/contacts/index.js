import { useState } from "react"
import { Container, Label, Input, Form, Submit, Title, Icon,MenuFooter, List } from "./style"
import { MdLight, MdOutlineEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsInstagram } from 'react-icons/bs'

export const Contact = () => {

    const [inputs, setInputs] = useState({
        email: ""
    })

    const handleInputChange = (event) => {
        setInputs({
            email: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Container>
            <div>
                <Title>AGENDE UMA REUNIÃO</Title>

                <Form onSubmit={handleSubmit} id="Contate-nos">
                    <div>
                        <Label htmlFor="email">Cadastre seu email:</Label>
                        <Input type="email" name="email" onChange={handleInputChange} value={inputs.email}></Input>
                        <Submit type="submit"></Submit>
                    </div>
                </Form>
            </div>
            <MenuFooter>
                <Icon><MdLight></MdLight></Icon>
                <List>
                    <li><IoLogoWhatsapp></IoLogoWhatsapp> (xx) xxxx - xxxx</li>
                    <li><BsInstagram></BsInstagram> /ficticio</li>
                    <li><MdOutlineEmail></MdOutlineEmail> ficticio@ficticio.com</li>
                </List>
            </MenuFooter>
        </Container>
    )
}