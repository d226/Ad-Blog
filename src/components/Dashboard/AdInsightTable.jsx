import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";

import { useState } from "react";

function createData(name, clicks, cost, conversions, revenue) {
  return { name, clicks, cost, conversions, revenue };
}

const rows = [
  createData("Cosmetics", 712, "USD 4,272", 8, "USD 16,568"),
  createData("Serums", 3961, "USD 27,331", 115, "USD 362,526"),
  createData("Facewash", 9462, "USD 76,831", 123, "USD 266,800"),
  createData("Shampoos", 439, "USD 2,151", 5, "USD 11,029"),
  createData("Conditioners", 1680, "USD 3,864", 49, "USD 175,245"),
  createData("Facewash 2", 4978, "USD 29,370", 189, "USD 623,106"),
];

export default function AdInsightTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedRows = stableSort(rows, getComparator(order, orderBy));
  const calculateTotal = () => {
    const total = rows.reduce(
      (acc, row) => {
        return {
          clicks: acc.clicks + row.clicks,
          cost: `USD ${
            parseInt(acc.cost.split(" ")[1]) + parseInt(row.cost.split(" ")[1])
          }`,
          conversions: acc.conversions + row.conversions,
          revenue: `USD ${
            parseInt(acc.revenue.split(" ")[1]) +
            parseInt(row.revenue.split(" ")[1])
          }`,
        };
      },
      { clicks: 0, cost: "USD 0", conversions: 0, revenue: "USD 0" }
    );

    return total;
  };
  const totalRow = calculateTotal();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>Ad Insights</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
              >
                Campaigns
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "clicks"}
                direction={orderBy === "clicks" ? order : "asc"}
                onClick={() => handleRequestSort("clicks")}
              >
                Clicks
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "cost"}
                direction={orderBy === "cost" ? order : "asc"}
                onClick={() => handleRequestSort("cost")}
              >
                Cost
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "conversions"}
                direction={orderBy === "conversions" ? order : "asc"}
                onClick={() => handleRequestSort("conversions")}
              >
                Conversions
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "revenue"}
                direction={orderBy === "revenue" ? order : "asc"}
                onClick={() => handleRequestSort("revenue")}
              >
                Revenue
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.conversions}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ bgcolor: "#FAFAFA" }}>
            <TableCell>Total</TableCell>
            <TableCell align="right">{totalRow.clicks}</TableCell>
            <TableCell align="right">{totalRow.cost}</TableCell>
            <TableCell align="right">{totalRow.conversions}</TableCell>
            <TableCell align="right">{totalRow.revenue}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
