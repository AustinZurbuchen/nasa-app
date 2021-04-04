import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderBar from './components/headerbar';

function App() {
  return (
    <View style={styles.app}>
      <HeaderBar />
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
