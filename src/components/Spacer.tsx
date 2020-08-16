import styled from 'styled-components';

interface SpacerProps {
  size: number
}

const Spacer = styled.div<SpacerProps>`
  display: block;
  width: 100%;
  height: ${(props) => props.size}rem;
`;

export default Spacer;
