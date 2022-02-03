/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ButtonLink({ to, width, text }) {
  return (
    <Link to={to}>
      <Button width={width}>
        {text}
      </Button>
    </Link>
  );
}

const Button = styled.button`
    background-color: #fff;
    border: none;
    width: ${({ width }) => width || '200px'};
    padding: 8px 0;
    font-size: 30px;
    cursor: pointer;
    :hover {
        opacity: 0.85;
    }
`;
