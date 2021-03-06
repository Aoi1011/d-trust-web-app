import React, { useState } from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';

import PromoteAlarm from './PromoteAlarm';

const useUsePromoteStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '5vh',
    paddingBottom: '30vh',
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '& fieldset': {
      borderRadius: 0,
    },
  },
  label: {
    color: 'black',
    fontWeight: 600,
  },
  button: {
    backgroundColor: '#ffffff',
    textTransform: 'none',
    border: '4px solid #fe8d4a',
    borderRadius: 0,
    color: '#fe8d4a',
    width: '100%',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
  },
  input: {
    width: '100%',
  },
}));

export default function UsePromote() {
  const classes = useUsePromoteStyles();
  const [promotestate, setPromotestate] = useState('none');
  const onSubmit = e => {
    setPromotestate('use');
  }
  return (
    promotestate === 'none' ?
      <div>
        <div className={classes.pageTitle}>Promote</div>
        <Container className={classes.container}>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <InputLabel className={classes.label}>Enter your Promote token key.</InputLabel>
              </Grid>
              <Grid item xs={8} sm={4}>
                <TextField className={classes.input} label="Token key" id="" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={4} sm={1}>
                <Button className={classes.button} onClick={onSubmit}>Enter</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div> :
      <PromoteAlarm promotestate={promotestate} />
  );
}
