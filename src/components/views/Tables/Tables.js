import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const demoContent = [
  {
    id: 'Table no. 1', status: [{id: '1' ,reservation: 'reservation', time: '11:30 - 12:00', details: null },
      {id: '2' ,reservation: 'reservation', time: '12:30 - 13:00', details: `Nonna Alba's Pizza` },
      {id: '3' ,reservation: 'Event', time: '18:30 - 20:30', details: `Birthday` }],
  },
  {
    id: 'Table no. 2', status: [{id: '1' ,reservation: 'reservation', time: '10:30 - 11:30', details: 'Lunch' },
      { id: '2', reservation: 'reservation', time: '14:30 - 16:00', details: `Family meeting` }],
  },
  {
    id: 'Table no. 3', status: [{id: '1' ,reservation: 'reservation', time: '14:30 - 15:00', details: null },
      {id: '2' ,reservation: 'reservation', time: '16:30 - 17:00', details: `Nonna Alba's Pizza` },
      {id: '3' ,reservation: 'Event', time: '18:30 - 19:30', details: `` }],
  }];

const Tables = () => (
  <Paper className={styles.component}>
    <Button className={styles.btn} component={Link} to={`${process.env.PUBLIC_URL}/booking/new`}><AddIcon />Add new book</Button>
    <Button className={styles.btn} component={Link} to={`${process.env.PUBLIC_URL}/events/new`}><AddIcon />Add new event</Button>
    {demoContent.map(table => (
      <Table className={styles.myHead} key={table.id}>
        <TableHead>
          <TableRow>
            <TableCell>{table.id}</TableCell>
            <TableCell>
              <form noValidate>
                <TextField
                  id="date"
                  label="Chose date"
                  type="date"
                  defaultValue="2020-04-16"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.status.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>
                <Button component={Link} to={`${process.env.PUBLIC_URL}${reservation.reservation === 'reservation' ? '/book/zxc123' : '/events/event/ghj456'}`}>{reservation.reservation}</Button>
              </TableCell>
              <TableCell>{reservation.time}</TableCell>
              <TableCell>{reservation.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ))}
  </Paper>
);

export default Tables;
