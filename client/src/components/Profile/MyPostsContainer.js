import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../context/StoreContext";

const MyPostsContainer = (props) => {
  // return (
  //   <StoreContext.Consumer>
  //     {(store) => {
  //       debugger;
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      // posts={state.profilePage.posts}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
//     }
//     </StoreContext.Consumer>
//   );
// };

export default MyPostsContainer;
