import React, { useState, useEffect, useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  loading,
  error,
  request,
  useHttp,
  clearError,
  message,
} from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import Copyright from "../Copyright";
import LoginPage from "./LoginPage";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthPage() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { loading, request, error, clearError, message } = useHttp();
  const [state, setState] = useState({
    email: "",
    password: "",
    // firstName: "",
    // lastName: "",
  });

  // useEffect(() => {
  //   message(error);
  //   //   clearError();
  // }, [error, message, clearError]);

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...state });
      console.log("Data", data);
      console.log("Message", data.message);
      message(data.message);

      // history.push("/profile");
    } catch (error) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                id="firstName"
                label="First Name"
                autoComplete="firstName"
                variant="outlined"
                required
                fullWidth
                onChange={changeHandler}
                // value={firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                id="lastName"
                label="Last Name"
                autoComplete="lastName"
                variant="outlined"
                required
                fullWidth
                // value={lastName}
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="email"
                id="email"
                label="Email Address"
                autoComplete="email"
                variant="outlined"
                // margin="normal"
                required
                fullWidth
                // value={form.email}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="password"
                id="password"
                label="Password"
                autoComplete="current-password"
                variant="outlined"
                // margin="normal"
                required
                fullWidth
                // value={form.password}
                onChange={changeHandler}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                fullWidth
                // defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={registerHandler}
            disabled={loading}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/login" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message || error}
      ></Snackbar>
    </Container>
  );
}
