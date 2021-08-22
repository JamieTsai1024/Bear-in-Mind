import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function TrailPage({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>Trail A</Text>
      <Text style={styles.subtitleLight}>Here's a list of the animal sightings near you.</Text>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]} onPress={() => 1===1}>
        <View>
          <Image source={require('../assets/bear.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Bear</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>3.0 km north</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]} onPress={() => 1===1}>
        <View>
          <Image source={require('../assets/bear.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Bear</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>4.1 km south-southwest</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong, styles.extraMarginBottom]} onPress={() => 1===1}>
        <View>
          <Image source={require('../assets/deer.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Deer</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>7.6 km southeast</Text>
        </View>
      </TouchableHighlight>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>
    </View>
  );
};
