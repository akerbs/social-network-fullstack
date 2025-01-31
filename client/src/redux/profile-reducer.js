const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi! It is my first post", likesCount: 12 },
    { id: 2, message: "Hello everyone!", likesCount: 15 },
  ],

  newPostText: "hallo Anatol!",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, newPostText: "", posts: [...state.posts, newPost] };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
