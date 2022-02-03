import styled from 'styled-components';
import Link from '../shared/Link';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/homepage" width="80px" fontSize="14px">
        Home
      </Link>
      <Link to="/" width="80px" fontSize="14px">
        Entry
      </Link>
      <Link to="/sign-in" width="80px" fontSize="14px">
        Sign-in
      </Link>
      <Link to="/sign-up" width="80px" fontSize="14px">
        Sign-up
      </Link>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  background-color: red;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #fff;
`;
