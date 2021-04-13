import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const MenuButton = ({isInvisible}) => {
  return (
    <View style={styles.menu}>
      {!isInvisible && (
        <TouchableOpacity onPress={() => console.log('touch')}>
          <Icon name="bars" size={30} color="#C0C0C0" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#696969',
  },
});
export default MenuButton;
