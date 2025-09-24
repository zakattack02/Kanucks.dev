// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Projects = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const { width } = useWindowSize();

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
    <div className="pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8 text-white min-h-screen" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
              style={{
                fontSize: width < 450 ? '36px' : 
                         width < 640 ? '72px' :
                         width < 768 ? '86px' :
                         width < 1024 ? '115px' : '144px'
              }}
            >
              My Projects
            </h1>
          </motion.div>

          {/* Search Section */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-sm sm:max-w-md mx-auto px-4">
            <input
              type="text"
              placeholder="🔍 Search Projects"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Profile Section - Mobile: Top, Desktop: Left Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-none">
            {profile && (
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 lg:p-3 mb-4 hover:bg-white/10 transition-all duration-300 lg:sticky lg:top-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center lg:text-center">
                  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={profile.avatar_url}
                      alt="Profile Avatar"
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-blue-500/30 mx-auto mb-3 lg:mb-2 cursor-pointer hover:border-blue-400/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <h2 className="text-base sm:text-lg lg:text-sm font-bold text-blue-400 mb-2 lg:mb-1">
                    <a href={profile.html_url} className="hover:text-cyan-400 transition-colors">
                      {profile.name}
                    </a>
                  </h2>
                  <p className="text-gray-400 text-sm lg:text-xs mb-3 lg:mb-2">@{profile.login}</p>
                  <p className="text-gray-300 text-sm lg:text-xs mb-4 lg:mb-3 leading-relaxed">{profile.bio}</p>
                  <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3 lg:flex-col lg:gap-1 lg:space-y-1">
                    <div className="text-sm lg:text-xs text-blue-300">📂 {profile.public_repos} Repos</div>
                    <div className="text-sm lg:text-xs text-cyan-300">👥 {profile.followers} Followers</div>
                    {profile.location && (
                      <div className="text-sm lg:text-xs text-gray-400">📍 {profile.location}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3 order-2 lg:order-none">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
          {filteredRepos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col min-h-[280px] touch-manipulation"
            >
              {/* Content Section */}
              <div className="flex-grow mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3 line-clamp-2">
                  {repo.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[3rem] line-clamp-3">
                  {repo.description || "No description available"}
                </p>
                
                {/* Language and Stats */}
                <div className="flex flex-row flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {repo.language && (
                    <span className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-300 font-medium">
                      {repo.language}
                    </span>
                  )}
                  <span className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
                    🍴 {repo.forks_count}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row flex-wrap gap-2 sm:gap-3 mt-auto">
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] px-3 sm:px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-center text-sm font-medium rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 min-h-[44px] flex items-center justify-center"
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
                    className="flex-1 min-w-[120px] px-3 sm:px-4 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center text-sm font-medium rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
            
            {/* No Results Message */}
            {filteredRepos.length === 0 && search && (
              <motion.div
                className="text-center py-8 sm:py-12 col-span-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-base sm:text-lg mb-4">No projects found matching "{search}"</p>
                <button
                  onClick={() => setSearch("")}
                  className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
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