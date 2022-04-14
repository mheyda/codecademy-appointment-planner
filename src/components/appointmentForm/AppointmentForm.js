import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='contact'>Appointment For</label>
      <ContactPicker name='contact' contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
      <label for='title'>Title</label>
      <input name='title' type='text' value={title} placeholder='Appointment Title' onChange={(e) => setTitle(e.target.value)} required />
      <label for='date'>Date</label>
      <input name='date' type='date' value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()} required />
      <label for='time'>Time</label>
      <input name='time' type='time' value={time} min='08:00' max='17:00' onChange={(e) => setTime(e.target.value)} required />
      <input type='submit' />
    </form>
  );
};
