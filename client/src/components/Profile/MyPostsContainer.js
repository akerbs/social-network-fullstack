import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../context/StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        debugger;
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
