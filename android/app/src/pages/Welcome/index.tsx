import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

import WaveHaikei from '../../assets/wave-haikei.svg';

import * as Animatable from 'react-native-animatable';

export default function Welcome() {
  const navigation = useNavigation<{navigate: (P: string) => void}>();
  return (
    <View style={styles.container}>
      <WaveHaikei width={'120%'} height={'100%'} />

      <Animatable.View
        style={styles.welcomeText}
        animation="fadeInUp"
        delay={600}>
        <Text style={styles.title}>Lorem Ipsum</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
      </Animatable.View>

      <Button
        text="continue"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#FFF4',
        }}
        fn={() => navigation.navigate('Login')}>
        <Animatable.Image
          animation="myPulse"
          iterationCount="infinite"
          direction="alternate"
          easing={'ease-in'}
          style={styles.icon}
          source={require('../../assets/arrow.png')}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E6E6',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Milgran',
    color: '#181825',
    fontSize: 40,
    textTransform: 'uppercase',
  },
  text: {
    color: '#181825',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  icon: {
    width: 28,
    height: 28,
  },
});

Animatable.initializeRegistryWithDefinitions({
  myPulse: {
    0: {scaleX: 1, scaleY: 1},
    1: {scaleX: 0.5, scaleY: 0.5},
  },
});
