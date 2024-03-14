import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import SurveyData from "./components/SurveyData";
import Bias from "./components/Bias";
import Context from "./components/Context";
import Attitude from "./components/Attitude";

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event.target);
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
          >
            <Tab label="Survey Data" value="1" />
            <Tab label="Bias" value="2" />
            <Tab label="Context" value="3" />
            <Tab label="Attitude" value="4" />
          </TabList>
        </Box>

        <Box>
          <TabPanel value="1">
            <Box sx={{ px: 2, minHeight: "80vh" }}>
              <SurveyData />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Bias />
          </TabPanel>
          <TabPanel value="3">
            <Context />
          </TabPanel>
          <TabPanel value="4">
            <Attitude />
          </TabPanel>
        </Box>
      </Container>
    </TabContext>
  );
};

export default Dashboard;
