import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Login: React.FC = () => {
  //   const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle submission logic here, e.g., validation and API call
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 2,
      }}
    >
      <CardContent>
        <Typography color="primary" component={"h2"}>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: 1 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
