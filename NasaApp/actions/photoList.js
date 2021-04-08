export function updatePhotoList(photoList) {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_PHOTO_LIST',
      payload: photoList,
    });
  };
}
