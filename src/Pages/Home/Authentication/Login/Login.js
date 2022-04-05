import React, { useEffect, useState } from "react";
import "./Login.css";
import { Badge, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../../Image/icon/icon5.png";

import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../../../Hooks/useAuth";

const Login = () => {
  useEffect(() => {
    AOS.init();
  });

  const [loginData, setLoginData] = useState({});
  const { login, user, authError, isLoading, googleSignin } =  useAuth();

  const location = useLocation();

  const history = useNavigate();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };

  const handleLogin = (e) => {
    login(loginData?.email, loginData?.password, location, history);

    e.preventDefault();
  };

  const handleGoogleSignin = () => {
    googleSignin(location, history);
  };

  return (
    <div className="mt-5 pt-5">
      <h1 className="text-center  FoodHeading">Login</h1>
      <div className="container mt-5">
        <div className="row">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="col-sm-12 col-md-6 col-lg-6 mb-5"
          >
            {isLoading ? (
              <Spinner animation="border" variant="success" />
            ) : (
              <Form onSubmit={handleLogin}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleOnchange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <button type="submit" className="contactBtn">
                  Login
                </button>
              </Form>
            )}
            {user?.email ? (
              <Badge bg="success"> Successfully LoggedIn</Badge>
            )
              :
            authError && (
              <Badge bg="danger">
                something went wrong. Please! try again!
              </Badge>
            )}
            <div className="text-center my-3 text-danger shadow rounded">
              -----------or-------------
            </div>
            <button
              className="contactBtn"
              onClick={handleGoogleSignin}
            >
              Google Sign In
            </button>

            <div className="text-danger shadow mt-3 rounded p-1">
              <h5>
                New User? Please <Link to="/register">Register</Link>{" "}
              </h5>{" "}
              OR
              <Link to="/">
                <h5>Go Home</h5>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className="w-100 rounded shadow"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
