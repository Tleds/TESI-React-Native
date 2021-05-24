import React from 'react';

import { TouchableOpacity, Text } from 'react-native'

import { Container, Icon } from './styles';

function Footer({navigation}) {
  return (
    <>
    <Container>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Home')}
        >
          <Icon 
            source={require('../../assets/images/novidades.png')}
            resizeMode={'contain'} 
          />
          <Text>Novidades</Text>
        </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Trainings')}
      >
        <Icon 
          source={require('../../assets/images/treinos.png')} 
          resizeMode={'contain'} 
        />
        <Text>Treinos</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Plans')}
      >
        <Icon 
          source={require('../../assets/images/servicos.png')}
          resizeMode={'contain'} 
        />
        <Text>Serviços</Text>
      </TouchableOpacity>
    </Container>
      </>
  );
}

export default Footer;