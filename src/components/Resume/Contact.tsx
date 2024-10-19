import React from 'react';
import ContactMe from "@site/src/components/ContactMeBtn";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div>
      <ContactMe />
      </div>
      {/* Add other activities similarly */}
    </section>
  );
};

export default Contact;