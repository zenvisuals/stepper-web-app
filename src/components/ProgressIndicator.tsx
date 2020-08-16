import React from 'react';
import styled from 'styled-components';
import Stepper from './Stepper';
import Connector from './Connector';

interface ProgressIndicatorProps {
  totalPages: number,
  currentPage: number
}

const Wrapper = styled.header`
  flex: 0 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { currentPage, totalPages } = props;

  return (
    <Wrapper>
      {
        new Array<number>(totalPages).fill(0).map((_value, index) => {
          const page = index + 1;

          return (
            <React.Fragment key={page}>
              <Stepper active={currentPage >= page}>{page}</Stepper>
              {page !== totalPages && <Connector active={currentPage > page} />}
            </React.Fragment>
          );
        })
      }
    </Wrapper>
  );
};

export default ProgressIndicator;
