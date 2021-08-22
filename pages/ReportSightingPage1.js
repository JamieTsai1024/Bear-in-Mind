import React, {useState} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";
import RadioButton from '../components/RadioButton';

// Radio Button Options 
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
  // This function returns the React Native code for the first Report Sightings page

  // Initialize variables 
  const [selectedOption, setSelectedOption] = useState(null);
  const [warningText, setWarningText] = useState("");

  global.animal = "";

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
      global.animal = selectedOption.key; 
      navigation.navigate('Report Sighting 2');
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
      <Text style={styles.subtitleLight}>What animal did you see?</Text>

      {/* Radio buttons made with the animals array */}
      <RadioButton selectedOption={selectedOption} onSelect={onSelect} options={animals}/>

      {/* Previous/Next Toggle Buttons */}
      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort, styles.extraMarginHorizontal]} onPress={() => navigation.navigate('Main Menu')}>
          <Text style={styles.textDark}>{'<'} BACK</Text>
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