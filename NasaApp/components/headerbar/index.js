import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuButton from '../menubutton';

const HeaderBar = () => (
  <View style={styles.headerbar}>
    <MenuButton />
    <Text style={styles.title}>Home</Text>
    <MenuButton isInvisible={true} />
  </View>
);

const styles = StyleSheet.create({
  headerbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: 50,
    width: '100%',
    backgroundColor: '#696969',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    flex: 1,
    margin: 'auto',
    lineHeight: 24,
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});
export default HeaderBar;
