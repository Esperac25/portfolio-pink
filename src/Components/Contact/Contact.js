import React from "react";
import Nav from "../Nav/Nav";
import './Contact.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className='contact-container'>
          <Nav/>
          <h1 className='contact-h1'>Lets Connect!</h1>
          <article className='contact-article'>
            <p>Thank you for taking the time to view my portfolio!</p>
            <p>Feel free to reach out and connect with me via LinkedIn, Github or send me an email below</p> 
            <p>I look forward to working with you!</p>
            <div className='contact-buttons'>
              <a href='https://www.linkedin.com/in/esperanza-cardenas/'><button className='tile-button'>LinkedIn</button></a>
              <a href='https://github.com/Esperac25'><button className='tile-button'>Github</button></a>
            </div>
          </article>
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mrgoppwk"
                method="POST"
            >
            <fieldset>
              <legend>Contact Me</legend>
              <label htmlFor='email'>Email:</label>
              <input type="email" name="email" />
              <label htmlFor='message'>Message:</label>
              <textarea className='message' type="text" name="message" />
              {status === "SUCCESS" ? <p>Thank you, your message has been submitted.</p> : <button className='contact-button'>Submit</button>}
              {status === "ERROR" && <p>Oops! There was an error, please try again.</p>}
            </fieldset>
      </form>
      </div>
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}