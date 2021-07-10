import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import GlobalStyle from './global/GlobalStyle';
import ThemeProvider from './context/ThemeProvider';

import Home from './page/Home';
import Detail from './page/Detail';
import Profile from './page/Profile';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts/:postId/:userId">
              <Detail />
            </Route>
            <Route exact path="/users/:userId">
              <Profile />
            </Route>
          </Switch>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
