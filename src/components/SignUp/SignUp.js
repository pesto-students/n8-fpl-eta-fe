import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import firebase from "../../firebase";
import { useHistory } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  const LoginButton = styled(Button)`
    background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
  `;

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      history.push("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        size="small"
        margin="normal"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        size="small"
        margin="normal"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <br />
      <LoginButton variant="contained" onClick={onRegister}>
        Log In
      </LoginButton>
    </div>
  );
}
