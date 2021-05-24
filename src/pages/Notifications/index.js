import React from 'react';
import { ScrollView} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Container,
  Title,
  List,
  ListItem,
  Row,
  RowTitle,
  RowTime,
  RowDescription,
 } from './styles';

function Notifications({navigation, route, ...props}) {
  return (
    <>
    <Header 
      back 
      pageTitle={'Notificações'} 
      navigation={navigation}
    />
      <ScrollView>
    <Container>
      <List >
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
      </List>
    </Container>
    </ScrollView>
    <Footer 
      navigation={navigation}
    />
    </>
  );
}

export default Notifications;