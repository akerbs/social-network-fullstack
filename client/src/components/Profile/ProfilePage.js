import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

const ProfilePage = (props) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // dispatch={props.dispatch}
        // newPostText={props.profilePage.newPostText}
      />
    </Container>
  );
};

export default ProfilePage;
