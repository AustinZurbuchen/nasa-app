import axios from 'axios';
import * as util from '../utils/util';

const nasaUrl = 'https://images-api.nasa.gov/search';
const mediaType = '&media_type=image';
const query = '?keywords=' + util.getRandomKeyword().replace(/\s/g, '+');
export function getRandomPhotos() {
  axios.get(nasaUrl + query + mediaType).then(response => {
    console.log(response);
  });
}

export function getRandomPhotoUrl() {
  console.log('getRandomPhotoUrl');
  axios
    .get(nasaUrl + query + mediaType)
    .then(response => {
      let photos = response.data.collection.items;
      let random = Math.floor(Math.random() * photos.length);
      let photoUrl = photos[random].links[0].href;
      let photoUri = {uri: photoUrl};
      console.log(photoUri);
      return photoUrl;
    })
    .catch(e => {
      console.log(e);
    });
}
