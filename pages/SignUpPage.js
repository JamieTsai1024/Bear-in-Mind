import React from 'react';
import {Text, View, Image, TouchableHighlight, TextInput} from 'react-native';
import {styles} from "../assets/style.js";

export default function SignUpPage({navigation}) {
  // This function returns the React Native code for the Sign Up page.
  return (
    <View style={styles.containerLight}>

      {/* Logo and titles */}
      <Image source={require('../assets/logo.png')} style={styles.logoSmall}/>
      <Text style={styles.titleDark}>Sign Up</Text>
      <Text style={styles.subtitleDark}>Welcome!</Text>

      {/* Name, email and password entry fields with appropriate attributes */}
      <View style={styles.leftAlign}>
        <Text style={[styles.textDark, styles.leftAlign, styles.extraMarginVertical]}>Name</Text>
        <TextInput style={styles.input} placeholder="Name" textContentType="name" keyboardType="default"/>
      </View>
      <View style={styles.leftAlign}>
        <Text style={[styles.textDark, styles.leftAlign, styles.extraMarginVertical]}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" textContentType="emailAddress" keyboardType="email-address"/>
      </View>
      <View style={[styles.leftAlign, styles.extraMarginVertical]}>
        <Text style={[styles.textDark, styles.leftAlign, styles.extraMarginVertical]}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" textContentType="password" secureTextEntry={true}/>
      </View>
      
      {/* Sign up (and login) buttons */}
      <TouchableHighlight style={styles.buttonPurple} onPress={() => navigation.navigate('Main Menu')}>
        <Text style={styles.textLight}>SIGN UP</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.extraMarginBottom]} onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.textDark, styles.italic]}>Log in instead</Text>
      </TouchableHighlight>

      {/* Tree footer image */}
      <Image source={require('../assets/tree.png')} style={styles.footerImageTree}/>
    </View>
  );
};