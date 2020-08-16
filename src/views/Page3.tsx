import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Spacer from '../components/Spacer';
import ProgressIndicator from '../components/ProgressIndicator';
import Button from '../components/Button';

const CURRENT_PAGE = 3;

const SuccessMessage = styled.h1`
  font-size: 4rem;
  color: blue;
  margin-left: auto;
  margin-right: auto;
`;

const CenterLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;

const WideButton = styled(Button)`
  width: 15rem;
`;

const Page3 = () => (
  <PageWrapper>
    <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
    <Spacer size={4} />
    <SuccessMessage>Success!</SuccessMessage>
    <Spacer size={4} />
    <CenterLink to="/">
      <WideButton>Home</WideButton>
    </CenterLink>
  </PageWrapper>
);

export default Page3;
