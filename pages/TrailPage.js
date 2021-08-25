import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {styles} from "../assets/style.js";

export default function TrailPage({navigation}) {
  // This function returns the React Native code for the Trail page

  // const onScreenLoad = () => {
  //   alert("hereree");
  //   if (global.animal == null) {
  //     // hide 
  //   } else {
  //     // show 
  //   }
  // }
  // onScreenLoad();

  return (
    <View style={styles.containerDark}>
      
      {/* Title and Subtitle */}
      <Text style={styles.titleLight}>Trail A</Text>
      <Text style={styles.subtitleLight}>Here's a list of the animal sightings near you.</Text>

      {/* List of animals as buttons with text properties */}

      {/* Original: */}
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]}>
        <View>
          <Image source={require('../assets/bear.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Bear</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>3.0 km north</Text>
        </View>
      </TouchableHighlight>

      {/* Changed (doesn't work): */}
      {/* {global.animal == null && 
      <TouchableHighlight style={(global.animal == null) ? styles.hideElement : [styles.buttonLong, styles.buttonMint, styles.unhideElement]}>
        <View>
          <Image source={require('../assets/bear.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>{global.animal}</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>3.0 km north</Text>
        </View>
      </TouchableHighlight>
      } */}
      
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong]}>
        <View>
          <Image source={require('../assets/bear.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Bear</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>4.1 km south-southwest</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonMint, styles.buttonLong, styles.extraMarginBottom]}>
        <View>
          <Image source={require('../assets/deer.png')} style={styles.iconImage}/>
          <Text style={[styles.textDark, styles.bold, styles.leftAlign, styles.extraLeftPadding]}>Deer</Text>
          <Text style={[styles.textDark, styles.leftAlign, styles.extraLeftPadding]}>7.6 km southeast</Text>
        </View>
      </TouchableHighlight>

      {/* Bird footer image */}
      <Image source={require('../assets/whiteBirds.png')} style={styles.footerImageBirds}/>

    </View>
  );
};
