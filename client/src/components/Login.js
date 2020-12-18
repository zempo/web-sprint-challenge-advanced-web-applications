import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState(initialValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/bubble-page");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Enjoy Bubble-y Content</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={creds.username}
          onChange={handleChange}
          placeholder='Enter Username'
        />
        <input
          type='password'
          name='password'
          value={creds.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
