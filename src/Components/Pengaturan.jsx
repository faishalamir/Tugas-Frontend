import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Pengaturan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/SignUp");
    }
  });
  const data = JSON.parse(localStorage.getItem("user-info"));
  return (
    <>
      <Navbar />
      <h2 className="text_tarif">Profile </h2>
      <div className="border_Profile">
        <h1 style={{ textIndent: "1vmax" }} className="form_tarif"></h1>

        {/* !! Form */}

        <Form style={{ marginLeft: "4%", marginTop: "2vmax" }}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Nama User
            </Form.Label>
            <Form.Control
              style={{ width: "70%" }}
              type="text"
              autoComplete="off"
              required
              placeholder={data.Name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Akses User
            </Form.Label>
            <Form.Control
              style={{ width: "70%" }}
              autoComplete="off"
              type="text"
              placeholder={data.Akses_User}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Email
            </Form.Label>
            <Form.Control
              style={{ width: "70%" }}
              autoComplete="off"
              type="Email"
              placeholder={data.Email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Password
            </Form.Label>
            <Form.Control
              style={{ width: "70%" }}
              autoComplete="off"
              type="password"
              placeholder={data.Password}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1vmax" }}
          >
            Save Profile
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Pengaturan;
