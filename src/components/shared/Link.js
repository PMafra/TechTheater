/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ButtonLink({
  to, width, fontSize, children,
}) {
  return (
    <Link to={to}>
      <Button width={width} fontSize={fontSize}>
        {children}
      </Button>
    </Link>
  );
}

const Button = styled.button`
    background-color: #fff;
    border: none;
    width: ${({ width }) => width || '200px'};
    padding: 8px 0;
    font-size: ${({ fontSize }) => fontSize || '30px'};
    cursor: pointer;
    :hover {
        opacity: 0.85;
    }
`;
