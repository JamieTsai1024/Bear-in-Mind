import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function MyLocationsPage({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>My Locations</Text>
      <TouchableHighlight style={[styles.buttonGrey, styles.buttonLong]} onPress={() => alert('Trail A pressed')}>
        <View>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign]}>Trail A</Text>
          <Text style={[styles.textDark, styles.leftAlign]}>Beaverbrook</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonGrey, styles.buttonLong]} onPress={() => alert('Trail B pressed')}>
        <View>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign]}>Trail B</Text>
          <Text style={[styles.textDark, styles.leftAlign]}>Hopewell Rocks</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonPurple, styles.extraMarginBottom]} onPress={() => alert('New Trail pressed')}>
        <Text style={[styles.textLight, styles.bold]}>+ Add Trail</Text>
      </TouchableHighlight>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>
    </View>
  );
};
