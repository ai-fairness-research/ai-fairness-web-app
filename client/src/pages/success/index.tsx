import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { success } from "../../theme/themeColors";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          minHeight: "75vh",
        }}
      >
        <CheckCircleIcon sx={{ color: success.main, fontSize: 128 }} />
        <Typography variant="h5">
          Thank you for completing the Survey
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessPage;
