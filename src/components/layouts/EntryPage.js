/* eslint-disable react/prop-types */
import PageTemplate from '../templates/Page';
import { Container } from '../shared/Container';

export default function EntryPageLayout({ children }) {
  return (
    <PageTemplate width="700px" height="60vh" mobileMaxWidth="700px">
      <Container>
        {children}
      </Container>
    </PageTemplate>
  );
}
