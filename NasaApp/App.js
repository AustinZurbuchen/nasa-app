import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {View, StyleSheet} from 'react-native';
import thunk from 'redux-thunk';
import reducers from './reducers';
import HeaderBar from './components/headerbar';
import Photo from './components/photo';
import PhotoContainer from './components/photoContainer';

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <HeaderBar />
          <Photo />
          <PhotoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
