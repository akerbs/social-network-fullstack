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
import { NavLink } from "react-router-dom";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: "100px",
  },
}));

const DialogItem = (props) => {
  const classes = useStyles();
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path}>
      <ListItem className={classes.dialog + " " + classes.active}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} />
      </ListItem>
    </NavLink>
  );
};

const MessageItem = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.dialog}>
      <ListItemText primary={props.message} />
    </ListItem>
  );
};

const DialogsPage = (props) => {
  const classes = useStyles();

  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.state.messages.map((m) => (
    <MessageItem message={m.message} />
  ));

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const newMessageBody = props.state.newMessageBody;

  const onNewMessageChange = (event) => {
    // const message = newMessageBody.current.value
    const body = event.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List>{dialogsElements}</List>
          </Grid>
          <Grid item xs={6}>
            <List>{messagesElements}</List>
          </Grid>

          <Grid item xs={6}>
            <List>
              <textarea
                id="body"
                // ref={newMessageElement}
                value={newMessageBody}
                onChange={onNewMessageChange}
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
                onClick={onSendMessageClick}
                // disabled={loading}
              >
                Add Message
              </Button>
            </List>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default DialogsPage;

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }
// {generate(
//   <ListItem>
//     <ListItemAvatar>
//       <Avatar>
//         <FolderIcon />
//       </Avatar>
//     </ListItemAvatar>
//     <ListItemText primary="Single-line item" />
//   </ListItem>
// )}

// {generate(
//   <ListItem>
//     <ListItemText primary="Single-line item" />
//   </ListItem>
// )}
