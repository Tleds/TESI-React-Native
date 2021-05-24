import React from 'react';
import { Alert, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { 
  Container,
  Title,
  List,
  Row,
  ListRow,
  ListButton,
} from './styles';



function Trainings({navigation, route, ...props}) {

  const handleBuy = async () =>{
      Alert.alert('Comprado com sucesso!', 'Treino comprado com sucesso!');
      return;
  }

  return (
    <>
    <Header 
      pageTitle={'Treinamentos'} 
      navigation={navigation}
    /> 
    <ScrollView>
    <Container>
      <Title>Programas de treino</Title>
      <List>
        <ListRow >
          <Row>
            <ListButton  
            onPress={()=> navigation.navigate('TrainingsDetails') }
            >
              Hipertrofia - Iniciante - Masculino - Ficha 1
            </ListButton>
          </Row>
        </ListRow>
        <ListRow >
          <Row>
            <ListButton 
              onPress={()=> navigation.navigate('TrainingsDetails') }
            >
              Hipertrofia - Intermediario - Masculino - Ficha 1
            
            </ListButton>
          </Row>
        </ListRow>
      </List>
      <Button 
        onPress={handleBuy}
      >Comprar Treinos
      </Button>
    </Container>
    </ScrollView>
    <Footer 
      navigation={navigation}
    />
    </>
  );
}

export default Trainings;