import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Spacer from '../components/Spacer';
import ProgressIndicator from '../components/ProgressIndicator';
import NumberField from '../components/NumberField';
import FooterNavigation from '../components/FooterNavigation';
import { updatePart } from '../redux/reducers/parts';

const CURRENT_PAGE = 2;

const InputContainer = styled.div`
  width: 100%;
  height: 16.2rem;
  overflow-y: scroll;
`;

const calculateTotal = (numbers: Array<number>) => numbers.reduce((accum, current) => {
  if (!Number.isNaN(current)) {
    return accum + current;
  }
  return accum;
}, 0);

const Page2 = () => {
  const { totalParts, parts } = useSelector((state: any) => state.parts);
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;

    let numberValue: number | string = Number.parseFloat(value);

    if (Number.isNaN(numberValue)) {
      numberValue = '';
    }

    dispatch(updatePart({
      index,
      value: numberValue,
    }));
  };

  const isNextDisabled = calculateTotal(parts) !== 100;

  return (
    <PageWrapper>
      <ProgressIndicator totalPages={3} currentPage={CURRENT_PAGE} />
      <Spacer size={3} />
      <InputContainer>
        {
          new Array<number>(totalParts).fill(0).map((_value, index) => {
            const part = index + 1;
            return (
              <NumberField key={part} id={`part${part}`} onChange={(e) => handleOnChange(e, index)} value={parts[index]}>
                Part&nbsp;
                {part}
                &nbsp;%
              </NumberField>
            );
          })
        }
      </InputContainer>
      <Spacer size={3} />
      <FooterNavigation currentPage={CURRENT_PAGE} nextDisabled={isNextDisabled} />
    </PageWrapper>
  );
};

export default Page2;
