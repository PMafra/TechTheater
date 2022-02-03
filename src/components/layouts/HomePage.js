/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PageTemplate from '../templates/Page';

export default function HomePageLayout({ children }) {
  return (
    <PageTemplate width="85vw" height="100vh">
      <Container>
        {children}
      </Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
