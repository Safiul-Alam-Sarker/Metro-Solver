import React from "react";
import { useLoaderData } from "react-router-dom";

export const githubData = async () => {
  const response = await fetch(
    `https://api.github.com/users/Safiul-Alam-Sarker`
  );
  return response.json();
};

function Github() {
  const profile = useLoaderData();
  if (!profile) return <P> Loading... </P>;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",

          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={profile.avatar_url}
          alt={profile.login}
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
        <h1 style={{ margin: "20px 0 10px" }}>
          {profile.name || profile.login}
        </h1>
        <p>{profile.bio}</p>
        <p>
          Followers: {profile.followers} | Following: {profile.following}
        </p>
        <p>Public Repos: {profile.public_repos}</p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
    </>
  );
}

export default Github;
