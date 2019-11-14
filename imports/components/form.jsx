import React, {useContext} from 'react';

import {
  makeStyles,  
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';

import {Close} from '@material-ui/icons';
import {DialogContext} from '../index';

import {Thanks} from './thanks';
import { Context as AnaliticsContext } from '../package/analitics';


const useStyle = makeStyles(theme => ({
  dialogStyles: {
    width: '100%',
    maxWidth: 350
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
    color: theme.palette.grey[500],
  },
  paperDialog: {
    borderRadius: 10
  }
}))

export const Form = ({}) => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, title, open, bottom, thanks} = useContext(DialogContext);
  
  const onClick = () => {
    setDialog({open: !open});
  }

  const onThanks = () => {
    setDialog({thanks: !thanks});
    trigger('thanks');
  }

  return(
    <>
      <Dialog open={open} onClose={onClick} aria-labelledby="form-dialog-title" maxWidth='md' classes={{paper: classes.paperDialog}}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClick}>
          <Close style={{height: 60, width: 60}} />
        </IconButton>
        { thanks 
        ? <Thanks />
        : <>
          <DialogContent style={{padding: '112px 112px 32px 112px', boxSizing: 'border-box'}}>
            {title}
            <Typography variant='body1' component="p" align='center' gutterBottom>Введите свое имя и телефон</Typography>
            <div style={{paddingTop: 48}}>
              <TextField
                autoFocus
                id="name"
                label="Имя"
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="phone"
                label="Телефон"
                type="phone"
                fullWidth
                style={{marginTop: 60}}
              />
            </div>
          </DialogContent>
          <DialogActions style={{padding: 112}}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={onThanks}>{bottom}</Button>
          </DialogActions>
        </>}
      </Dialog>
    </>
  )
}