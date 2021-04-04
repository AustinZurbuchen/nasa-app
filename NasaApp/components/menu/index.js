import React from 'react';
import {View, StyleSheet} from 'react-native';

const Menu = () => (
  <View style={styles.menu}>
    <View style={styles.bar} />
    <View style={styles.bar} />
    <View style={styles.bar} />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  bar: {
    height: 5,
    width: 30,
    backgroundColor: '#C0C0C0',
    marginLeft: 10,
    marginBottom: 3,
    marginTop: 3,
  },
});
export default Menu;
