import React, {useState} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
// import {RadioButton} from 'react-native-paper';
import {styles} from "../assets/style.js";
// import {useFormik} from 'formik';
import RadioButton from '../components/RadioButton';

// var danger = "None";

const dangers = [
  {
    key: "Minor",
    text: "Minor",
  },
  {
    key: "Moderate",
    text: "Moderate",
  },
  {
    key: "High",
    text: "High",
  },
];

export default function ReportSightingPage2({navigation}) {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [warningText, setWarningText] = useState("");

  global.danger = "";

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
      global.danger = selectedOption.key; 
      navigation.navigate('Report Sighting 3');
    }
  };

  function showTitle() {
    setWarningText("Please choose an option before continuing!");
  };

  return (
    <View style={styles.containerDark}>

      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>How dangerous was the animal?</Text>

      <RadioButton selectedOption={selectedOption} onSelect={onSelect} options={dangers}/>
      
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort, styles.extraMarginHorizontal]} onPress={() => navigation.navigate('Report Sighting 1')}>
          <Text style={styles.textDark}>{'<'} PREV</Text>
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