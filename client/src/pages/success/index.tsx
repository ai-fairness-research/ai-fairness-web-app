import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { secondary, success } from "../../theme/themeColors";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const uniqueId = localStorage.getItem("uniqueId");

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

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
        {uniqueId && (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography sx={{ fontWeight: 700, color: secondary[400] }}>
              YOUR MECHANICAL TURK CODE: {uniqueId}
            </Typography>
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(uniqueId);
                setCopied(true);
              }}
            >
              {copied ? "Copied" : "Copy"}
            </Button>
          </Box>
        )}

        <Button variant="contained" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessPage;
