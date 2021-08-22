import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from "../assets/style.js";
import {useFormik} from 'formik';

var danger = "None";

export default function ReportSightingPage2({navigation}) {
  const formik = useFormik({
    initialValues: {danger: ''},
    onSubmit: values => {}
  });
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>How dangerous was the animal?</Text>

      <View style={styles.horizontalFlex, styles.addMargin}>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          danger = "Minor";
          navigation.navigate('Report Sighting 3');
        }}>
          <Text style={styles.textDark}>Minor</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          danger = "Moderate";
          navigation.navigate('Report Sighting 3');
        }}>
          <Text style={styles.textDark}>Moderate</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          danger = "Considerable";
          navigation.navigate('Report Sighting 3');
        }}>
          <Text style={styles.textDark}>Considerable</Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort]} onPress={() => navigation.navigate('Report Sighting 1')}>
          <Text style={styles.textDark}>{'<'} PREV</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginBottom]} onPress={() => navigation.navigate('Report Sighting 3')}>
          <Text style={styles.textDark}>NEXT {'>'}</Text>
        </TouchableHighlight>
      </View>

      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};