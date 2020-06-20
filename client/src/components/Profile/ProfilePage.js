import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = (props) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </Container>
  );
};

export default ProfilePage;
