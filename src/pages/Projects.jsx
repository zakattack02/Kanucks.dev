// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project Title</h3>
            <p className="mt-4">A short description of the project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project Title</h3>
            <p className="mt-4">A short description of the project.</p>
          </div>
          {/* More project cards can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
