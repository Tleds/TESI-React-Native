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
export const Title = styled.Text``;
export const List = styled.View`
`;
export const ListItem = styled.View`
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 3px;
    margin-top: ${scale(5)}px;
    margin-bottom: ${scale(5)}px;
    padding: ${scale(10)}px;
`;
export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const RowTitle = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: bold;
`;
export const RowTime = styled.Text`
    font-size: ${scale(10)}px;
    font-weight: normal;
`;
export const RowDescription = styled.Text`
    font-size: ${scale(16)}px;
    font-weight: 900;
`;
