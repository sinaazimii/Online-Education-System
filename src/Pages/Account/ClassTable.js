import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
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
  createData('Arttificial Inteligence', 'Teacher', 11 , 'In Progress', 'Enter'),
  createData('Web Programming', 'Student', 9 , 'In Progress', 'Enter'),
  createData('Embeded Systems', 'Teacher Assistant', 20 , 'Over', 'Enter'),
  createData('Computer Architectute', 'Teacher', 15 , 'Over', 'Enter'),
  createData('Linear Algebra', 'Student', 10, 'In Progress', 'Enter'),
];

const getBlogPost = () => {
  axios.get('/api')
    .then((response) => {
      const data = response.data;

      const myData = data.calssList //rows of table 
        
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });
}

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <>
    <h1 className="partition-header">Class Table</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell >Class Title</TableCell>
            <TableCell align="center">Your Role</TableCell>
            <TableCell align="center">Students</TableCell>
            <TableCell align="center">Status</TableCell>
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
              <TableCell style={{ color:'blue'}} align="center"><a href="./take-quiz">{row.protein}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
