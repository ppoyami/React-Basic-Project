import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import GlobalStyle from './global/GlobalStyle';
import ThemeProvider from './context/ThemeProvider';

import routes from './page';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>
          <Switch>
            {/* // MEMO: 라우터 깔끔하게 렌더링하기 */}
            {routes.map(props => (
              <Route {...props} />
            ))}
          </Switch>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
