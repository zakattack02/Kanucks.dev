// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import "../projects.css"; // Import the CSS file

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

  return (
    <main className="projects-container" style={{
      backgroundColor: "#1a1c1d",
      minHeight: "100vh",
      paddingTop: "100px", // Account for fixed navbar
      paddingBottom: "2rem"
    }}>
      <section className="intro">
        <div className="user-info">
          {profile && (
            <>
              <figure >
                <img className="img-container" alt="user avatar" src={profile.avatar_url} />
              </figure>
              <div>
                <h2>
                  <a href={profile.html_url}>
                    <strong>{profile.name} - {profile.login}</strong>
                  </a>
                </h2>
                <p>{profile.bio}</p>
                <p>
                  Followers: <strong>{profile.followers}</strong> Repos:{" "}
                  <strong>{profile.public_repos}</strong> Gists:{" "}
                  <strong>{profile.public_gists}</strong>
                </p>
                <p>
                  Work: {profile.company} Location: {profile.location}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

    <div style={{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "#1a1c1d",
      padding: "2em 0"
    }}>
      <section className="repos" style={{
        width: "100%",
        backgroundColor: "#1a1c1d",
        padding: "2em",
        borderRadius: "0"
      }}>
        <input
          type="text"
          className="filter-repos"
          style={{
            border: "2px solid #1688f0",
            outline: "2px solid rgba(22, 136, 240, 0.3)",
            boxShadow: "0 0 10px rgba(22, 136, 240, 0.2)",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(26, 28, 29, 0.8)",
            color: "#eeeeee"
          }}
          placeholder="🔍 Search Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(e) => {
            e.target.style.outline = "2px solid rgba(22, 136, 240, 0.6)";
            e.target.style.boxShadow = "0 0 15px rgba(22, 136, 240, 0.4)";
          }}
          onBlur={(e) => {
            e.target.style.outline = "2px solid rgba(22, 136, 240, 0.3)";
            e.target.style.boxShadow = "0 0 10px rgba(22, 136, 240, 0.2)";
          }}
        />
        <ul className="repo-list" style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          padding: "2rem 0",
          margin: "0"
        }}>
          {filteredRepos.map((repo) => (
            <li key={repo.id} className="repo" style={{
              border: "2px solid #1688f0",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(26, 28, 29, 0.9) 0%, rgba(22, 136, 240, 0.05) 100%)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(22, 136, 240, 0.1)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(22, 136, 240, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(22, 136, 240, 0.1)";
            }}
            >
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "3px",
                background: "linear-gradient(90deg, #1688f0, #00bcd4, #1688f0)",
                backgroundSize: "200% 100%",
                animation: "gradient 3s ease infinite"
              }}></div>
              <div style={{ padding: "20px", flexGrow: 1 }}>
                <h3 className="repo-name" style={{
                  color: "#1688f0",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  marginTop: "12px",
                  marginBottom: "16px"
                }}>{repo.name}</h3>
                <p className="repo-description" style={{
                  padding: "8px 0px",
                  fontStyle: repo.description ? "normal" : "italic",
                  opacity: repo.description ? "1" : "0.7",
                  color: "#eeeeee",
                  flexGrow: 1
                }}>
                  {repo.description || "No description available"}
                </p>
              </div>
              <div style={{ padding: "16px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href={repo.html_url} className="link-btn" style={{
                  background: "linear-gradient(45deg, #1688f0, #00bcd4)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                }}>
                  📂 View Code
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} className="link-btn" style={{
                    background: "linear-gradient(45deg, #4caf50, #8bc34a)",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                  }}>
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      </div>
    </main>
  );
};

export default Projects;