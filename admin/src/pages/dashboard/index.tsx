import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid } from "@mui/material";
import SurveyData from "./components/SurveyData";

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Grid container sx={{ my: 3 }}>
        <Grid item md={3}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              orientation="vertical"
            >
              <Tab label="Survey Data" value="1" />
              <Tab label="Bias" value="2" />
              <Tab label="Context" value="3" />
            </TabList>
          </Box>
        </Grid>
        <Grid item md={9}>
          <TabPanel value="1">
            <Box sx={{ px: 2, minHeight: "80vh" }}>
              <SurveyData />
            </Box>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  );
};

export default Dashboard;
