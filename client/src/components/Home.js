import React from 'react';
import { Header, Container, Image, Button } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const Home = () => (
  <Container>
    <Header as="h1" textAlign="center">Home</Header>
    <Button 
      as={Link} 
      to={`/departments`} 
      color='blue'
    >
     View All Deparments
    </Button>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image src="https://image.freepik.com/free-vector/rocket-shop-store-logo-vector-icon-download_7688-349.jpg" alt="logo" />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h3>Welcome to my department store. This was built with a Ruby on Rails back-end and a React.js front-end.
        The main purpose of this website is to create CRUD actions that mimic an Amazon type of website.
      </h3>
      <p>This web application uses Faker data in order to generate different deparments and products.
        it also uses loremflickr in order to generate random images.
        It uses a semantic-react css framework in order to streamline css production and give it a consistent UI.
      </p>
    </div>
  </Container>
)

export default Home;