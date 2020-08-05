import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  height: 100%;
`;

export default Container;
