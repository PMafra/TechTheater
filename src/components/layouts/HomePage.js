/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Page from '../Page';
import { StyledContainer as Container } from '../Auth';

export default function HomePageLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="1040px" height="680px">
        {children}
      </StyledContainer>
    </Page>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  padding: 0;
  background-color: red;
  
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
