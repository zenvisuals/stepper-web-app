import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Label = styled.label`
  min-width: 12rem;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

interface NumberFieldProps {
  id: string,
  children: React.ReactNode,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: number | string
}

const NumberField = (props: NumberFieldProps) => {
  const {
    id, children, onChange, value,
  } = props;
  return (
    <Wrapper>
      <Label htmlFor={id}>{children}</Label>
      <Input type="number" id={id} onChange={onChange} value={value} />
    </Wrapper>
  );
};

NumberField.defaultProps = {
  value: '',
};

export default NumberField;
