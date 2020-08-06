import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
// import dadosIniciais from '../../data/dados_iniciais.json';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../Components/PageDefault';

const HomeWrapper = styled.div`
  background: var(--grayDark);

  padding-top:94px;
  @media (max-width: 800px){
    padding-top:40px;
  }
`;

function Home() {
  const [initialData, setInitialdata] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialdata(categoriesWithVideos);
        console.log(initialData);
      });
  }, []);

  return (
    <PageDefault>
      {JSON.stringify(initialData)}
      {JSON.stringify(initialData[0])}
      {initialData.length === 0 && (<div>Loading...</div>)}

      {/* {initialData.length >= 1 && (
        <>
          <BannerMain
            videoTitle={initialData[0].videos[0].titulo}
            url={initialData[0].videos[0].url}
            videoDescription=""
          />

          <Carousel
            ignoreFirstVideo
            category={initialData[0]}
          />
        </>
      )} */}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription=""
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;
