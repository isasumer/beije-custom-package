import { Box,  Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { getMessages } from "@/i8n";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function ProductsTab() {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={getMessages("057")} value="1" />
            <Tab label={getMessages("058")} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{getMessages("057")}</TabPanel>
        <TabPanel value="2">{getMessages("058")}</TabPanel>
      </TabContext>
    </Box>
  );
}
