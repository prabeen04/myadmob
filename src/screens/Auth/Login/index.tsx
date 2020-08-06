import React from 'react';
import {View, Text} from 'react-native';
import Container from '../../../components/Layouts/Contanier';
import {Button} from 'react-native-elements';

type ILoginProps = any;
function Login(props: ILoginProps) {
  return (
    <Container>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        type="solid"
        onPress={() => props.navigation.navigate('Home')}
      />
    </Container>
  );
}

export default Login;
