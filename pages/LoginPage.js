import React from 'react';
import {Text, View, Image, TouchableHighlight, TextInput} from 'react-native';
import {styles} from "../assets/style.js";

export default function LoginPage({navigation}) {
  // This function returns the React Native code for the login page
  return (
    <View style={styles.containerLight}>

      {/* Logo and titles */}
      <Image source={require('../assets/logo.png')} style={styles.logoSmall}/> 
      <Text style={styles.titleDark}>Login</Text>
      <Text style={styles.subtitleDark}>Welcome back!</Text>

      {/* Email and password entry fields with appropriate attributes */}
      <View style={styles.leftAlign}>
        <Text style={[styles.textDark, styles.leftAlign, styles.extraMarginVertical]}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" textContentType="emailAddress" keyboardType="email-address"/>
      </View>
      <View style={[styles.leftAlign, styles.extraMarginVertical]}>
        <Text style={[styles.textDark, styles.leftAlign, styles.extraMarginVertical]}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" textContentType="password" secureTextEntry={true}/>
      </View>
      
      {/* Login (and sign up) buttons */}
      <TouchableHighlight style={styles.buttonPurple} onPress={() => navigation.navigate('Main Menu')}>
        <Text style={styles.textLight}>LOGIN</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.extraMarginBottom]} onPress={() => navigation.navigate('Sign Up')}>
        <Text style={[styles.textDark, styles.italic]}>Sign up instead</Text>
      </TouchableHighlight>

      {/* Tree footer image */}
      <Image source={require('../assets/tree.png')} style={styles.footerImageTree}/>

    </View>
  );
};