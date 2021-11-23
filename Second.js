/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as Animatable from 'react-native-animatable';
//import AnimatedSplash from "react-native-animated-splash-screen";



const Second =() => {
      return (
        <View style={styles.container}>
          <Animatable.Image
          animation="bounceIn"
            style={{ width: 250, height: 250 }}
            resizeMode="contain"

            source={require('./assets/efill.png')}
            //source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
          />
          <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        </View>
      );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Second;