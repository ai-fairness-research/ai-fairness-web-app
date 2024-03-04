import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { authLoginService } from "../../services/utilities/provider";
import { AuthResponse } from "../../services/utilities/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
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
    authLoginService
      .post({ email: email, password: password })
      .then((res: AuthResponse) => {
        // console.log(res);
        if (res.status === "200") {
          localStorage.setItem("moral-token", res.token);
          localStorage.setItem("moral-name", res?.name || "");
          navigate("/dashboard");
        } else {
          toast.error("incorrect password/email");
        }
      })
      .catch(() => {
        toast.error("login failed");
      });
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 2,
        my: "150px",
      }}
    >
      <CardContent>
        <Typography
          color="primary"
          component={"h2"}
          variant="h3"
          sx={{ mb: 3, textAlign: "center" }}
        >
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
            type="email"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: 2 }}
            size="small"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: 2 }}
            size="small"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
