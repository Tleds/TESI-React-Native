import React, { useRef} from 'react';
import { AsyncStorageStatic, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { 
  Container,
  Logo,
  RegisterText,
  RegisterLink,
  Label,
  ForgotPasswordText,
  ForgotPasswordLink
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import logo from '../../assets/images/logo_branca.png';

const Access = ({navigation, route, ...props}) =>{

  const emailRef = useRef();
  const passwordRef = useRef();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('E-mail inválido')
      .min(8, 'O email precisa ter no mínimo 8 caracteres')
      .max(100, 'O email não pode ter mais de 100 caracteres')
      .required('O e-mail não pode ser nulo'),
    password: yup
      .string()
      .min(8, 'A senha precisa ter no mínimo 8 caracteres')
      .max(16, 'A senha não pode ter mais de 16 caracteres')
      .required('A senha não pode ser nula'),
  });

  return (
    <>
    <Container>
      <Logo 
        source={require('../../assets/images/logo_branca.png')}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        onPress={()=> navigation.navigate('Register')}
      >
      <RegisterText >Ainda não tem uma conta? 
        <RegisterLink 
          
        >Inscreva-se</RegisterLink>
      </RegisterText>
      </TouchableOpacity>
      <Formik
              initialValues={{email: '', password: ''}}
              validateOnChange={false}
              onSubmit={async (values, {setSubmitting}) => {                
                const {
                  email,
                  password
                } = values;
                
                const response = await api.post('/session_user',{
                  email,
                  password,
                });
      
                if(response.status === 200){
                  console.log('To aqui')
                  // await AsyncStorageStatic.setItem('token',response.data.token);
                  navigation.navigate('Home');
                  return
                }
      
                if(response.status >= 400 && response.status < 500){
                  alert(response.data.message[0].message || response.data.message);
                  return
                }
      
                if(response.status >= 500){
                  alert(response.data.message);
                  return
                }
                
                setSubmitting(false);
              }}>
              {({
                setFieldValue,
                handleSubmit,
                isSubmitting,
                errors,
                values,
              }) => (
                <>
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
        ref={emailRef}
        onSubmitEditing={() => passwordRef.current.focus()}
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
      <ForgotPasswordText >Esqueceu a senha?
        <ForgotPasswordLink >Clique aqui!</ForgotPasswordLink>
      </ForgotPasswordText>
      <Button loading={isSubmitting} onPress={handleSubmit}>Entrar</Button>
      </>
              )}
            </Formik>
    </Container>
    </>
  );
}

export default Access;