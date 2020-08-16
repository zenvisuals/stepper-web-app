import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ProgressIndicator from '../components/ProgressIndicator';
import TextField from '../components/TextField';
import Spacer from '../components/Spacer';
import FooterNavigation from '../components/FooterNavigation';

const CURRENT_PAGE = 1;

const Page1 = () => (
  <PageWrapper>
    <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
    <Spacer size={6} />
    <TextField id="numParts">Number of parts: </TextField>
    <Spacer size={6} />
    <FooterNavigation currentPage={CURRENT_PAGE} />
  </PageWrapper>
);

export default Page1;
