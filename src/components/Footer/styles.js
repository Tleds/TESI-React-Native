import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.select({android: undefined, ios: 'padding'}),
  })`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height:${verticalScale(50)}px;
`;

export const Icon = styled.Image`
    height:${verticalScale(30)}px;
    width: ${scale(45)}px;
`;