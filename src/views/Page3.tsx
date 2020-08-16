import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Spacer from '../components/Spacer';
import ProgressIndicator from '../components/ProgressIndicator';
import Button from '../components/Button';
import { clearParts } from '../redux/reducers/parts';

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

const Page3 = () => {
  const dispatch = useDispatch();
  return (
    <PageWrapper>
      <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
      <Spacer size={4} />
      <SuccessMessage>Success!</SuccessMessage>
      <Spacer size={4} />
      <CenterLink to="/">
        <WideButton onClick={() => dispatch(clearParts())}>Home</WideButton>
      </CenterLink>
    </PageWrapper>
  );
};

export default Page3;
