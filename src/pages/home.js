import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from '../components/carousel';
import Works from '../components/works';
import Section from '../components/section';
import {
  Container
} from 'reactstrap';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Works />
      <Section />

    </Container>
  );
};

export default Home;