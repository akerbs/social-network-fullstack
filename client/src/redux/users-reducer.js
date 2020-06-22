const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://i1.sndcdn.com/avatars-000024786649-u3uxtd-t500x500.jpg",
    //   fullName: "Anatol Kerbs",
    //   status: "I'm a boss",
    //   location: { city: "Hamburg", country: "Germany" },
    //   followed: false,
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://i1.sndcdn.com/avatars-000024786649-u3uxtd-t500x500.jpg",
    //   fullName: "Galina Kerbs",
    //   status: "Happy:)",
    //   location: { city: "Yeysk", country: "Russia" },
    //   followed: true,
    // },
  ],

  newPostText: "hallo Anatol!",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
// to recieve users from server
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
