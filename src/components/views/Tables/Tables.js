import React from 'react';
import styles from './Tables.module.scss';
// import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='center'>1</TableCell>
          <TableCell align='center' colSpan={2}>
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
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Rezerwacja</TableCell>
          <TableCell>12:00 - 12:30</TableCell>
          <TableCell>Szczegóły</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rezerwacja</TableCell>
          <TableCell>12:00 - 12:30</TableCell>
          <TableCell>Szczegóły</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
