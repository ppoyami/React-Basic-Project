import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Layout = styled.div`
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid #fff;

  &:hover {
    & h1,
    p {
      text-decoration: underline;
    }
  }
`;
const Title = styled.h1`
  font-size: 3.5rem;
  width: 60rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 5.5rem;
`;
const Desc = styled.p`
  width: 50rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 1px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function Item({ id, title, desc }) {
  return (
    <Layout>
      <StyledLink to={`/posts/${id}`}>
        <Title>{title.length > 40 ? title.slice(0, 40) + '...' : title}</Title>
        <Desc>{desc.slice(0, 200) + '...'}</Desc>
      </StyledLink>
    </Layout>
  );
}
