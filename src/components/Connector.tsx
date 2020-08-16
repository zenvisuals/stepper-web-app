import styled from 'styled-components';

interface ConnectorProps {
  readonly active?: boolean;
}

const Connector = styled.div<ConnectorProps>`
  background-color: ${(props) => (props.active ? 'blue' : '#969eee')};
  display: block;
  width: 150px;
  height: 5px;
`;

export default Connector;
