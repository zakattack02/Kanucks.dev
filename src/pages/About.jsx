// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showResume] = useState(false);
  const [activeSkillView, setActiveSkillView] = useState('badges');
  const [githubData, setGithubData] = useState({
    user: null,
    repos: [],
    languages: {},
    loading: true,
    error: null
  });

  // Fetch GitHub data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setGithubData(prev => ({ ...prev, loading: true }));
        
        const userResponse = await fetch('https://api.github.com/users/zakattack02');
        const userData = await userResponse.json();
        
        const reposResponse = await fetch('https://api.github.com/users/zakattack02/repos?sort=updated&per_page=50');
        const reposData = await reposResponse.json();
        
        const languageCount = {};
        let totalSize = 0;
        
        for (const repo of reposData.slice(0, 20)) {
          if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + (repo.size || 1);
            totalSize += repo.size || 1;
          }
        }
        
        const languages = Object.entries(languageCount)
          .map(([lang, size]) => ({
            name: lang,
            percentage: ((size / totalSize) * 100).toFixed(1),
            size
          }))
          .sort((a, b) => b.size - a.size)
          .slice(0, 6);
        
        setGithubData({
          user: userData,
          repos: reposData,
          languages,
          loading: false,
          error: null
        });
      } catch (error) {
        setGithubData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    if (activeSkillView === 'github') {
      fetchGitHubData();
    }
  }, [activeSkillView]);

  const skills = [
    { name: 'JavaScript', level: 90, icon: '⚡', color: '#F7DF1E', category: 'Frontend' },
    { name: 'React', level: 85, icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
    { name: 'Python', level: 80, icon: '🐍', color: '#3776AB', category: 'Backend' },
    { name: 'C++', level: 75, icon: '💻', color: '#00599C', category: 'Systems' },
    { name: 'Node.js', level: 78, icon: '🟢', color: '#339933', category: 'Backend' },
    { name: 'Docker', level: 70, icon: '🐳', color: '#2496ED', category: 'DevOps' },
    { name: 'Linux', level: 85, icon: '🐧', color: '#FCC624', category: 'Systems' },
    { name: 'Git', level: 88, icon: '📁', color: '#F05032', category: 'Tools' },
  ];

  const techBadges = [
    { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E' },
    { name: 'React', logo: 'react', color: '61DAFB' },
    { name: 'Python', logo: 'python', color: '3776AB' },
    { name: 'C++', logo: 'cplusplus', color: '00599C' },
    { name: 'Node.js', logo: 'node.js', color: '339933' },
    { name: 'Docker', logo: 'docker', color: '2496ED' },
    { name: 'Linux', logo: 'linux', color: 'FCC624' },
    { name: 'Git', logo: 'git', color: 'F05032' },
    { name: 'VS Code', logo: 'visualstudiocode', color: '007ACC' },
    { name: 'GitHub', logo: 'github', color: '181717' },
  ];

  const achievements = [
    { title: 'Computer Engineering Degree', description: 'Specialized in software and hardware integration', icon: '🎓' },
    { title: 'Full Stack Development', description: 'Building web applications', icon: '🌐' },
    { title: 'Innovation Focus', description: 'Always exploring technologies', icon: '</>' },
    { title: 'Problem Solver', description: 'Passionate about solving real-world challenges', icon: '🧩' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const SkillBadges = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {techBadges.map((tech, index) => (
          <motion.img
            key={index}
            src={`https://img.shields.io/badge/${tech.name}-${tech.color}?style=flat-square&logo=${tech.logo}&logoColor=white`}
            alt={tech.name}
            className="hover:scale-110 transition-transform duration-300 h-6"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          />
        ))}
      </div>
    </div>
  );

  const SkillProgress = () => (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">{skill.icon}</span>
              {skill.name}
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                {skill.category}
              </span>
            </span>
            <span className="text-blue-300 font-bold">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` 
              }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const GitHubStats = () => {
    if (githubData.loading) {
      return (
        <div className="flex items-center justify-center h-48">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading GitHub data...</p>
          </div>
        </div>
      );
    }

    if (githubData.error) {
      return (
        <div className="flex items-center justify-center h-48">
          <div className="text-center">
            <p className="text-red-400 mb-2">Error loading GitHub data</p>
            <p className="text-gray-500 text-sm">{githubData.error}</p>
          </div>
        </div>
      );
    }

    const { user, repos, languages } = githubData;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-blue-400">{user?.public_repos || 0}</div>
            <div className="text-gray-400 text-sm">Public Repos</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-green-400">{user?.followers || 0}</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-purple-400">{user?.following || 0}</div>
            <div className="text-gray-400 text-sm">Following</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-indigo-300 mb-4">Top Languages</h3>
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={lang.name} className="flex items-center justify-between">
                <span className="text-white font-medium">{lang.name}</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-indigo-300 text-sm font-medium min-w-[45px]">
                    {lang.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Recent Repositories</h3>
          <div className="space-y-3">
            {repos.slice(0, 4).map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex-1">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 font-medium"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="text-gray-400 text-sm mt-1 truncate">
                      {repo.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  {repo.language && (
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">
                      {repo.language}
                    </span>
                  )}
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="pt-32 pb-24 px-8 text-white min-h-screen" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white font-semibold rounded-full hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <span >
              📄 View Resume
            </span>
          </motion.a>
        </motion.div>

          {/* This is the introduction section for the "About Me" page 
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Computer Engineer passionate about bridging the gap between hardware and software to create innovative solutions.
          </p>
          */}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">My Journey</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                As a Computer Engineer, I've always been fascinated by the intersection of hardware and software. 
                My journey began with curiosity about how things work under the hood, leading me to explore 
                everything from embedded systems to modern web applications.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                I believe in the power of technology to solve real-world problems and am constantly seeking 
                opportunities to learn new technologies and push the boundaries of what's possible.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                When I'm not coding, you'll find me exploring the latest tech trends, working on personal 
                projects, or diving deep into the world of hardware design and embedded systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold text-blue-300 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h2 className="text-3xl font-bold text-blue-400 mb-4 sm:mb-0">Technical Skills</h2>
                <div className="flex gap-2 bg-white/5 rounded-full p-1">
                  {[
                    { key: 'badges', label: '🏷️ Badges', color: 'blue' },
                    { key: 'github', label: '📈 GitHub', color: 'blue' }
                    //{ key: 'progress', label: '📊 Progress', color: 'green' },
                    
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveSkillView(tab.key)}
                      className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeSkillView === tab.key
                          ? tab.key === 'badges' 
                            ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                            : 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <motion.div
                key={activeSkillView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeSkillView === 'badges' && <SkillBadges />}
                {activeSkillView === 'progress' && <SkillProgress />}
                {activeSkillView === 'github' && <GitHubStats />}
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Interests & Passions</h3>
              <div className="flex flex-wrap gap-3">
                {['🤖 AI/ML', '🔧 IoT', '🎮 Game Dev', '📱 Mobile Apps', '🔒 Cybersecurity', '🌐 Web3'].map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white/20 transition-all duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        
      </div>
    </div>
  );
};




export default About;
