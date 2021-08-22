import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from "../assets/style.js";
import {useFormik} from 'formik';

export default function ReportSightingPage3({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>Where was the animal?</Text>

      <TouchableHighlight style={styles.buttonGrey} onPress={() => recordLocation()}>
        <Text style={styles.textDark}>Use current location</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonGrey} onPress={() => coordinates()}>
        <Text style={styles.textDark}>Enter coordinates</Text>
      </TouchableHighlight>

      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort]} onPress={() => navigation.navigate('Report Sighting 2')}>
          <Text style={styles.textDark}>{'<'} PREV</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginBottom]} onPress={() => navigation.navigate('Report Sighting 4')}>
          <Text style={styles.textDark}>SUBMIT {'>'}</Text>
        </TouchableHighlight>
      </View>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};

function recordLocation() {
  alert('recording your location');
}

function coordinates() {
  // Due to potential problems with false reporting, for now, it is only permitted to report from your own location
  alert('Feature coming soon!');
}