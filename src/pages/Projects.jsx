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
    <main className="projects-container">
      <section className="intro">
        <div className="user-info">
          {profile && (
            <>
              <figure>
                <img alt="user avatar" src={profile.avatar_url} />
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


    <span style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "var(--bg-repo)",
      marginTop: "0",
      padding: "2em",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      marginBottom: "4em"
    }}>
      <section className="repos">
        <input
          type="text"
          className="filter-repos"
          placeholder="Search Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="repo-list">
          {filteredRepos.map((repo) => (
            <li key={repo.id} className="repo">
              <h3 className="repo-name">{repo.name}</h3>
              <p className="repo-description">{repo.description}</p>
              <a href={repo.html_url} className="link-btn">
                View Code
              </a>
              {repo.homepage && (
                <a href={repo.homepage} className="link-btn">
                  Live Demo
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
      </span>
    </main>
  );
};

export default Projects;