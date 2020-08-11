import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Container from '../../components/Layouts/Contanier';

type IAdSenseProps = any;
function AdSense(props: IAdSenseProps) {
  return (
    <Container>
      <Text>AdSense Screen</Text>
      <Button
        title="Logout"
        type="outline"
        onPress={() => props.navigation.navigate('Login')}
      />
    </Container>
  );
}

export default AdSense;
