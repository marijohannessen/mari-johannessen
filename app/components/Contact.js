import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class Contact extends React.Component {
  state = {
    copied: false,
    text: "mari.l.johannessen@gmail.com"
  }

  handleClick = (e) => {
    const btn = e.currentTarget;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h2 className="contact__title">Contact me at </h2>
        <CopyToClipboard text={this.state.text} onCopy={() => { this.setState({copied: true})}}>
          <button onClick={this.handleClick}>mari.l.johannessen@gmail.com</button>
        </CopyToClipboard>
      </section>
    );
  }
}

export default Contact;
