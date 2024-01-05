import React from 'react'
import { Card, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card style={{position:"absolute",top:"50%" ,left:"50%",transform:"translate(-50%,-50%)", width:"50%",height:"50%"}}>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>Cart</Card.Title>
          <Card.Text style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Item</span>
            <span>Price</span>
            <span>Quantity</span>
          </Card.Text>
          
        </Card.Body>
        <span style={{ fontWeight:"bold",marginLeft:"1rem"}}>Total</span>
        <Button variant="danger" style={{width:"50%",margin:"1rem auto"}}>Cancel</Button>
      </Card>
    </div>
  )
}

export default Cart