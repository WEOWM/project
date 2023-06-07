import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
const DashBoard = () => {
  return (
    <div>
        <Container>
        <h3>Project</h3>
        <Row className='mt-4' >
            <Col md={3} className='shadow-sm' style={{height:"100px",backgroundColor:"#fff"}}>
                <p className='m-3' >Adidas Mobile</p>
            </Col>
            <Col md={3} className='shadow-sm' style={{height:"100px",backgroundColor:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <p>hjghjghg</p>
                <p>0</p>
            </Col>
            <Col md={3} className='shadow-sm' style={{height:"100px",backgroundColor:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <p>hjghjghg</p>
                <p>0</p>
            </Col>
            <Col md={3} className='shadow-sm' style={{height:"100px",backgroundColor:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <p>hjghjghg</p>
                <p>0</p>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default DashBoard