import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useTVEventHandler, TVMenuControl, BackHandler} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TV_EVENTS} from '../constants/TvEvents';
import {colors} from '../styles/colors';

export default MoviePoster = ({image, title}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const backAction = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    TVMenuControl.enableTVMenuKey();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      TVMenuControl.disableTVMenuKey();
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  const myTVEventHandler = evt => {
    if (evt.eventType === TV_EVENTS.MENU_EVENT) {
      setIsPressed(false);
    }
  };
  useTVEventHandler(myTVEventHandler);

  const blurFunction = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  return (
    <OuterBoxView>
      <Box
        onFocus={() => setIsHovered(true)}
        onBlur={() => blurFunction()}
        onPress={() => setIsPressed(true)}
        activeOpacity={1}
        hasBorder={isHovered}>
        <BoxImage source={image} resizeMode="cover" />
      </Box>
      {isHovered && isPressed && <BoxTitle>{title}</BoxTitle>}
    </OuterBoxView>
  );
};

const OuterBoxView = styled.View`
  width: ${wp(35)}px;
  height: ${hp(95)}px;
  align-items: center;
  justify-content: space-evenly;
`;

const Box = styled.Pressable`
  border-width: ${p => (p.hasBorder ? 5 : 0)}px;
  border-color: ${p => (p.hasBorder ? colors.red : colors.black)};
`;

const BoxImage = styled.Image`
  width: ${wp(26)}px;
  height: ${hp(70)}px;
`;

const BoxTitle = styled.Text`
  font-size: 40px;
  color: ${colors.white};
  font-weight: 600;
  text-align: center;
`;
