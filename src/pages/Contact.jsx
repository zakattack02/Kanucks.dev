// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div>
    <span className="flex justify-center items-center gap-6 mt-2">
    <a href="https://github.com/zakattack02/" aria-label="GitHub">
      <img
        src="/github-mark-white.svg"
        alt="GitHub"
        className=""
      />
    </a>
    <a href="https://www.linkedin.com/in/zachary-konik/" aria-label="LinkedIn">
      <img 
        src="/linkedin-white.svg"
        alt="LinkedIn"
        className=""
      />
    </a>
    <a href="mailto:zak@zmbg.us" aria-label="Email">
      <img
        src="/email-white.png"
        alt="Email"
        className=" border-2 border-white rounded-xl border-solid"
      />
    </a>
  </span>
  </div>
  );
};

export default Contact;
