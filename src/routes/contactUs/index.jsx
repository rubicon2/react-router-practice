import { Form } from 'react-router-dom';
import './_index.scss';

export default function ContactUs() {
  return (
    <main className="container">
      <h1 className="page-heading">Contact Us</h1>
      <p className="main-p p-twenty-five-em">
        Please don&apos;t hesitate to get in touch. We aim to respond to all
        queries within 2 fake days.
      </p>
      <Form className="contact-us--form">
        <label className="contact-us--form--item">
          Fake Name
          <input type="text" name="name" />
        </label>
        <label className="contact-us--form--item">
          Fake Email
          <input type="email" name="email" />
        </label>
        <label className="contact-us--form--item">
          Fake Message
          <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}
