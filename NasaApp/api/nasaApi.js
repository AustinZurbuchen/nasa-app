import axios from 'axios';
import * as util from '../utils/util';
import {updatePhoto} from '../actions/photo';
import {updatePhotoList} from '../actions/photoList';

const nasaUrl = 'https://images-api.nasa.gov/search';
const mediaType = '&media_type=image';

export const getRandomPhotoUrl = () => dispatch => {
  return new Promise(async resolve => {
    try {
      const randomQuery =
        '?keywords=' + util.getRandomKeyword().replace(/\s/g, '+');
      console.log(randomQuery);
      let photoData = {
        isLoading: true,
        url: '',
      };

      dispatch(updatePhoto(photoData));
      axios
        .get(nasaUrl + randomQuery + mediaType)
        .then(response => {
          let photos = response.data.collection.items;
          let random = Math.floor(Math.random() * photos.length);
          let photoUrl = photos[random].links[0].href;
          photoData.url = photoUrl;
          photoData.isLoading = false;
          dispatch(updatePhoto(photoData));
          resolve(true);
        })
        .catch(e => {
          console.log(e);
          resolve(false);
        });
    } catch (error) {
      console.log(error);
    }
  });
};

export const getListOfPhotoUrls = keyword => dispatch => {
  return new Promise(async resolve => {
    try {
      const query = '?keywords=' + keyword;
      let photoListData = {
        isLoading: true,
        urls: [],
      };

      dispatch(updatePhotoList(photoListData));
      axios
        .get(nasaUrl + query + mediaType)
        .then(response => {
          let photos = response.data.collection.items;
          let photoUrls = [];
          for (let photo of photos) {
            photoUrls.push(photo.links[0]);
          }
          photoListData.urls = photoUrls;
          photoListData.isLoading = false;
          dispatch(updatePhotoList(photoListData));
          resolve(true);
        })
        .catch(e => {
          console.log(e);
          resolve(false);
        });
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};
