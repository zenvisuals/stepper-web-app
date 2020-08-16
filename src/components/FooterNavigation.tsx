import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Footer = styled.footer`
  align-self: flex-end;
  margin-left: auto;
`;

const WideButton = styled(Button)`
  width: 15rem;
  margin-left: 1rem;
`;

interface FooterNavigationProps {
  previousDisabled?: boolean,
  nextDisabled?: boolean,
  currentPage: number
}

const FooterNavigation = (props: FooterNavigationProps) => {
  const { currentPage, previousDisabled, nextDisabled } = props;

  return (
    <Footer>
      <Link to={currentPage - 1 <= 0 ? '/' : `/page/${currentPage - 1}`}>
        <WideButton secondary disabled={previousDisabled}>Previous</WideButton>
      </Link>
      <Link to={`/page/${currentPage + 1}`}>
        <WideButton disabled={nextDisabled}>Next</WideButton>
      </Link>
    </Footer>
  );
};

FooterNavigation.defaultProps = {
  previousDisabled: false,
  nextDisabled: false,
};

export default FooterNavigation;
