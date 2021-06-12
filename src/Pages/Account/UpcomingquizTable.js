import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    width:900 , 
    height:400 , 
    alignItems:'left' ,
    backgroundColor:'#white'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Arttificial Inteligence', '2020/09/14', 6.0, '-/100', 'Participate'),
  createData('Web Programming', '2020/09/09', 9.0, '-/100', 'Participate'),
  createData('Embeded Systems', '2020/09/03', 16.0, '-/100', 'Participate'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <>
    <h1 className="partition-header">Upcomig Quiz Table</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Quiz Title</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Constructor/Class</TableCell>
            <TableCell align="center">Rate</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            
              <TableCell style={{ color:'blue'}} align="center"><a>{row.protein}</a></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
