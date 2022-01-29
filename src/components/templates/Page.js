/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function PageTemplate({
  background, width, height, children,
}) {
  return (
    <Page background={background}>
      <Container width={width} height={height}>
        {children}
      </Container>
    </Page>
  );
}

const Container = styled.div`
  height: 100vh;
  max-height: ${({ height }) => height || '600px'};
  width: 100%;
  max-width: ${({ width }) => width || '1200px'};
  display: flex;
  padding: 0;
  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};

  @media (max-width: 600px) {
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;

const Page = styled.div`
  background: ${({ background }) => (background || '#ffffff')};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;

  @media (max-width: 600px) {
    padding: 0;
  }
`;
