const INITIAL_STATE = {
  photoList: {
    isLoading: true,
    urls: [],
  },
};

const photoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO_LIST':
      let {photoList} = state;
      const updatedPhotoList = action.payload;
      photoList = updatedPhotoList;
      const newState = {photoList};
      return newState;
    default:
      return state;
  }
};
export default photoListReducer;
