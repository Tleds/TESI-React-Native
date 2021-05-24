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
export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 3px;
`;
export const Title = styled.Text`
    padding: ${scale(10)}px;
    font-size: ${scale(16)}px;
`;