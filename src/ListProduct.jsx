import React from 'react';
import { Card, Button } from "react-bootstrap"
const ListProduct = (props) => {
    return (
        <>
            <Card className='mx-5 my-5 d-inline-block' style={{ width: '25rem' }}>
                <Card.Img style={{padding:"2rem", borderRadius:"20px"}} variant="top" src={props.image} className=''/>
                <Card.Body style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                    <Card.Title>{props.price}</Card.Title>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ListProduct