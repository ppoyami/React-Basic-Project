import SearchForm from '../components/SearchForm';
import List from '../components/List';
import styled from 'styled-components';

const HomeLayout = styled.div`
  width: 250px;
`;

function Home() {
  return (
    <HomeLayout>
      <SearchForm />
      <List />
    </HomeLayout>
  );
}

export default Home;
