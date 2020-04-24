import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Kitchen = () => (
  <Paper>
    <List dense>
      {[0, 1, 2].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemText id={labelId} primary={`${value + 1}`} />
            <ListItemText id={labelId} primary={`Table no. ${value + 1}`} />
            <ListItemText id={labelId} primary={`item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  </Paper>
);

export default Kitchen;
