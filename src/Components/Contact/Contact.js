import React from "react";

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
        <div className='container'>
        <h1>Contact Me</h1>
            <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgoppwk"
        method="POST"
      >
        
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thank you, your message has been submitted.</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Oops! There was an error, please try again.</p>}
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