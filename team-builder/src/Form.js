import React, { useState } from "react";

const Form = props => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: ""
  });

  const handleChange = event => {
    console.log("event", event.target);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addMember(formData);
    setFormData({ name: "", role: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
          role:
          <input
          type='text'
          name='role'
          value={formData.role}
          onChange={handleChange}
          />
      </label>
      <label>
          email:
          <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
      </label>
      <button>
          click to submit form
      </button>
    </form>
  );
};

export default Form;