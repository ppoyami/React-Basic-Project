import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './page/Landing';
import DashBoard from './page/DashBoard';
import List from './page/List';
import GlobalStyled from './global/GlobalStyled';
import theme from './global/Theme';
import { useState } from 'react';

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [collenctions, setCollections] = useState([]);
  const [todos, setTodos] = useState([]);
  // ? dashBoard: collections, addCollections(func), remainsCnt

  return (
    <AppLayout>
      <GlobalStyled />
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/dash">
              <DashBoard />
            </Route>
            <Route path="/list:id">
              <List />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </AppLayout>
  );
}

export default App;
