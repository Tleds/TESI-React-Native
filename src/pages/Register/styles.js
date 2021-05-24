import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.select({android: undefined, ios: 'padding'}),
  })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  max-width: ${scale(500)}px;;
  flex:1;
`;

export const Logo = styled.Image`
    height: ${verticalScale(200)};
    width: ${scale(300)}px;
`;

export const AccessText = styled.Text`
    color: #FFF;
    margin-top: ${scale(10)}px;
    margin-bottom: ${scale(10)}px;
`;

export const AccessLink = styled.Text`
    text-decoration: none;
    color: white;
    font-size: ${scale(16)}px; 
`;
export const Label = styled.Text`
    color:#FFF;
    font-size: ${scale(24)}px;
    font-weight: 400;
    line-height: ${scale(28)}px;
    text-align: left;
`;

export const ForgotPasswordText = styled.Text`
    color: #FFF;
    font-size: ${scale(14)}px;
    margin:${scale(10)}px;
`;
export const ForgotPasswordLink = styled.Text`
    color: #FFF;
    font-size: ${scale(16)}px;
`;