import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    background: white;
    color: ${({ theme }) => theme.color_primary};
  }
`;

// MEMO: url query 구성
function TabButton({ children, baseUrl, query }) {
  return <StyledLink to={`${baseUrl}?${query}`}>{children}</StyledLink>;
}

export default TabButton;
