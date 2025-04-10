import React from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">YourBrand</h1>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-pink-400">About</a>
            <a href="#mission" className="hover:text-pink-400">Mission</a>
            <a href="#explore" className="hover:text-pink-400">Explore</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our innovative solutions.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition duration-300">
            Get Started
          </button>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-900 bg-opacity-50 rounded-2xl p-10 mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-white">
            We are committed to providing cutting-edge solutions that empower businesses to grow and succeed in a competitive environment.
          </p>
        </section>

        {/* Explore Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Explore Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Service 1</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Service 2</h3>
              <p className="text-gray-300">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;