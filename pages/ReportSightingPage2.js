import React, {useState} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";
import RadioButton from '../components/RadioButton';

// Radio Button Options 
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
  // This function returns the React Native code for the second Report Sightings page

  // Initialize variables 
  const [selectedOption, setSelectedOption] = useState(null);
  const [warningText, setWarningText] = useState("");

  global.danger = "";

  ////////////////////////
  //  Helper Functions  //
  ////////////////////////

  const onSelect = (item) => {
    // Updates the selectedOption variable with a null value if the option is deselected, or new value if a new value is picked
    if (selectedOption && selectedOption.key === item.key) {
      // Set selectedOption to null when "unselecting" the option
      setSelectedOption(null);
    } else {
      // In all other cases, selectedOption can be set to the item
      setSelectedOption(item);
    }
  };

  const moveOn = (item) => {
    // Checks if input has been taken before setting the global variable and moving to the next page  
    if (selectedOption == null) {
      showTitle();
    } else {
      global.danger = selectedOption.key; 
      navigation.navigate('Report Sighting 3');
    }
  };

  function showTitle() {
    // Sets warning text 
    setWarningText("Please choose an option before continuing!");
  };

  return (
    <View style={styles.containerDark}>

      {/* Titles and Text */}
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>How dangerous was the animal?</Text>

      {/* Radio buttons made with the dangers array */}
      <RadioButton selectedOption={selectedOption} onSelect={onSelect} options={dangers}/>
      
      {/* Previous/Next Toggle Buttons */}
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort, styles.extraMarginHorizontal]} onPress={() => navigation.navigate('Report Sighting 1')}>
          <Text style={styles.textDark}>{'<'} PREV</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginHorizontal, styles.moreMarginBottom]} onPress={() => moveOn()}>
          <Text style={styles.textDark}>NEXT {'>'}</Text>
        </TouchableHighlight>
      </View>

      {/* Warning text if user doesn't select an option */}
      <TouchableHighlight style={[styles.extraMarginHorizontal, styles.extraMarginBottom]}>
        <Text style={styles.textWarn}>{warningText}</Text>
      </TouchableHighlight>

      {/* Bird footer image */}
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};