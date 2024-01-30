import React, { useState, useEffect } from "react";
import { Button, Typography, TextField, Grid, Paper } from "@mui/material";
import { useProfileContext } from "../Context/ProfileContext";
import { postData } from "../API/API";


const Auth: React.FC = () => {
  const { setUser } = useProfileContext();
  const [login, setLogin] = useState<boolean>(true);
  const [body, setBody] = useState<FieldType>({});
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("http://localhost:4000/user/login");

  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
  };
  
  const handleSubmit = async () => {
    setLoading(true);

    login
      ? setBody({ email, password })
      : setBody({ username, email, password });

    try {
      const res = await postData("http://localhost:4000/user/login", body);
      setUser(res?.data.content.user);
      setLoading(false);
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postData(url, body);
        setUser(res?.data.content.user);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(body).length > 0) {
      fetchData();
    }
  }, [body, setUser]);

  const usernameField = () => {
    return login ? null : (
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={body.username}
        onChange={(e) => setUsername(e.target.value)}
        />
    );
  };

  const toggleLoginState = () => {
    setLogin(!login);
    setUrl(login ? "http://localhost:4000/user/register" : "http://localhost:4000/user/login");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "90vh" }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <Typography style={{ marginBottom: "16px" }}>
            {login ? "Login" : "Register"}
          </Typography>
          <form
            style={{ maxWidth: 600, width: "90%", padding: "20px" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {usernameField()}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={body.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              required
              value={body.password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: "20px" }}

            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              disabled={loading}
            >
              {login ? "Login" : "Register"}
            </Button>
          </form>
          <Typography
            style={{
              marginTop: "16px",
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={toggleLoginState}
          >
            {login ? "Don't have an account? Register Now" : "Already have an account? Login"}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Auth;
