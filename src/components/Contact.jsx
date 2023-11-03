import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToMailingList: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="contact">
      <div className="container mt-4">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agreeToMailingList"
              checked={formData.agreeToMailingList}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="agreeToMailingList">
              I agree to be added to the mailing list and receive notifications
              to my email address, whether updates or advertising content.
            </label>
          </div>
          <button type="submit" className="btn btn-warning">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
