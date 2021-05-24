import { scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';


export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.select({android: undefined, ios: 'padding'}),
  })`
    width: 100%;
    height: ${verticalScale(50)}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top:${verticalScale(40)}px
`;
export const LeftIcon = styled.Image`
    height: ${verticalScale(30)}px;
    width: ${scale(30)}px;
`;
export const PageTitle = styled.Text`
  font-size: ${scale(24)}px;
  padding: ${scale(10)}px;
`;
export const RightIcon = styled.Image`
    height: ${verticalScale(30)}px;
    width: ${scale(30)}px;
`;
export const Link = styled.Text`
    text-decoration: none;
    color: #000;
`;

export const ModalStyle = styled.View`

    padding: 20px 50px;
    border-radius: 15px;
    border: 1px solid #000;
    text-align: center;
`;