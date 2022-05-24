import React from "react";
import "./ContactMe.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiKakaoTalkFill } from "react-icons/ri";

const ContactMe = () => {
  return (
    <section id="ContactMe">
      <div className="contact_name">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ghdghkwo5@gmail.com</h5>
            <a href="mailto:ghdghkwo5@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>HongHwanak</h5>
            <a href="https://m.me/100003576937305" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiKakaoTalkFill />
            <h4>Kakaotalk</h4>
            <h5>ghdghkwo5</h5>
            <a href="https://open.kakao.com/o/smJV7Ihe" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="Email" name="Email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
