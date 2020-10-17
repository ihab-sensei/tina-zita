import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function InventoryTable({ inventory }) {
  const classes = useStyles();

  return (
    <TableContainer className="container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name </StyledTableCell>
            <StyledTableCell align="right">Code</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Unit</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
    
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.code}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.unit} </StyledTableCell>
              <StyledTableCell align="right">{row.price} TL</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
