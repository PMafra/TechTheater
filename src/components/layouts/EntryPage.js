/* eslint-disable react/prop-types */
import PageTemplate from '../templates/Page';
import { Container } from '../shared/Container';

export default function EntryPageLayout({ children }) {
  return (
    <PageTemplate width="700px" height="60vh" isGlassed mobileMaxWidth="700px" background="url(https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/11/cropped-Ian-McKellen-Gandalf.jpg)">
      <Container>
        {children}
      </Container>
    </PageTemplate>
  );
}
