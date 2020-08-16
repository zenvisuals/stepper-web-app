import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  readonly active?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${(props) => (props.active ? 'blue' : '#969eee')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

interface StepperProps {
  children: React.ReactNode,
  active: boolean
}

const Stepper = (props: StepperProps) => {
  const { children, active } = props;
  return (
    <Wrapper active={active}>
      {children}
    </Wrapper>
  );
};

export default Stepper;
