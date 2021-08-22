import React, {useState} from 'react';
import {Text, View, Button, Image, TouchableHighlight, TextInput} from 'react-native';
import {styles} from "../assets/style.js";
// import {useFormik} from 'formik';
import Hr from "react-native-hr-component";

export default function ReportSightingPage3({navigation}) {
  
  const [coordinate, setCoordinate] = useState('65, 60');
  global.coordinate = "";

  // const [selectedOption, setSelectedOption] = React.useState(null);

  // const onSelect = (item) => {
  //   if (selectedOption && selectedOption.key === item.key) {
  //     setSelectedOption(null);
  //   } else {
  //     setSelectedOption(item);
  //   }
  // };

  // const onSubmit = () => {
  //   console.log(selectedOption);
  // }

  // const [coordinate, onChangeNumber] = this.setState({coordinate: coordinate});

  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Report a Sighting</Text>
      <Text style={styles.subtitleLight}>Where was the animal?</Text>

      <TouchableHighlight style={styles.buttonMint} onPress={() => 1===1}>
        <Text style={styles.textDark}>Use current location</Text>
      </TouchableHighlight>

      {/* <TouchableHighlight style={[styles.buttonMint, styles.moreMarginBottom]} onPress={() => coordinates()}>
        <Text style={styles.textDark}>Enter coordinates</Text>
      </TouchableHighlight> */}
      <Hr lineColor="#F2FDF5" width={1} text="   Or   " textStyles={styles.textLight} hrStyles={{width: 200}}/>

      <View style={[styles.extraMarginVertical, styles.moreMarginBottom]}>
        <Text style={[styles.textLight, styles.leftAlign, styles.extraMarginVertical]}>Enter Coordinates</Text>
        <TextInput style={styles.input} onChangeText={coordinate => setCoordinate(coordinate)} defaultValue={coordinate} placeholder="Location" textContentType="location" keyboardType="numeric"/>
      </View>

      <View style={styles.horizontalFlex}>
        <TouchableHighlight style={[styles.buttonGrey, styles.buttonShort]} onPress={() => navigation.navigate('Report Sighting 2')}>
          <Text style={styles.textDark}>{'<'} PREV</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonMint, styles.buttonShort, styles.extraMarginBottom]} onPress={() => {navigation.navigate('Report Sighting 4'); global.coordinate = coordinate}}>
          <Text style={styles.textDark}>SUBMIT {'>'}</Text>
        </TouchableHighlight>
      </View>

      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5
    }}
  />
);