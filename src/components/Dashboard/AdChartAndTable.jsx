import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Stack,
  TableSortLabel,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TableChartToggle from "./TableChartToggle";

const rows = [
  createData("Male", 348, "USD 12,528", 42, "USD 62,118"),
  createData("Female", 692, "USD 24,912", 35, "USD 5,175"),
  createData("Unknown", 105, "USD 3,943", 3, "USD 4,489"),
];

function createData(gender, data1, data2, data3, data4) {
  return { gender, data1, data2, data3, data4 };
}

function MyTable() {
  const [viewType, setViewType] = useState("table");

  const handleViewChange = (event) => {
    setViewType(event.target.value);
  };
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>
              <Stack direction="row" justifyContent="space-around">
                <Box>Ad Insights</Box>
                <Box>
                  <Select
                    value={viewType}
                    onChange={handleViewChange}
                    sx={{ width: "130px", height: "20px" }}
                  >
                    <MenuItem value="table">Table View</MenuItem>
                    <MenuItem value="chart">Chart View</MenuItem>
                  </Select>
                </Box>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "gender"}
                direction={
                  sortConfig.key === "gender" ? sortConfig.direction : "asc"
                }
                onClick={() => requestSort("gender")}
              >
                Gender
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "data1"}
                direction={
                  sortConfig.key === "data1" ? sortConfig.direction : "asc"
                }
                onClick={() => requestSort("data1")}
              >
                Clicks
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "data2"}
                direction={
                  sortConfig.key === "data2" ? sortConfig.direction : "asc"
                }
                onClick={() => requestSort("data2")}
              >
                Cost
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "data3"}
                direction={
                  sortConfig.key === "data3" ? sortConfig.direction : "asc"
                }
                onClick={() => requestSort("data3")}
              >
                Conversion
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "data4"}
                direction={
                  sortConfig.key === "data4" ? sortConfig.direction : "asc"
                }
                onClick={() => requestSort("data4")}
              >
                Revenue
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.gender}>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.data1}</TableCell>
              <TableCell>{row.data2}</TableCell>
              <TableCell>{row.data3}</TableCell>
              <TableCell>{row.data4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ToggleTableChart() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <Stack>
        <Box>{showChart ? <TableChartToggle /> : <MyTable />}</Box>

        <IconButton
          color="primary"
          onClick={() => setShowChart(!showChart)}
          sx={{ alignSelf: "flex-end" }}
        >
          {showChart ? <TableChartIcon /> : <DataUsageIcon />}
        </IconButton>
      </Stack>
    </div>
  );
}

export default ToggleTableChart;
