import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ children, index, value, ...other }: Props): ReactElement => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
