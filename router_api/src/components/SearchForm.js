import styled from "styled-components";
import useInput from "../hook/useInput";
import { searchSymbols } from "../api";

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
  font-family: "Cinzel", "serif";
  color: white;
  &:focus {
    outline: none;
  }
`;

function SearchForm({ fetchData }) {
  const [value, onChange] = useInput("AAPL");

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData(() => searchSymbols(value));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
    </Form>
  );
}

export default SearchForm;
