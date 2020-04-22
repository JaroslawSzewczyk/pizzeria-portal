import React from 'react';
import styles from './Home.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Home = () => (
  <Paper>
    <Table className={styles.margin}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} align="center">Orders </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Revenue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">Restaurant</TableCell>
          <TableCell align="center">10</TableCell>
          <TableCell align="center">$123.57</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Delivery</TableCell>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">$250.78</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align="center">Reservation and events</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Reservation</TableCell>
          <TableCell align="center">events</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">3</TableCell>
          <TableCell align="center">1</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </Paper>
);

export default Home;
