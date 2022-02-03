import styled from 'styled-components';
import EntryPageLayout from '../../components/layouts/EntryPage';
import Link from '../../components/shared/Link';

export default function EntryPage() {
  return (
    <EntryPageLayout>
      <EntryPageContainer>
        <Link to="/sign-in" width="200px">
          Sign-in
        </Link>
        <Link to="/sign-up" width="200px">
          Sign-up
        </Link>
        <Link to="/homepage" width="200px">
          Home
        </Link>
      </EntryPageContainer>
    </EntryPageLayout>
  );
}

const EntryPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10vh;
`;
