import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import thunk from 'redux-thunk';
import reducers from './reducers';
import HeaderBar from './components/headerbar';
import Photo from './components/photo';
import PhotoContainer from './components/photoContainer';
import Info from './components/info';

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const Drawer = createDrawerNavigator();
const nasaInfo = require('./utils/nasaInfo.json');

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={navigationOptions.home}
          />
          <Drawer.Screen
            name="Info"
            component={InfoScreen}
            options={navigationOptions.info}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

function HomeScreen({navigation}) {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <HeaderBar title="Home" screenName="Info" />
        <Photo />
        <PhotoContainer />
      </View>
    </Provider>
  );
}

function InfoScreen() {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <HeaderBar title="Info" screenName="Home" />
        <Info infoText={nasaInfo.info} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navigationOptions = {
  home: {
    headerShown: false,
  },
  info: {
    headerShown: false,
  },
};

export default App;
