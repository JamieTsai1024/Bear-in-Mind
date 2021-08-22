import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function MainMenuPage({navigation}) {
  // This function returns the React Native code for the main menu page
  return (
    <View style={styles.containerDark}>

      {/* Title and subtitle */}
      <Text style={styles.titleLight}>Main Menu</Text>
      <Text style={styles.subtitleLight}>Welcome, Jenny!</Text>

      {/* Navigation buttons */}
      <TouchableHighlight style={styles.buttonMint} onPress={() => navigation.navigate('My Locations')}>
        <Text style={styles.textDark}>My Locations</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.extraMarginBottom]} onPress={() => navigation.navigate('Report Sighting 1')}>
        <Text style={styles.textDark}>Report a Sighting</Text>
      </TouchableHighlight>

      {/* Bird footer image */}
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};