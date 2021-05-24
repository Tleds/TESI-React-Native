import React from 'react';
import { Formik } from 'formik';
import { ScrollView, Alert, TouchableOpacity } from 'react-native';
import { 
  Container, 
  Logo, 
  Label, 
  AccessLink, 
  AccessText,
} 
from './styles';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Register({navigation, route, ...props}) {
  return (
    <>
      <Formik
        initialValues={{
          name:'',
          email:'',
          password:'',
          confirmPassword: ''
        }}
        onSubmit={ async (values, { setSubmitting }) => {
          const {
            name,
            email,
            password,
          } = values;

          const response = await api.post('/users',{
            name,
            email,
            password,
          });

          if(response.status === 200){
            await AsyncStorageStatic.setItem('token', response.data.token);
            navigation.navigate('Home')
            return
          }

          if(response.status >= 400 && response.status < 500){
            Alert.alert('Erro',response.data.message);
            return
          }

          if(response.status >= 500){
            Alert.alert('Erro',response.data.message);
            return
          }
        }}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         handleBlur,
         isSubmitting,
         /* and other goodies */
       }) => (
         <>
  <ScrollView style={{ backgroundColor: '#000', padding: 0, margin: 0 }}>
<Container>
      <Logo source={require('../../assets/images/logo_branca.png')}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        onPress={()=> navigation.navigate('Access') }
      >
        <AccessText>Já tem uma conta? <AccessLink >Acesse</AccessLink></AccessText>
      </TouchableOpacity>
      <Label
      >
        Nome:
      </Label>
      <Input 
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        placeholder="Nome"
        value={values.name}
        onChangeText={(text) => setFieldValue('name', text)}
      />
      <Label
      >
        E-mail:
      </Label>
      <Input 
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        placeholder="E-mail"
        value={values.email}
        onChangeText={(text) => setFieldValue('email', text)}
       />
      <Label
      >
        Senha:
      </Label>
      <Input 
        secureTextEntry
        returnKeyType="send"
        placeholder="Senha"
        value={values.password}
        onChangeText={(text) => setFieldValue('password', text)}
      />
      <Label
      >
        Confirmar Senha:
      </Label>
      <Input 
        secureTextEntry
        returnKeyType="send"
        placeholder="Confirme sua senha"
        value={values.confirmPassword}
        onChangeText={(text) => setFieldValue('confirmPassword', text)}
      />
      <Button
        loading={isSubmitting} 
        onPress={handleSubmit}
      >Cadastrar</Button>
    </Container>
    </ScrollView>
    </>
          )}
        </Formik>
    </>
  );

}

export default Register;