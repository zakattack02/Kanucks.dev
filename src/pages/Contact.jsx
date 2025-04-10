// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div>
    <span className="flex justify-center items-center gap-6 mt-2">
    <a href="https://github.com/zakattack02/" aria-label="GitHub">
      <img height={100} width={100}
        src="/github-mark-white.png"
        alt="GitHub"
        className="w-8 h-8"
      />
    </a>
    <a href="https://www.linkedin.com/in/zachary-konik/" aria-label="LinkedIn">
      <img height={100} width={100}
        src="/icons8-linkedin-100.png"
        alt="LinkedIn"
        className="w-8 h-8"
      />
    </a>
    <a href="mailto:zak@zmbg.us" aria-label="Email">
      <img height={100} width={100}
        src="/icons8-email-100.png"
        alt="Email"
        className="w-8 h-8"
      />
    </a>
  </span>
  </div>
  );
};

export default Contact;
