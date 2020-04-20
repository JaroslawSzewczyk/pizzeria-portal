import React from 'react';
import styles from './EventsNew.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const EventsNew = () => (
  <Card>
    <CardContent align="center">
      <Typography color="textPrimary" gutterBottom>
        New Event
      </Typography>
      <Typography color="textPrimary" gutterBottom>
        Costumer details:
        <CardActions >
          <Button className={styles.btn} size="small"><AddIcon /></Button>
        </CardActions>
      </Typography>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Name"
            multiline
            rowsMax={4}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Street Address"
            multiline
            rowsMax={4}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="City"
            multiline
            rowsMax={4}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Zip Code"
            multiline
            rowsMax={4}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Phone number"
            multiline
            rowsMax={4}
          />
        </div>
      </form>
      <Table className={styles.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Table no.</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Number of people</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <FormControl>
                <Select
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell align="center">
              <form noValidate>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell align="center">
              <FormControl>
                <Select
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={5}>Three</MenuItem>
                  <MenuItem value={6}>Three</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={3}>Meal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              <form noValidate>
                <TextField
                  id="standard-multiline-static"
                  label="Meal"
                  multiline
                  rows={4}
                />
              </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <form noValidate>
        <TextField
          id="standard-multiline-static"
          label="Additional information"
          multiline
          rows={4}
        />
      </form>
    </CardContent>
  </Card>
);

export default EventsNew;
