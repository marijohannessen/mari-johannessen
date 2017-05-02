import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <h2 className="contact__title">Contact me</h2>
        <form>
          <fieldset>
            <label for="name">Name</label>
            <input id="name" type="text" />
          </fieldset>
          <fieldset>
            <label for="email">Email</label>
            <input id="email" type="email" />
          </fieldset>
          <fieldset>
            <label for="message">Message</label>
            <textarea id="message" rows="10" />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Contact;
