import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

  generatePhotos() {
    let photoComponents = [];
    let photos = this.props.photoList.photoList.urls;
    let i = 0;
    for (let photo of photos) {
      let photoObj = {
        id: i.toString(),
        url: photo.href,
      };
      photoComponents.push(photoObj);
      i++;
    }
    return photoComponents;
  }

  render() {
    let photoComponents = [];
    if (!this.props.photoList.photoList.isLoading) {
      photoComponents = this.generatePhotos();
    }
    const renderItem = ({item}) => (
      <View style={styles.photo}>
        {this.props.photoList.photoList.isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <Image style={styles.image} source={{uri: item.url}} />
        )}
      </View>
    );

    const flatListItemSeparator = () => {
      return (
        <View
          style={{
            width: 20,
            height: '100%',
          }}
        />
      );
    };

    return (
      <View style={styles.safeAreaView}>
        <FlatList
          horizontal={true}
          data={photoComponents}
          renderItem={renderItem}
          ItemSeparatorComponent={flatListItemSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    maxHeight: '25%',
  },
  photo: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'center',
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'cover',
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  safeAreaView: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
