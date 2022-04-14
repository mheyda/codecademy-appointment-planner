import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Full Name</label>
      <input name='name' type='text' value={name} placeholder='Full Name' onChange={(e) => setName(e.target.value)} required />
      <br />
      <label for='phone'>Phone Number</label>
      <input name='phone' type='tel' value={phone} placeholder='Phone Number (###-###-####)' pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' onChange={(e) => setPhone(e.target.value)} required />
      <br />
      <label for='email'>Email Address</label>
      <input name='email' type='email' value={email} placeholder='Email Address (username@example.com)' onChange={(e) => setEmail(e.target.value)} required />
      <input type='submit' />
    </form>
  );
};
