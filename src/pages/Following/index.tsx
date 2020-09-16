import React from 'react';
import { Text } from 'react-native';
import  Header  from '../../Components/Header';

import { Wrapper, Container, Main } from './styles';

interface Item{
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  React.useMemo(() => {
    const items
  } , []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
