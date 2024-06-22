import "../styles/Contact.css";
import { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26dfc7b8-306b-41d8-a730-7186dd3a18c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent Succesfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" onSubmit={onSubmit} className="contact">
      <h1>Contact</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>
          <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-detail">
            <span className="material-symbols-outlined">
              mail
            </span>
            <p>anuraguranw3@gmail.com</p>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact