import React from 'react';
import {View, Text} from 'react-native';
import Container from '../../../components/Layouts/Contanier';
import {Button} from 'react-native-elements';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();
type ILoginProps = any;
function Login(props: ILoginProps) {
  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  return (
    <Container>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        type="solid"
        onPress={() => props.navigation.navigate('Home')}
      />
      <GoogleSigninButton onPress={signIn} />
    </Container>
  );
}

export default Login;
