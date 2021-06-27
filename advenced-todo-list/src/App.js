import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './page/Landing';
import DashBoard from './page/DashBoard';
import List from './page/List';
import GlobalStyled from './global/GlobalStyled';
import theme from './global/Theme';
import { useRef, useState } from 'react';

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [collections, setCollections] = useState([]);
  const [todos, setTodos] = useState({});
  // ? dashBoard: collections, addCollections(func), calcRemains(func)
  const collectionId = useRef(1);

  const addCollections = collection => {
    setCollections([...collections, collection]);
  };

  const calcRemains = id => {
    return todos[id].filter(todo => !todo.done).length;
  };

  const addTodos = obj => setTodos({ ...todos, ...obj });

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
              <DashBoard
                id={collectionId}
                collections={collections}
                addCollections={addCollections}
                calcRemains={calcRemains}
              />
            </Route>
            <Route path="/list">
              <List searchId={collectionId} addTodos={addTodos} todos={todos} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </AppLayout>
  );
}

export default App;
