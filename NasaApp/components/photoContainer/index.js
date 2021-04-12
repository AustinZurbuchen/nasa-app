import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PhotoList from '../photolist';

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.photoContainer}>
        <Text style={styles.title}>Nasa Photos</Text>
        <PhotoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 30,
    maxHeight: '30%',
    backgroundColor: '#696969',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
  },
});
export default PhotoContainer;
