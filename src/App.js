import React from 'react';
import './App.css';
import{Nav,Navbar,Container,Dropdown,DropdownButton,Card,Button}from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';


function App() {
  return (
  <div className="App">
  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h2>Travel-Go </h2></Navbar.Brand>
  <Nav className="mx-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Booking</Nav.Link>
  <Nav.Link href="#pricing">Trips</Nav.Link>
  </Nav>
  </Container>
  </Navbar>
  <h1 style={{color:'red', fontSize:'72'}}>Travel-Go</h1>
  <Carousel>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Favorite hotels around the globe</h2>
      <p>Compare deals to find the right package.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/double-bedroom-with-sea-view-picture-id1299710067?k=20&m=1299710067&s=612x612&w=0&h=Qf0L2rnXq8hkrPfv_pX-HxcN-xEDfkBqRl869FlTyLA="
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2>Best Trips</h2>
      <p>Find the best things to do for your trip.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>Best Hotels Rooms</h2>
      <p>Book the best hotels roomw with best prices</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br></br>
<h1>Where are you staying?</h1>
<>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Destination
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Depart destination
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Arrive Destination </Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>

  <DropdownButton
    id="dropdown-button-dark-example2"
    variant="secondary"
    menuVariant="dark"
    title="Date"
    className="mt-2"
  >
    <Dropdown.Item href="#/action-1" active>
      Depart Date 
    </Dropdown.Item>
    <Dropdown.Item href="#/action-2">Arrive Date </Dropdown.Item>
    
  </DropdownButton>
</>
<div className='cards'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Beach Club By Haadtien : 485 $
</Card.Title>
    <Card.Text>
    19/9 Moo 3, Haad Tien, Ko Tao 84360

    </Card.Text>
    <Button variant="primary">Book Now </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Hotel Indigo Bali Seminyak Beach : 350$

</Card.Title>
    <Card.Text>
    Jl. Camplung Tanduk No. 10, Denpasar

  
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>SLS Cancun : $209/night

</Card.Title>

    <Card.Text>
    <p>Boulevard Kukulcan km 1 Zona Turistica Puerto Cancun Lote 1 02 Uc 1 Mz 27, 77500 Cancún, Quintana Roo </p>
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
</div>
      
    </div>
  );
}

export default App;
