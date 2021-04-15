import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Info = ({infoText}) => (
  <View style={styles.info}>
    <Text style={styles.text}>{infoText}</Text>
  </View>
);

const styles = StyleSheet.create({
  info: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    lineHeight: 24,
    fontSize: 20,
  },
});
export default Info;
