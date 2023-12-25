import React from 'react'
import "./ListProduct.css"
import {Button,Row,Col,Container,Image} from "react-bootstrap";
const ListProduct = (props) => {
    return (
    <Container>
            <Row>
                <Col xl={12}>
                    <div className='combo'>
                        <Image src={props.image} fluid />
                        <div className='tog'>
                            <h5>${props.price}</h5>
                            <Button bg="info" data-bs-theme="dark">Add</Button>{' '}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    
      
    )
}

export default ListProduct