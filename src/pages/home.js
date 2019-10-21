import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from '../components/carousel';
import Works from '../components/works';
import Section from '../components/section';
import { Helmet } from "react-helmet";

import {
  Container
} from 'reactstrap';

const Home = () => {
  return (

    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Mistory App</title>
      </Helmet>
      <Slider />
      <Works />
      <Section />
    </Container>
  );
};

export default Home;