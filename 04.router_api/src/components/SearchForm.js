import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import useInput from '../hook/useInput';
import { getSymbols } from '../modules/symbols';

const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 4px inset ${({ theme }) => theme.color_primary__dark};
  background: transparent;
  font-family: 'Cinzel', 'serif';
  color: white;
  &:focus {
    outline: none;
  }
`;

function SearchForm() {
  const [value, onChange] = useInput('AAPL');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getSymbols(value));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
    </Form>
  );
}

export default SearchForm;
