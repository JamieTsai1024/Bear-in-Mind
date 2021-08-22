import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from "../assets/style.js";

export default function ReportSightingPage4({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={[styles.subtitleLight, styles.center]}>Your sighting was succesfully reported.{'\n\n'}Thanks for helping out!</Text>

      <TouchableHighlight style={[styles.buttonMint, styles.extraMarginBottom]} onPress={() => navigation.navigate('Main Menu')}>
        <Text style={styles.textDark}>Continue {'>'}</Text>
      </TouchableHighlight>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};