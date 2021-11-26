import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';


function App() {
  

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Pagina inicial</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Sobre</Nav.Link>
        <Nav.Link href="#link">Carrinho</Nav.Link>
        <Nav.Link href="#link">Cadastro</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-97-masculino-921826-015-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Loja de tênis</h3>
      <p>Bem-vindo a loja de tênis</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-plus-masculino-604133-050-3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Loja de tênis</h3>
      <p>Bem-vindo a loja de tênis</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://artwalk.vteximg.com.br/arquivos/ids/230567-1000-1000/Tenis-Air-Jordan-3-Retro-Masculino-Cinza.jpg?v=637479595132270000"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Loja de tênis</h3>
      <p>Bem-vindo a loja de tênis</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="d-flex justify-content-around">
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="https://droper-media.s3.amazonaws.com/201202120344739.jpeg" />
    <Card.Body>
      <Card.Title>Nike Dunk Low</Card.Title>
      <Card.Text>
        Tênis super confortavel
      </Card.Text>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-unissex-BQ6817-010-1-11632839318.jpg" />
    <Card.Body>
    <Card.Title>Nike Dunk Low</Card.Title>
      <Card.Text>
        Tenis super confortavel
      </Card.Text>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </Card.Body>
  </Card>
</div>
  <div className="d-flex justify-content-around">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://droper-media.s3.amazonaws.com/201202120344739.jpeg" />
    <Card.Body>
      <Card.Title>Nike Dunk Low</Card.Title>
      <Card.Text>
        Tênis super confortavel
      </Card.Text>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-unissex-BQ6817-010-1-11632839318.jpg" />
    <Card.Body>
    <Card.Title>Nike Dunk Low</Card.Title>
      <Card.Text>
        Tenis super confortavel
      </Card.Text>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </Card.Body>
  </Card>
  
</div>
    </div>
  )
}

export default App
