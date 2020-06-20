const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! It is my first post", likesCount: 12 },
        { id: 2, message: "Hello everyone!", likesCount: 15 },
      ],

      newPostText: "hallo Anatol!",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Anatol" },
        { id: 2, name: "Galina" },
        { id: 3, name: "Julia" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State has been changed");
  },
  getState() {
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.updateNewPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default store;

window.store = store;
