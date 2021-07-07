import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Ul = styled.ul`
  margin-top: 2rem;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
const Li = styled.li`
  width: 100%;
  box-shadow: 0px 0px 4px 4px inset ${({ theme }) => theme.color_primary__light};
  flex-grow: 1;

  &:not(:last-of-type) {
    margin-bottom: 0.7rem;
  }

  & > * {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      background: ${({ theme }) => theme.color_primary__dark};
    }
  }
`;

// MEMO: 요청 상태 값에 따른 조건부 렌더링
function List() {
  const { loading, data, error } = useSelector(state => state.symbols);

  if (!data) return null;
  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;
  return (
    <Ul>
      {data.map(({ symbol }, i) => (
        <Li key={i}>
          <Link to={`/detail${symbol}`}>{symbol}</Link>
        </Li>
      ))}
    </Ul>
  );
}

export default List;
