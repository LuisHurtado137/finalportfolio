import { useForm, ValidationError } from "@formspree/react";
import {
  ContactForm,
  ButtonForm,
  InfoInput,
  ContactPage,
} from "../styles/contactStyles";

export function Contact() {
  const [state, handleSubmit] = useForm("xbjqeppk");

  if (state.succeeded) {
    return alert("THANK YOU FOR VISITING MY PORTFOLIO, HAVE A GREAT DAY :)");
  }

  return (
    <ContactPage id="contact">
      <p>
        "Before all this, <br /> my life was a blank page. <br /> The old me who
        cried, <br /> right now he would be happy to see me."
      </p>
      <ContactForm onSubmit={handleSubmit}>
        <h3>Contact me</h3>
        <InfoInput id="name" placeholder="Name" type="text" name="name" />
        <InfoInput id="email" placeholder="Email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter a message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ButtonForm type="submit" disabled={state.submitting}>
          SUBMIT
        </ButtonForm>
      </ContactForm>
    </ContactPage>
  );
}
