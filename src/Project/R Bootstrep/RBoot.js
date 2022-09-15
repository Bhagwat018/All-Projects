import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Offcanvas } from 'bootstrap'
import R2 from './R2'

const RBoot = () => {
  let[staate,setstaate]=useState()
    let[state,setstate]=useState({
        user:{
          username: "",
            email: "",
            password:""
        }
    })

    let register=(e)=>{
      e.preventDefault();
      console.log(state.user)
      // setstaate("")
   
       }
    let updatedinputed=(e)=>{
        setstate({
            ...state,
            user:{
                ...state.user,
                [e.target.name]: e.target.value
            }
        })
    }
    
  
  return (
    <>
      {/* navbar  */}
      <Navbar collapseOnSelect expand="sm" bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          <R2></R2>
      <Container className="my-3">
        <Row>
          <Col xs={6} className={'text-white'}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              itaque, eveniet corporis numquam modi velit hic sapiente iure
              natus, consequuntur aperiam sed! Modi, nesciunt? Tempore sint enim
              quisquam nesciunt. Aspernatur doloremque deserunt modi?
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Card.Header
            className="p-3 mb-3"
            style={{ backgroundColor: 'orange' }}
          >
            <h4>Registesion</h4>
          </Card.Header>
          <Card.Body style={{ backgroundColor: 'light' }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control name='username' onChange={updatedinputed} type="text" value={staate} placeholder="UserName"></Form.Control>
              </Form.Group>
             
              <Form.Group className="mb-3" >
                <Form.Control type="email"  name='email' onChange={updatedinputed} value={staate} placeholder="email"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                 name='password' onChange={updatedinputed}
                  type="password"
                  value={staate}
                  placeholder="password"
                ></Form.Control>
                 <Form.Control className='mt-3'
                 name='date' onChange={updatedinputed}
                  type="date"
                  value={staate}
                  placeholder="date"
                ></Form.Control>
              </Form.Group>
              <Button className='m-3' variant="warning" onClick={register} type="sumit">
                Sumit
              </Button>
            </Form>
          </Card.Body>
        </Row>
      </Container>
     
    
    </>
  )
}

export default RBoot
