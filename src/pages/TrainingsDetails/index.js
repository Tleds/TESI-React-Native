import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Row, Title } from './styles';

function TrainingsDetails({navigation, route, ...props}) {
  return (
    <>
    <Header 
      back 
      navigation={navigation}
      pageTitle={'Detalhes do treino'} 
    />
    <ScrollView>
      <Container>
      <Row>
          <Title >Hipertrofia - Iniciante - Masculino - Ficha 1</Title>
      </Row>
      </Container>
    </ScrollView>
    <Footer 
      navigation={navigation}
    />
    </>
  );
}

export default TrainingsDetails;