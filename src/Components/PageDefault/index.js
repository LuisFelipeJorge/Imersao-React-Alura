import React from 'react';
import style, {css} from 'styled-components';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
  @media( max-width: 800px){
    padding-top: 50px;
  }
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
