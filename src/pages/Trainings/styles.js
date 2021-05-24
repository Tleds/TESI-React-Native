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
    justify-content: center;
    background: #FFFFFF;
    border-radius: 3px;
`;
export const Link = styled.Text`
    text-decoration: none;
    color: #000;
`;

export const ListButton = styled.Text`
    height: ${scale(40)}px;
    padding: ${scale(10)}px;;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: ${scale(14)}px;;
    font-style: normal;
    border-radius: ${scale(10)}px;
    border: none;
    margin-top: ${scale(10)}px;;
    width: ${scale(320)}px;
    text-align: center;
`;

export const Title = styled.Text`
    font-size: ${scale(24)}px;;
`;
export const List = styled.View`
    
`;
export const ListRow = styled.View`
    padding-top: ${scale(10)}px;
`;