import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from '../components/carousel';
import Works from '../components/works';
import {
  Container
} from 'reactstrap';

const Home = () => {
  return (
    // <div className="container">
    //   <Slider />
    // </div>
    <Container>
      <Slider />
      <Works />

    </Container>
  );
};

export default Home;