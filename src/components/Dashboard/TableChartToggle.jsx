import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./TableChartToggle.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Male", "Female", "Unknown"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 35, 25],
      backgroundColor: ["#FF823C", "#0096FF", "#323C46"],
      borderWidth: 1,
    },
  ],
};

function TableChartToggle() {
  return (
    <div className="chart-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5}>Ad Insights</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Doughnut data={data} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableChartToggle;
