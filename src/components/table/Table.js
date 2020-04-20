import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../../App.scss";
import { fetchData } from "../../actions/HomeActions";
import { connect } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export class DataTable extends React.Component {
  render() {
    const { state_data } = this.props;
    const data_state_itr = state_data.state_data.shift();
    console.log("#", data_state_itr);

    const renderTableData = () => {
      console.log("calling function");
      return state_data.state_data.map((data, index) => {
        const { state, confirmed, recovered, active, deaths } = data; //destructuring
        return (
          <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">
              {state}
            </StyledTableCell>
            <StyledTableCell align="right">{confirmed}</StyledTableCell>
            <StyledTableCell align="right">{recovered}</StyledTableCell>
            <StyledTableCell align="right">{active}</StyledTableCell>
            <StyledTableCell align="right">{deaths}</StyledTableCell>
          </StyledTableRow>
        );
      });
    };

    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>STATE/UT</StyledTableCell>
              <StyledTableCell align="right">CONFIRMED</StyledTableCell>
              <StyledTableCell align="right">ACTIVE</StyledTableCell>
              <StyledTableCell align="right">RECOVERED</StyledTableCell>
              <StyledTableCell align="right">DECEASED</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state_data != undefined ? renderTableData() : " "}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  state_data: state.data,
});

export default connect(mapStateToProps, { fetchData })(DataTable);
