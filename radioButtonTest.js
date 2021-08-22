// half my code from https://snack.expo.dev/0EO6NMJgH

import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import RadioButton from './components/RadioButton';

const options = [
  {
    key: 'pay',
    text: 'Most High Pay',
  },
  {
    key: 'performance',
    text: 'Most Perfomance',
  },
  {
    key: 'aToZ',
    text: 'A - Z',
  },
  {
    key: 'zToA',
    text: 'Z - A',
  },
];

export default function App() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  const onSubmit = () => {
    console.log(selectedOption);
  }

  return (
    <View style={styles.container}>
      <RadioButton
        selectedOption={selectedOption}
        onSelect={onSelect}
        options={options}
      />
      <Button title="SUBMIT" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
