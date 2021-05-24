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
    flex:1;
`;
export const CongratulationsDiv = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
export const Paragraph = styled.Text`
    font-size: ${scale(24)}px;
    padding: ${scale(10)}px;
    font-weight: bold;
`;