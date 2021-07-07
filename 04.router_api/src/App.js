import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Detail from './page/Detail';
import Home from './page/Home';
import PageNotFound from './components/PageNotFound';
import { GlobalStyled } from './GlobalStyled';

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color_primary};
  color: white;
`;
// MEMO: Switch 컴포넌트 이용하여 PageNotFound 렌더링하기
export default function App() {
  return (
    <AppBlock>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail:symbol" component={Detail} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </AppBlock>
  );
}
