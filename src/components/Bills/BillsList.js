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

const bills = [
  {
    ID: "1",
    EAN: "239562938579",
    ART: "238524",
    name: "Pilavlık Pirinç",
    unitPrice: "18",
    quantity: "20",
    totalPrice: "360",
  },
  {
    ID: "2",
    EAN: "458936720032",
    ART: "235897",
    name: "Yeşil Mercimek",
    unitPrice: "18",
    quantity: "20",
    totalPrice: "360",
  },
  {
    ID: "3",
    EAN: "239562938579",
    ART: "567345",
    name: "ARO Karnobat",
    unitPrice: "18",
    quantity: "20",
    totalPrice: "360",
  },
  {
    ID: "4",
    EAN: "239562938579",
    ART: "000798",
    name: "Yudum Sıvıyağ",
    unitPrice: "18",
    quantity: "20",
    totalPrice: "360",
  },
];

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

export default function BillsTable() {
  const classes = useStyles();
  console.log(bills);
  return (
    <TableContainer className="container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Unit Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((item) => (
            <StyledTableRow key={item.ID}>
              <StyledTableCell component="th" scope="row">
                {item.ART}
              </StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">{item.unitPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">{item.totalPrice}</StyledTableCell>
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
