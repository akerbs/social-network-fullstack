import { rerenderEntireTree } from "../render";

const state = {
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
};

window.state = state;

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
