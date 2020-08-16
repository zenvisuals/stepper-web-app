import styled from 'styled-components';

interface ButtonProps {
  secondary?: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.secondary ? 'black' : 'blue')};
  border: 0;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  &:hover {
    background-color: ${(props) => (props.secondary ? 'blue' : 'black')};
  }

  &:disabled {
    background-color: gray;
  }
`;

export default Button;
