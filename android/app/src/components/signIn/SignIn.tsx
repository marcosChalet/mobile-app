import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

import ArrowLeft from '../../assets/arrow-left.svg';
import Blob from '../../assets/blob.svg';
import Google from '../../assets/google.svg';

import * as Animatable from 'react-native-animatable';

export default function Login() {
  const backButtonStyle = {
    padding: 2,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 70,
    left: 15,
    zIndex: 11,
    backgroundColor: 'transparent',
  };

  const submitButtonStyle = {
    width: '70%',
    position: 'static',
    marginTop: 40,
  };

  const newAccountButtonStyle = {
    padding: 0,
    marginTop: 18,
    position: 'static',
    backgroundColor: 'transparent',
    width: '50%',
  };

  const googleButtonStyle = {
    bottom: '3%',
    backgroundColor: '#FFF',
    width: '90%',
    flexDirection: 'row-reverse',
  };

  const navigation = useNavigation<{navigate: (P: string) => void}>();

  return (
    <View style={styles.container}>
      <Blob width={500} height={500} style={styles.blob} />
      <Button
        text=""
        style={backButtonStyle}
        fn={() => navigation.navigate('Welcome')}>
        <ArrowLeft width={35} height={35} />
      </Button>

      <Animatable.View style={styles.form} animation="fadeInRight">
        <View>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#0004"
            placeholder="Type your email..."
          />
        </View>

        <View>
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#0004"
            placeholder="Type your password..."
          />
        </View>
      </Animatable.View>

      <Button
        text="Login"
        style={submitButtonStyle}
        fn={() => navigation.navigate('Welcome')}
      />
      <Button
        text=""
        style={newAccountButtonStyle}
        fn={() => navigation.navigate('SignUp')}>
        <Text style={styles.clearTextStyle}>create a new account?</Text>
      </Button>

      <Button
        text=""
        style={googleButtonStyle}
        fn={() => navigation.navigate('Welcome')}>
        <Text style={styles.clearTextStyle}>Login with google</Text>
        <Google width={20} height={20} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E6E6',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: {
    position: 'absolute',
    resizeMode: 'contain',
    top: -130,
    left: -200,
    zIndex: 10,
  },
  form: {
    backgroundColor: '#FFF6',
    width: '95%',
    padding: '3%',
    justifyContent: 'space-evenly',
    height: '43%',
    borderRadius: 10,
  },
  titleInput: {
    color: '#2C93ED',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    paddingBottom: 3,
    borderColor: '#0066FF',
  },
  clearTextStyle: {
    color: '#2C93ED',
    marginLeft: 6,
  },
});
