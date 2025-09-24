// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Projects = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch user profile
    const fetchProfile = async () => {
      const res = await fetch("https://api.github.com/users/zakattack02");
      const data = await res.json();
      setProfile(data);
    };

    // Fetch repositories
    const fetchRepos = async () => {
      const res = await fetch(
        "https://api.github.com/users/zakattack02/repos?sort=pushed"
      );
      const data = await res.json();
      setRepos(data);
    };

    fetchProfile();
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-32 pb-24 px-8 text-white min-h-screen" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
        </motion.div>

        {/* Search Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="🔍 Search Projects"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Section */}
          <div className="lg:col-span-1">
            {profile && (
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-3 mb-4 hover:bg-white/10 transition-all duration-300 sticky top-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center">
                  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={profile.avatar_url}
                      alt="Profile Avatar"
                      className="w-16 h-16 rounded-full border-2 border-blue-500/30 mx-auto mb-2 cursor-pointer hover:border-blue-400/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <h2 className="text-sm font-bold text-blue-400 mb-1">
                    <a href={profile.html_url} className="hover:text-cyan-400 transition-colors">
                      {profile.name}
                    </a>
                  </h2>
                  <p className="text-gray-400 text-xs mb-2">@{profile.login}</p>
                  <p className="text-gray-300 text-xs mb-3">{profile.bio}</p>
                  <div className="space-y-1">
                    <div className="text-xs text-blue-300">📂 {profile.public_repos} Repos</div>
                    <div className="text-xs text-cyan-300">� {profile.followers} Followers</div>
                    {profile.location && (
                      <div className="text-xs text-gray-400">📍 {profile.location}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Content - Projects Grid */}
          <div className="lg:col-span-3">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
          {filteredRepos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    {repo.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">
                    {repo.description || "No description available"}
                  </p>
                  
                  {/* Language and Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="px-2 py-1 bg-white/10 rounded text-xs text-cyan-300">
                        {repo.language}
                      </span>
                    )}
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-center text-sm font-medium rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📂 Code
                  </motion.a>
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center text-sm font-medium rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚀 Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
            
            {/* No Results Message */}
            {filteredRepos.length === 0 && search && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-lg">No projects found matching "{search}"</p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-4 px-6 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;