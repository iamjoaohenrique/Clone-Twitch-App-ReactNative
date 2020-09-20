import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () =>(
    <ChannelContainer>
      <LeftSide>
        
      </LeftSide>
      <RightSide>

      </RightSide>
    </ChannelContainer>
  )


  return (
    <List>
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
