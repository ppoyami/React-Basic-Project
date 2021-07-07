import styled from 'styled-components';
import Menu from './components/Menu';

const sideMenus = [
  '감자 튀김 🍟',
  '콜라 🥤',
  '애플 파이 🥧',
  '소프트 아이스크림 🍦',
  '선택하지 않음',
];

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppBlock>
      <Menu list={sideMenus} />
    </AppBlock>
  );
}

export default App;
