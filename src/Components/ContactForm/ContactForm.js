"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  //Create empty form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [userFeedback, setUserFeedback] = useState("");

  // * ------------ FUNCTIONS ------------
  function handleSubmit() {
    event.preventDefault();
    console.log("submit" + formData.email);
    setUserFeedback(
      "Mailet har blivit skickat ifrån din mail: " + formData.email
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    event.preventDefault();
  };

  // * ---------- Return of the HTML ----------
  return (
    <>
      <div>{userFeedback}</div>

      <form onSubmit={handleSubmit} className={styles.contactformcontainer}>
        <div>
          <label htmlFor="name" className={styles.contactformcontainer}>
            Name:
          </label>
          <input
            className={styles.contactformcontainer}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.contactformcontainer}>
            Email:
          </label>
          <input
            className={styles.contactformcontainer}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.contactformcontainer}>
            Message:
          </label>
          <textarea
            className={styles.contactformcontainer}
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.contactformcontainer}>
          Submit
        </button>
      </form>
    </>
  );
}
