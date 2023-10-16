import { Box, Container, Stack } from "@mui/material";
import React from "react";
import AdInsightTable from "./AdInsightTable";
import AdChartAndTable from "./AdChartAndTable";

function Dashboard() {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100vw", bgcolor: "#FAFAFA", p: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Container sx={{ height: 500, width: 800, bgcolor: "#FFFFFF" }}>
            <AdInsightTable />
          </Container>
          <Container sx={{ height: 500, width: 800, bgcolor: "#FFFFFF" }}>
            <AdChartAndTable />
          </Container>
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
