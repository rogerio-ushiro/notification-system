import "./App.css";
import React from "react";
import { AppBar, Grid, Stack, Card, CardContent } from "@mui/material";
import ToolBarComponent from "../components/ToolBar/ToolBarComponent";
import NotificationTable from "../components/NotificationTable/NotificationTable";

export default function App() {
  return (
    <div className="App">
      <AppBar component="nav">
        <ToolBarComponent />
      </AppBar>
      <Grid container justifyContent="center">
        <Card variant="none">
          <CardContent>
            <Stack spacing={1}>
              <Card sx={{ display: { xs: "block" } }}>
                <NotificationTable />
              </Card>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
