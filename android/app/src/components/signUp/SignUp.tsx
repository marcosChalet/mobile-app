import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

import ArrowLeft from '../../assets/arrow-left.svg';
import Blob from '../../assets/blob.svg';

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

  const navigation = useNavigation<{navigate: (P: string) => void}>();

  return (
    <View style={styles.container}>
      <Blob width={500} height={500} style={styles.blob} />
      <Button
        text=""
        style={backButtonStyle}
        fn={() => navigation.navigate('SignIn')}>
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
          <Text style={styles.titleInput}>Username</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#0004"
            placeholder="Type your username..."
          />
        </View>

        <View>
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#0003"
            placeholder="Type your password..."
          />
        </View>
      </Animatable.View>
      <Button
        text="create account"
        style={submitButtonStyle}
        fn={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E6E6',
    position: 'relative',
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: {
    position: 'absolute',
    resizeMode: 'contain',
    top: -130,
    left: -200,
  },
  form: {
    backgroundColor: '#FFF6',
    width: '95%',
    padding: '3%',
    justifyContent: 'space-evenly',
    height: '50%',
    borderRadius: 10,
    minHeight: 400,
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
    color: '#2C93ED',
  },
  googleTextStyle: {
    color: '#2C93ED',
    marginLeft: 6,
  },
});
