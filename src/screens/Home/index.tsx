import React from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/Layouts/Contanier';
import {Button} from 'react-native-elements';
type IHomeProps = any;
function Home(props: IHomeProps) {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        title="Logout"
        type="outline"
        onPress={() => props.navigation.navigate('Login')}
      />
    </Container>
  );
}

export default Home;
