import { TiLightbulb } from 'react-icons/ti'
import { AiFillFund, AiFillCrown, AiOutlineBank } from 'react-icons/ai'
import { Card, Icon, Text, Title, Total, Content } from './style'

export const Cards = () => {
    return (
        <Total>
            <Card>
                <Content>
                    <Icon><TiLightbulb></TiLightbulb></Icon>
                    <Title>CRIATIVO</Title>
                    <Text>
                        <p>Eleve a criatividade a outro nível e impressione a todos que chegarem</p>
                    </Text>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon><AiFillFund></AiFillFund></Icon>
                    <Title>FUNCIONAL</Title>
                    <Text>
                        <p>O seu ambiente altamente funcional e produtivo</p>
                    </Text>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon><AiFillCrown></AiFillCrown></Icon>
                    <Title>BONITO</Title>
                    <Text>
                        <p>Tenha seu lugar bonito para e impressione a todos</p>
                    </Text>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon><AiOutlineBank></AiOutlineBank></Icon>
                    <Title>INTELIGENTE</Title>
                    <Text>
                        <p>Organização inteligente que poupará muito tempo e dinheiro</p>
                    </Text>
                </Content>
            </Card>
        </Total>
    )
}