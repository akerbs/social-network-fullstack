import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: "100px",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

// const UserItem = (props) => {
//   const classes = useStyles();
//   // let path = "/users/" + props.id;
//   return (
//     <ListItem alignItems="flex-start">
//       <Grid container spacing={2}>
//         <Grid item xs={3}>
//           {/* <NavLink to={path}> */}
//           <ListItemAvatar>
//             <Avatar
//               alt={props.fullName}
//               src={props.photoUrl}
//               className={classes.large}
//             />
//           </ListItemAvatar>
//           {/* </NavLink> */}
//         </Grid>
//         <Grid item xs={6}>
//           <ListItemText primary={props.fullName} secondary={props.status} />
//         </Grid>
//         <Grid item xs={3}>
//           <ListItemSecondaryAction>
//             <ListItemText
//               edge="end"
//               secondary={props.city + ", " + props.country}
//             />
//           </ListItemSecondaryAction>
//         </Grid>
//         <Grid item xs={12}>
//           {props.followed ? (
//             <IconButton onClick={props.follow(props.id)}>Follow</IconButton>
//           ) : (
//             <IconButton onClick={props.unfollow(props.id)}>Unfollow</IconButton>
//           )}
//         </Grid>
//       </Grid>
//     </ListItem>
//   );
// };

// const UsersPage = (props) => {
//   const classes = useStyles();

//   const usersElements = props.users.map((u) => (
//     <UserItem
//       key={u.id}
//       id={u.id}
//       photoUrl={u.photoUrl}
//       fullName={u.fullName}
//       status={u.status}
//       city={u.location.city}
//       country={u.location.country}
//       followed={u.followed}
//       follow={props.follow}
//       unfollow={props.unfollow}
//     />
//   ));

//   return (
//     <Container maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.root}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <List>{usersElements}</List>
//           </Grid>

//           <Grid item xs={12}>
//             <Button
//             //  type="submit"
//             //  // fullWidth
//             //  variant="contained"
//             //  color="primary"
//             //  className={classes.submit}
//             //  onClick={onSendMessageClick}
//             // disabled={loading}
//             >
//               Show More
//             </Button>
//           </Grid>
//         </Grid>
//       </div>
//     </Container>
//   );
// };

const UsersPage = (props) => {
  const classes = useStyles();

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i1.sndcdn.com/avatars-000024786649-u3uxtd-t500x500.jpg",
        fullName: "Anatol Kerbs",
        status: "I'm a boss",
        location: { city: "Hamburg", country: "Germany" },
        followed: false,
      },
      {
        id: 2,
        photoUrl:
          "https://i1.sndcdn.com/avatars-000024786649-u3uxtd-t500x500.jpg",
        fullName: "Galina Kerbs",
        status: "Happy:)",
        location: { city: "Yeysk", country: "Russia" },
        followed: true,
      },
    ]);
  }

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <List>
          {props.users.map((u) => (
            <div key={u.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={u.fullName}
                    src={u.photoUrl}
                    className={classes.large}
                  />
                </ListItemAvatar>
                <ListItemText primary={u.fullName} secondary={u.status} />
                <ListItemText
                  secondary={u.location.city + ", " + u.location.country}
                />
                {u.followed ? (
                  <IconButton
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </IconButton>
                )}
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default UsersPage;
