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
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </Container>
  );
};

export default ProfilePage;
