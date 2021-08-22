import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from "../assets/style.js";

export default function RadioButtons({ options, selectedOption, onSelect }) {
  return (
    <View style={styles.buttonContainer}>
      {options.map((item) => {
        return (
          <View key={item.key}>
          <TouchableOpacity style={styles.radio} onPress={() => {onSelect(item)}}>
            
              {/* Text and styling on select */}
              <Text style={styles.radioText}> {item.text} </Text>
              {selectedOption && selectedOption.key === item.key && (<View style={styles.radioChecked}/>)}

            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}