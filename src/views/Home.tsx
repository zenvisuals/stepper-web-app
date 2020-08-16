import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <Wrapper>
    <Link to="/page/1">
      <Button>New Request</Button>
    </Link>
  </Wrapper>
);

export default Home;
