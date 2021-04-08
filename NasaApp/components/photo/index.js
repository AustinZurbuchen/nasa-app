import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRandomPhotoUrl} from '../../api/nasaApi';

const mapStateToProps = state => ({photo: state.photo});
const mapDispatchToProps = dispatch =>
  bindActionCreators({getRandomPhotoUrl}, dispatch);

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRandomPhotoUrl();
  }

  render() {
    return (
      <View style={styles.photo}>
        <Text style={styles.title}>Featured Photo</Text>

        {this.props.photo.photo.isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <Image
            style={styles.image}
            source={{uri: this.props.photo.photo.url}}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    maxHeight: '25%',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 24,
  },
  image: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'cover',
    width: 300,
    height: 250,
    borderRadius: 10,
  },
  loading: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'center',
    width: 300,
    height: 250,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
