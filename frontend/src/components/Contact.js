import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
        <iframe 
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14663.099726947326!2d77.47605114697221!3d23.251275827874423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41e40648af0d%3A0xb256191a4c992275!2sAnandnagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1730613750447!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <form action="">
            <h3>Get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
