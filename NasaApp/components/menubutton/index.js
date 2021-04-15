import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MenuButton = ({screenName, isInvisible}) => {
  const navigation = useNavigation();
  // console.log('screenName: ' + screenName);
  return (
    <View style={styles.menu}>
      {!isInvisible && (
        <TouchableOpacity onPress={() => navigation.openDrawer(screenName)}>
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
    backgroundColor: '#0c3d91',
  },
});
export default MenuButton;
