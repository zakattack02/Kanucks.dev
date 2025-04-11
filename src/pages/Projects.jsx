// src/pages/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">All Of My Projects</h1>
      <small className="block mt-2 text-gray-600">
        Some useful, some stupid, all fun!
      </small>

      <section className="intro mt-8">
        <div className="user-info"></div>
      </section>

      <section className="repos mt-8">
        <input
          type="text"
          className="filter-repos block mx-auto p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Projects"
        />
        <ul className="repo-list mt-4 space-y-4">
          {/* Dynamically render project list items here */}
        </ul>
      </section>

      <h4 className="mt-12 text-gray-700">
        Made with ❤ by{" "}
        <a
          href="https://github.com/zakattack02/zakattack02"
          className="text-blue-500 hover:underline"
        >
          zakattack02 X OSS
        </a>
      </h4>
    </main>
  );
};

export default Projects;