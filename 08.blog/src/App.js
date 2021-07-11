import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import GlobalStyle from './global/GlobalStyle';
import ThemeProvider from './context/ThemeProvider';

import routes from './page';
import ProtecedRoute from './components/common/ProtecedRoute';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>
          <Switch>
            {/* // MEMO: 조건부 라우팅 깔끔하게 렌더링하기 */}
            {routes.map(({ loginRequired, ...props }) => {
              return loginRequired ? (
                <ProtecedRoute {...props} />
              ) : (
                <Route {...props} />
              );
            })}
          </Switch>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
