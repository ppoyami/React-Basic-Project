import SearchForm from "../components/SearchForm";
import List from "../components/List";
import styled from "styled-components";
import useAsync from "../hook/useAsync";

const HomeLayout = styled.div`
  width: 250px;
`;

function Home() {
  const [state, fetchData] = useAsync();

  return (
    <HomeLayout>
      <SearchForm fetchData={fetchData} />
      <List state={state} />
    </HomeLayout>
  );
}

export default Home;
