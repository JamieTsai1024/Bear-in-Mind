import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function LandingPage({navigation}) {
  // This function returns the React Native code for the landing page
  return (
    <View style={styles.containerLight}>

      {/* Title and logo */}
      <Text style={styles.titleDark}>Bear in Mind</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo}/> 
      
      {/* Navigation buttons */}
      <TouchableHighlight style={styles.buttonPurple} onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.textLight}>Sign Up</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonGrey, styles.extraMarginBottom]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textDark}>Login</Text>
      </TouchableHighlight>

      {/* Tree footer image */}
      <Image source={require('../assets/tree.png')} style={styles.footerImageTree}/>
      
    </View>
  );
};