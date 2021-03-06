/* eslint-disable react/prop-types */
import PageTemplate from '../templates/Page';
import { Container } from '../shared/Container';

export default function HomePageLayout({ children }) {
  return (
    <PageTemplate width="85vw" height="100vh">
      <Container>
        {children}
      </Container>
    </PageTemplate>
  );
}
