import { Box, Tab, Tabs } from "@mui/material";
import { ReactElement, useState } from "react";
import DiscoverList from "../Posts/PostsList/DiscoverList";
import FriendsPostsList from "../Posts/PostsList/FriendsPostsList";
import TabPanel from "./Tabpanels/TabPanels";

type Props = {
  tabs: string[];
};

const Tabpanels = ({ tabs }: Props): ReactElement => {
  const [value, setValue] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs textColor="primary" value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab sx={{ textTransform: "capitalize" }} label={tab} value={index} {...a11yProps(index)} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        <FriendsPostsList />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>Discover more</h1>
        <DiscoverList />
      </TabPanel>
    </Box>
  );
};

export default Tabpanels;
