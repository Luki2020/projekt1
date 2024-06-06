import React from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <div className="form-container">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
