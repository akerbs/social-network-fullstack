import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = () => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <ProfileInfo />
      <MyPosts />
    </Container>
  );
};

export default ProfilePage;
