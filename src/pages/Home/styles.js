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
  background-color: #FFF;
  flex:1;
`;
export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    padding: ${scale(10)}px
`
export const Image = styled.Image`
    height: ${verticalScale(100)}px;
    width: ${scale(150)}px;
    padding-left: ${scale(20)}px;
`;
export const PrimaryTitle = styled.Text`
    font-size: ${scale(32)}px;
`;
export const Title = styled.Text`
    font-size: ${scale(16)}px;
`;
export const Text = styled.Text`
font-size: ${scale(12)}px;
`;
export const List = styled.View`

`;
