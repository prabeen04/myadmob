import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Container from '../../components/Layouts/Contanier';

type IAdmobProps = any;
function Admob(props: IAdmobProps) {
  return (
    <Container>
      <Text>Admob Screen</Text>
      <Button
        title="Logout"
        type="outline"
        onPress={() => props.navigation.navigate('Login')}
      />
    </Container>
  );
}

export default Admob;
