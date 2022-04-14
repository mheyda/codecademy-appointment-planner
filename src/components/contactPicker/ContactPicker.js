import React from "react";

export const ContactPicker = ({ name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange} required>
      <option value={""} key={-1} selected="selected" disabled>Select a Contact</option>
      {contacts.map((contact) => (
        <option>{contact.name}</option>
      ))}
    </select>
  );
};
