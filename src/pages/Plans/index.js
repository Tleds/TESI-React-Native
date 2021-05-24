import React, {useState} from 'react';

import { ScrollView, Alert } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { 
  Container,
  VerticalRow,
  Title
} from './styles';


function Plans({navigation, route, ...props}) {

  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [sex, setSex] = useState('');
  const [trainingProgram, setTrainingProgram] = useState('');

  const handleBuy = ()=>{
    Alert.alert('Comprado com sucesso!',trainingProgram);
    navigation.navigate('PlansFinal');
    return
  }
  return (
  <>
  <Header 
    pageTitle={'Planos'} 
    navigation={navigation}
  />
  <ScrollView>
  <Container>
      <Title>Selecione seu objetivo:</Title>
      <VerticalRow>
        <Button
          onPress={() => setGoal('Hipertrofia')}
        >Hipertrofia</Button>
        <Button
          onPress={() => setGoal('Emagrecimento')}
        >Emagrecimento</Button>
      </VerticalRow>

        <Title>Selecione seu nível:</Title>
        <Button
          onPress={() => setLevel('Iniciante')}
        >Iniciante</Button>
        <Button
          onPress={() => setLevel('Intermediário')}
        >Intermediario</Button>
        <Button
          onPress={() => setLevel('Avançado')}
        >Avançado</Button>

        <Title>Qual é o seu sexo?</Title>
        <Button
          onPress={() => setSex('M')}
        >Masculino</Button>
        <Button
          onPress={() => setSex('F')}
        >Feminino</Button>

        <Title>Selecione seu programa de treino:</Title>
        <Button
          onPress={() => setTrainingProgram('Ficha 1')}
        >Ficha 1</Button>
        <Button 
          onPress={handleBuy}
        >Comprar</Button>
  </Container>
  </ScrollView>
  <Footer 
    navigation={navigation}
  />
  </>
  );
}

export default Plans;