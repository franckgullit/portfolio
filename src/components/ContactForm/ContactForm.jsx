import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.scss";


const ContactForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_booun4g";
    const templateID = "template_iyh4dh5";
    const userID = "IKc1O9BPIWxJ5g_a-";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("An error occurred while sending your message.");
      });

    e.target.reset(); // clear form after sending
  };

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form-fields">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          placeholder="Your message..."
          required
        ></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;