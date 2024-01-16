import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", display: "flex" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            sx={{ textDecoration: "none" }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              sx={{
                width: "50%",
                color: "rgba(221, 167, 79, 1)",
              }}
              label="Followers"
              value="1"
            />
            <Tab label="Following" value="2" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}

export default LabTabs;
