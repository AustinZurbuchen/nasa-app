import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getRandomPhotoUrl} from './api/nasaApi';
import HeaderBar from './components/headerbar';
import Photo from './components/photo';

function App() {
  const uri = getRandomPhotoUrl();
  return (
    <View style={styles.app}>
      <HeaderBar />
      <Photo uri={uri} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
