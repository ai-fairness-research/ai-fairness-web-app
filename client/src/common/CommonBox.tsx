import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
}

export const CommonWrapper: React.FC<CommonWrapperProps> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: grey[50], padding: 2, my: 2, borderRadius: 4 }}>
      {children}
    </Box>
  );
};
