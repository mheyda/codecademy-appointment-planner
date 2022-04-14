import React from "react";

export const ContactPicker = ({ contacts, onChange}) => {
  return (
    <select name='contact' onChange={onChange} required>
      <option value="" selected disabled hidden>Select a Contact</option>
      {contacts.map((contact) => (
        <option>{contact.name}</option>
      ))}
    </select>
  );
};
