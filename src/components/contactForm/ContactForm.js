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
      <input name='phone' type='tel' value={phone} placeholder='E.g. 1234567890' pattern='[1-9][0-9]{9}' onChange={(e) => setPhone(e.target.value)} required />
      <br />
      <label for='email'>Email Address</label>
      <input name='email' type='email' value={email} placeholder='E.g. username@example.com' onChange={(e) => setEmail(e.target.value)} required />
      <input type='submit' />
    </form>
  );
};
