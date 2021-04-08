const INITIAL_STATE = {
  photo: {
    isLoading: true,
    url: '',
  },
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO':
      let {photo} = state;
      const updatedPhoto = action.payload;
      photo = updatedPhoto;
      const newState = {photo};
      return newState;
    default:
      return state;
  }
};
export default photoReducer;
