import styled, { ThemeProvider } from 'styled-components';

import GlobalStyled from './global/GlobalStyled';
import colors from './global/colors';

import Accordion, {
  AccordionHeader,
  AccordionBody,
  HeaderButton,
  Title,
  BodyContent,
  BodyButton,
} from './components/Accordion';

const theme = { colors: { ...colors } };
const AppLayout = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  height: 70vh;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <AppLayout>
        <Accordion>
          <AccordionHeader>
            <HeaderButton />
            <Title>Lorem Ipsum</Title>
          </AccordionHeader>
          <AccordionBody>
            <BodyContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </BodyContent>
            <BodyButton>Learn More</BodyButton>
          </AccordionBody>
        </Accordion>
      </AppLayout>
      ;
    </ThemeProvider>
  );
}

export default App;
