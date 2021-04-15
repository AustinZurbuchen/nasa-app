import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuButton from '../menubutton';

const HeaderBar = ({title, screenName}) => (
  <View style={styles.headerbar}>
    <MenuButton screenName={screenName} />
    <Text style={styles.title}>{title}</Text>
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
    backgroundColor: '#0c3d91',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    flex: 1,
    margin: 'auto',
    lineHeight: 24,
    fontSize: 24,
    textAlign: 'center',
    color: '#C0C0C0',
  },
});
export default HeaderBar;
