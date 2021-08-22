import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function MainMenuPage({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Main Menu</Text>
      <Text style={styles.subtitleLight}>Welcome, Jenny!</Text>
      <TouchableHighlight style={styles.buttonMint} onPress={() => navigation.navigate('My Locations')}>
        <Text style={styles.textDark}>My Locations</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.extraMarginBottom]} onPress={() => navigation.navigate('Report Sighting 1')}>
        <Text style={styles.textDark}>Report a Sighting</Text>
      </TouchableHighlight>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>
    </View>
  );
};