import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function ReportSightingPage4({navigation}) {
  // This function returns the React Native code for the fourth Report Sightings page
  return (
    <View style={styles.containerDark}>

      {/* Title and subtitle text */}
      <Text style={[styles.titleLight, styles.moreMarginBottom]}>Report a Sighting</Text>
      <Text style={[styles.subtitleLight, styles.center, styles.moreMarginBottom]}>Your sighting was succesfully reported.{'\n\n'}Thanks for helping out!</Text>

      {/* Navigation button to continue to the main menu */}
      <TouchableHighlight style={[styles.buttonMint, styles.moreMarginBottom]} onPress={() => navigation.navigate('Main Menu')}>
        <Text style={styles.textDark}>Continue {'>'}</Text>
      </TouchableHighlight>

      {/* Bird footer image */}
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};