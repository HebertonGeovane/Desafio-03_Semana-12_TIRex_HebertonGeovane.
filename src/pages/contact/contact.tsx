import React from "react";
import ContactImage from "./components/contactbanner/contactimage";
import ContactForm from "./components/contactform/contactform";
import Stripe5 from "./components/stripe5/stripe5"

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col space-y-0">
      <ContactImage />

      <ContactForm />

      <Stripe5 />

    </div>
  );
};

export default ContactPage;
