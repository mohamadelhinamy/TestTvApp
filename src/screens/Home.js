import React from 'react';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '../../assets/images';
import MoviePoster from '../components/MoviePoster';

const Home = () => {
  return (
    <MainContainer>
      <BoxesContainer>
        <MoviePoster image={images.modernFamily} title="Modern Family" />
        <MoviePoster image={images.strangerThings} title="Stranger Things" />
      </BoxesContainer>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  width: ${wp(100)}px;
  height: ${hp(100)}px;
  background-color: black;
`;

const BoxesContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-evenly;
  align-self: center;
`;

export default Home;
