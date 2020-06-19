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
  Button,
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

const MyPosts = (props) => {
  const classes = useStyles();

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    // alert("text");
    props.addPost(text);
    props.updateNewPostText("");
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    // console.log(text);
    props.updateNewPostText(text);
  };

  const postsElements = props.posts.map((p) => (
    <PostItem message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List>
              <textarea
                id="newPost"
                ref={newPostElement}
                value={props.newPostText}
                onChange={onPostChange}
              />
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={addPost}
                // disabled={loading}
              >
                Add Post
              </Button>
            </List>
          </Grid>

          <Grid item xs={12}>
            <List>{postsElements}</List>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default MyPosts;
