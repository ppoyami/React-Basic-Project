import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './page/Landing';
import DashBoard from './page/DashBoard';
import List from './page/List';
import GlobalStyled from './global/GlobalStyled';
import theme from './global/Theme';

import ContextProvider from './context';

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppLayout>
      <GlobalStyled />
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <ContextProvider>
              <Route exact path="/" component={Landing} />
              <Route path="/dash" component={DashBoard} />
              <Route path="/list/:id" component={List} />
            </ContextProvider>
          </Switch>
        </ThemeProvider>
      </Router>
    </AppLayout>
  );
}

export default App;
