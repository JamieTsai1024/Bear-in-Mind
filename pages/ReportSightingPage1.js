import React from 'react';
import {Text, View, Button, Image, Input, TouchableHighlight, AsyncStorage} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from "../assets/style.js";
import {useFormik} from 'formik';

var animal = "None";

export default function ReportSightingPage1({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>What animal did you see?</Text>

      <View style={[styles.horizontalFlex, styles.addMargin]}>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          animal = "Bear";
          navigation.navigate('Report Sighting 2');
        }}>
          <Text style={styles.textDark}>Bear</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          animal = "Deer / Moose";
          navigation.navigate('Report Sighting 2');
        }}>
          <Text style={styles.textDark}>Deer / Moose</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort]} onPress={() => {
          animal = "Wolf / Coyote";
          navigation.navigate('Report Sighting 2');
        }}>
          <Text style={styles.textDark}>Wolf / Coyote</Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort, styles.extraMarginHorizontal]} onPress={() => navigation.navigate('Main Menu')}>
          <Text style={styles.textDark}>{'<'} BACK</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginHorizontal, styles.extraMarginBottom]} onPress={() => navigation.navigate('Report Sighting 2')}>
          <Text style={styles.textDark}>NEXT {'>'}</Text>
        </TouchableHighlight>
      </View>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>
    </View>
  );
};

function bearPressed({navigation}) {
  animal = "Bear";
  alert("test bear: " + animal);
  navigation.navigate('Report Sighting 2');
}

function dmPressed({navigation}) {
  animal = "Deer / Moose";
  alert("test moose: " + animal);
  navigation.navigate('Report Sighting 2');
}

function wcPressed({navigation}) {
  animal = "Wolf / Coyote";
  alert("test wolf: " + animal);
  navigation.navigate('Report Sighting 2');
}

// function next({navigation}) {
//   AsyncStorage.getItem('curStorage', (response) => {
//     var curStorage;
//     if (response === null) {
//       curStorage = [];
//     }
//     else {
//       curStorage = JSON.parse(response);
//     }
//     curStorage.push({title: 'Animal', message: animal});
//     AsyncStorage.setItem('curStorage', JSON.stringify(curStorage), (response) => {});
//     console.log('storage is now' + curStorage);
//   });
//   navigation.navigate('Report Sighting 2');
// }
