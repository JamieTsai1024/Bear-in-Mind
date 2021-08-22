import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function MyLocationsPage({navigation}) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleLight}>My Locations</Text>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]} onPress={() => navigation.navigate('Trail Page')}>
        <View>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign]}>Lunch Trail</Text>
          <Text style={[styles.textDark, styles.leftAlign]}>Beaverbrook</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]} onPress={() => alert('Feature coming soon!')}>
        <View>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign]}>Sunday Hiking Spot</Text>
          <Text style={[styles.textDark, styles.leftAlign]}>Hopewell Rocks</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonPurple, styles.extraMarginBottom]} onPress={() => alert('Feature coming soon!')}>
        <Text style={[styles.textLight, styles.bold]}>+ Add Trail</Text>
      </TouchableHighlight>
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>
    </View>
  );
};
