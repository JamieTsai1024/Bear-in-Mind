import React, {useState} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";
import RadioButton from '../components/RadioButton';

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

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      // Set selectedOption to null when "unselecting" the option
      setSelectedOption(null);
    } else {
      // In all other cases, selectedOption can be set to the item
      setSelectedOption(item);
    }
  };

  const moveOn = (item) => {
    if (selectedOption == null) {
      showTitle();
    } else {
      global.animal = selectedOption.key; 
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
