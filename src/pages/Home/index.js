import React from 'react';
import {ScrollView} from 'react-native';

import { 
  Container, 
  Row, 
  Image,
  Title, 
  Text, 
  List,
  PrimaryTitle
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home({navigation, route, ...props}) {
  return (
    <>
      <Header  
        navigation={navigation}
        pageTitle={'Home'}
      />
    <ScrollView >
    <Container>
      <PrimaryTitle>Novidades</PrimaryTitle>
      <List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
        <List>
          <Row>
            <Row>
              <Title >Como regular a intensidade no treino</Title>
              {/* <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text> */}
            </Row>
            <Image source={require('../../assets/images/video_exemplo.png')} />
          </Row>
        </List>
      </List>
    </Container>
    </ScrollView>
    <Footer 
      navigation={navigation}
    />
    </>
  );
}

export default Home;