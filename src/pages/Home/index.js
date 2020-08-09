import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
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
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        console.log(categoriesWithVideos);
        setInitialData(categoriesWithVideos);
        console.log(initialData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={5}>

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription=""
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
