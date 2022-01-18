import { useState } from "react"
import { Container, Label, Input, Form, Submit } from "./style"


export const Contact = () => {

    const [inputs, setInputs] = useState({
        email:""
    })

    const handleInputChange = (event)=>{
        setInputs({
            email: event.target.value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return (
        <Container>
           <Form onSubmit={handleSubmit}>
               <div>
                   <Label htmlFor="email">Cadastre seu email para mais informações</Label>
                   <Input type="email" name="email" onChange={handleInputChange} value={inputs.email}></Input>
                   <Submit type="submit"></Submit>
               </div>
           </Form>
        </Container>
    )
}