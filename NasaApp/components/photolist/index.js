import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getListOfPhotoUrls} from '../../api/nasaApi';

const mapStateToProps = state => ({photoList: state.photoList});
const mapDispatchToProps = dispatch =>
  bindActionCreators({getListOfPhotoUrls}, dispatch);

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getListOfPhotoUrls('space');
  }

  render() {
    return (
      <View style={styles.photoList}>
        <Text style={styles.title}>Space Photos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    maxHeight: '25%',
    backgroundColor: 'red',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 24,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
