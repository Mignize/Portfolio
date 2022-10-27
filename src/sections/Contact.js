import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import ilustration from "../files/images/ilustration.svg";

const Contact = () => {
  const [name, setName] = useState({ text: "", error: "" });
  const [email, setEmail] = useState({ text: "", error: "" });
  const [message, setMessage] = useState({ text: "", error: "" });

  const regularExpression =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const verifyForm = async () => {
    let validate = true;
    if (!name.text) {
      setName({ error: "Please, enter your name" });
      validate = false;
    }

    if (!email.text) {
      setEmail({ error: "Please, enter your email" });
      validate = false;
    }

    if (typeof email.text !== "undefined") {
      const emailVerified = regularExpression.test(email.text);
      if (!emailVerified) {
        setEmail({ error: "Please, enter a valid email" });
        validate = false;
      }
    }

    if (!message.text) {
      setMessage({ error: "Please, write a message" });
      validate = false;
    }
    return validate;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await verifyForm()) {
      emailjs
        .sendForm(
          "service_m04yqon",
          "template_a7fv11r",
          e.target,
          "Td97pmZIgMfoxCWII"
        )
        .then(() => {
          swal.fire({
            icon: "success",
            position: "top-end",
            title: "Your message was send",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "An error occurred while sending the message",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  return (
    <>
      <div
        className="container contact"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="image-container">
          <img src={ilustration} alt="contact me"></img>
        </div>
        <div className="w-100">
          <div className="pb-5">
            <h1>Contact me</h1>
          </div>
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName({ text: e.target.value })}
              ></input>

              <span className="error">{name.error}</span>

              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail({ text: e.target.value })}
              />
              <span className="error">{email.error}</span>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Message"
                onChange={(e) => setMessage({ text: e.target.value })}
              ></textarea>
              <span className="error">{message.error}</span>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
