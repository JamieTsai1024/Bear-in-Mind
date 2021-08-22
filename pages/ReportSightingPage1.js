import React, {useState} from 'react';
import {Text, View, Button, Image, Input, TouchableHighlight, AsyncStorage} from 'react-native';
import {styles} from "../assets/style.js";
import {Constants} from "expo";
// import {RadioButton} from 'react-native-paper';
// import {useFormik} from 'formik';
import RadioButton from '../components/RadioButton';
// var animal = "None";

const animals = [
  {
    key: "Bear",
    text: "Bear",
  },
  {
    key: "Deer / Moose",
    text: "Deer / Moose",
  },
  {
    key: "Wolf / Coyote",
    text: "Wolf / Coyote",
  },
];

export default function ReportSightingPage1({navigation}) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [warningText, setWarningText] = useState("");

  global.animal = "";
  var showInfo = false;

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      // console.log("here 0", selectedOption);
      setSelectedOption(null);
    } else {
      // console.log("here 2", selectedOption);
      setSelectedOption(item);
    }
    // console.log("selectedOption", selectedOption);
  };

  const moveOn = (item) => {
    if (selectedOption == null) {
      showInfo = true;
      showTitle();
    } else {
      global.animal = selectedOption.key; 
      // console.log("hi my name is paul" + global.animal); 
      navigation.navigate('Report Sighting 2');
    }
  };

  function showTitle() {
    setWarningText("Please choose an option before continuing!");
  };

  return (
    <View style={styles.containerDark}>
      
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>What animal did you see?</Text>

      <RadioButton selectedOption={selectedOption} onSelect={onSelect} options={animals}/>
      
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort, styles.extraMarginHorizontal]} onPress={() => navigation.navigate('Main Menu')}>
          <Text style={styles.textDark}>{'<'} BACK</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginHorizontal, styles.moreMarginBottom]} onPress={() => moveOn()}>
          <Text style={styles.textDark}>NEXT {'>'}</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={[styles.extraMarginHorizontal, styles.extraMarginBottom]}>
        <Text style={styles.textWarn}>{warningText}</Text>
      </TouchableHighlight>

      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};

// function bearPressed({navigation}) {
//   animal = "Bear";
//   alert("test bear: " + animal);
//   navigation.navigate('Report Sighting 2');
// }

// function dmPressed({navigation}) {
//   animal = "Deer / Moose";
//   alert("test moose: " + animal);
//   navigation.navigate('Report Sighting 2');
// }

// function wcPressed({navigation}) {
//   animal = "Wolf / Coyote";
//   alert("test wolf: " + animal);
//   navigation.navigate('Report Sighting 2');
// }

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
