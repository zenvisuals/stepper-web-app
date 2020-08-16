import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import ProgressIndicator from '../components/ProgressIndicator';
import NumberField from '../components/NumberField';
import Spacer from '../components/Spacer';
import FooterNavigation from '../components/FooterNavigation';
import { updateTotalParts } from '../redux/reducers/parts';

const convertInputToNumber = (value: string) => Number.parseInt(value, 10);

const CURRENT_PAGE = 1;

const Page1 = () => {
  const [numberInput, setNumberInput] = useState('');
  const dispatch = useDispatch();

  const isNextDisabled = () => {
    const numberValue = convertInputToNumber(numberInput);
    return (numberInput.trim().length === 0
      && !Number.isInteger(numberValue))
      || numberValue <= 0;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const numberValue = convertInputToNumber(value);

    setNumberInput(value);
    if (!Number.isNaN(numberValue)) {
      dispatch(updateTotalParts(numberValue));
    }
  };

  return (
    <PageWrapper>
      <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
      <Spacer size={6} />
      <NumberField id="numParts" onChange={(e) => handleOnChange(e)} value={numberInput}>Number of parts: </NumberField>
      <Spacer size={6} />
      <FooterNavigation currentPage={CURRENT_PAGE} nextDisabled={isNextDisabled()} />
    </PageWrapper>
  );
};

export default Page1;
