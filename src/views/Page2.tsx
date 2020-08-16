import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Spacer from '../components/Spacer';
import ProgressIndicator from '../components/ProgressIndicator';
import TextField from '../components/TextField';
import FooterNavigation from '../components/FooterNavigation';

const CURRENT_PAGE = 2;

const InputContainer = styled.div`
  width: 100%;
  height: 16.2rem;
  overflow-y: scroll;
`;

const Page2 = () => {
  const parts = 100;

  return (
    <PageWrapper>
      <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
      <Spacer size={3} />
      <InputContainer>
        {
          new Array<number>(parts).fill(0).map((_value, index) => {
            const part = index + 1;
            return (
              <TextField id={`part${part}`}>
                Part&nbsp;
                {part}
                &nbsp;%
              </TextField>
            );
          })
        }
      </InputContainer>
      <Spacer size={3} />
      <FooterNavigation currentPage={CURRENT_PAGE} />
    </PageWrapper>
  );
};

export default Page2;
