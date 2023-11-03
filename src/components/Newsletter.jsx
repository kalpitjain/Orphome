import React, { useState } from "react";

function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="newsletter">
      <h1 className="newsletter-item">Join our Newsletter</h1>
      <p className="newsletter-item">
        A Biweekly Insight into the Struggles & Triumphs of Orphanages.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group newsletter-item">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-warning">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
