import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function EventsEdit(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [maxWidth, setMaxWidth] = React.useState('sm');

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Edit</Button>
          <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
                <DialogTitle>Edit Event</DialogTitle>
                    <DialogContent>
                            <TextField
                                  size="medium"
                                  label="Location"
                                  type="text"
                                  variant="filled"
                            />
                            <TextField
                                  size="medium"
                                  type="date"
                                  variant="filled"
                            />
                            <TextField
                                  size="medium"
                                  type="time"
                                  variant="filled"
                            />
                            <Button>Delete Event</Button>
                    </DialogContent>
                <DialogActions>
                      <Button onClick={handleClose} color="primary">Cancel</Button>
                      <Button onClick={handleClose} color="primary">Submit Changes</Button>
                </DialogActions>
          </Dialog>
    </div>
  );
}
export default connect(mapStoreToProps)(EventsEdit);
