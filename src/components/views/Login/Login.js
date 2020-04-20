import React from 'react';
import styles from './Login.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (
  <Paper>
    <form className={styles.component} autoComplete="off">
      <Typography className={styles.textMargin}>
        <TextField id="standard-basic" label="Username" />
      </Typography>
      <Typography className={styles.textMargin}>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Typography>
      <Typography className={styles.textMargin}>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/`}variant="contained">Log in</Button>
      </Typography>
    </form>
  </Paper>
);

export default Login;
