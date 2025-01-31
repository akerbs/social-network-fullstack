import React from "react";
import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

export default UsersPageContainer;
