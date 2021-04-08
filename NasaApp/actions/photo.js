export function updatePhoto(photo) {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_PHOTO',
      payload: photo,
    });
  };
}
