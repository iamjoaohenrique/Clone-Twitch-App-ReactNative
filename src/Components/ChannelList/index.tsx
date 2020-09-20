import React from 'react';
import { Text } from 'react-native';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Collumn,
  Username,
  Info,
  RightSide,
  WhiteCircle,

 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () =>(
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Collumn />
          <Username>Rocketseat_oficial</Username>
          <Info>16 news videos</Info>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )


  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
