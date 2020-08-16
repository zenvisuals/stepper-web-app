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

interface TextFieldProps {
  id: string,
  children: React.ReactNode
}

const TextField = (props: TextFieldProps) => {
  const { id, children } = props;
  return (
    <Wrapper>
      <Label htmlFor={id}>{children}</Label>
      <Input type="text" id={id} />
    </Wrapper>
  );
};

export default TextField;
