import React from 'react';
import styles from './Booking.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Booking = () => (
  <Card>
    <CardContent align="center">
      <Typography color="textPrimary" gutterBottom>
        Costumer details:
        <CardActions >
          <Button className={styles.btn} size="small"><EditIcon /></Button>
        </CardActions>
      </Typography>
      <Typography color="textSecondary" gutterBottom>Jan Kowalski </Typography>
      <Typography color="textSecondary" gutterBottom> 49B Thope Rode </Typography>
      <Typography color="textSecondary" gutterBottom> Leicester </Typography>
      <Typography color="textSecondary" gutterBottom>tel: 453378559 </Typography>
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
              <Typography color="textSecondary" gutterBottom>2</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>16.04.2020</Typography>
              <Typography color="textSecondary" gutterBottom>14:30 - 16:00</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>3</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={3}>Meal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              <Typography color="textSecondary" gutterBottom>Nonna Albas Pizza, Nonno Albertos Salad</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography  color="textPrimary">
          Additional information
      </Typography>
      <Typography variant="body2" component="p">
          well meaning and kindly.
      </Typography>
    </CardContent>
  </Card>
);

export default Booking;
