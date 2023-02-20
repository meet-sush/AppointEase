// import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://your-api-url/login", formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`${styles.login__form__content}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control mb-4"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control mb-4"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className={`default__button box__button my-3`}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
