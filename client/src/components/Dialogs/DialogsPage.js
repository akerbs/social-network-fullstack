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
import { NavLink } from "react-router-dom";

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
