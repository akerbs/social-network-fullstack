import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: "100px",
  },
}));

const PostItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.dialog + " " + classes.active}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.message + " " + props.likesCount + " likes"}
      />
    </ListItem>
  );
};

const posts = [
  { id: 1, message: "Hi! It is my first post", likesCount: 12 },
  { id: 1, message: "Hello everyone!", likesCount: 15 },
];

const postsElements = posts.map((p) => (
  <PostItem message={p.message} likesCount={p.likesCount} />
));

const MyPosts = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>{postsElements}</List>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default MyPosts;
