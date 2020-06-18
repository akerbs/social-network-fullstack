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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthPage() {
  const auth = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { loading, request, error, clearError, message } = useHttp();
  const [state, setState] = useState({
    email: "",
    password: "",
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
    } catch (error) {
      setOpen(true);
    }
  };

  const loginHandler = async () => {
    try {
      debugger;
      const data = await request("/api/auth/login", "POST", { ...state });
      console.log("Data", data);
      console.log("Message", message);
      auth.login(data.token, data.userId);
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginHandler}
            disabled={loading}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={registerHandler}
            disabled={loading}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <div>
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
      </div>
    </Container>
  );
}
