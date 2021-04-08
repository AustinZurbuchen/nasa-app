import React from 'react';
import {View, StyleSheet} from 'react-native';

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.photoContainer}></View>;
  }
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    maxHeight: '25%',
  },
});
