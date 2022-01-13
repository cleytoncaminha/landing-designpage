import react, { useState } from "react"
import Img1 from "../../../assets/img1.jpg"
import Img2 from "../../../assets/img2.jpg"
import Img3 from "../../../assets/img3.jpg"
import Img4 from "../../../assets/img4.jpg"
import Img5 from "../../../assets/img5.jpg"
import Img6 from "../../../assets/img6.jpg"
import Modal from "react-modal/lib/components/Modal"
import { Container, ContainerImg, FlexContainer, H1 } from "./style"



export const Projects = () => {

    const [ image, setImage ] = useState("")
    const [ modalOpen, setModalOpen] = useState(false)

    const data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id:6,
            imgSrc: Img6
        }
    ]

    const getImg= (imgSrc)=>{
        setImage(imgSrc)
        setModalOpen(true)
    }

    const handleCloseModal = ()=>{
        setModalOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
        }
    }


    return (
        <Container id= "Projetos">

        <H1>Conheça Nossos Projetos</H1>
            <FlexContainer>
            {data.map((item, index)=>{
                return(
                    <div key={index} onClick={()=>getImg(item.imgSrc)}>
                        <ContainerImg src={item.imgSrc}></ContainerImg>
                    </div>
                )
            })}
        </FlexContainer>
            <Modal 
            isOpen={modalOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
              <div> <ContainerImg src={`${image}`} ></ContainerImg></div> 
            </Modal>
        </Container>
    );
}


