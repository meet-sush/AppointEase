import axios from "axios";
import React, { useState } from "react";

function signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.passwordConfirm)
      return alert("password not match");
    try {
      const response = await axios.post(
        "https://your-api-url/register",
        formData
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="w-50 m-auto bg-light rounded p-5">
        <h2 className="text-center">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control mb-3"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm password:</label>
            <input
              className="form-control mb-3"
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn default__button mt-3 mb-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default signup;
