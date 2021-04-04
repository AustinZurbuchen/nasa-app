import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getRandomPhotoUrl} from '../../api/nasaApi';

// Working on getting the photo url in uri form so it shows
const Photo = props => {
  let state = {uri: props.uri};
  // console.log(props);
  return (
    <View style={styles.photo}>
      <Text style={styles.title}>Photo Of The Day</Text>
      <Image style={styles.image} source={state.uri} />
    </View>
  );
};
export default Photo;

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 24,
  },
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
});
