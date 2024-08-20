import { createContext } from "react";

let proApi = async () => {
  try {
    const response = await fetch(
      "https://seif-sync-server.vercel.app/projects"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestProjects = await response.json();
    return latestProjects;
  } catch (error) {
    console.error("Error fetching latest projects:", error);
  }
};
let TechApi = async () => {
  try {
    const response = await fetch("https://seif-sync-server.vercel.app/tech");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestProjects = await response.json();
    return latestProjects;
  } catch (error) {
    console.error("Error fetching latest projects:", error);
  }
};

let ss = async () => {
  try {
    const response = await fetch("https://seif-sync-server.vercel.app/tech");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestProjects = await response.json();
    return latestProjects;
  } catch (error) {
    console.error("Error fetching latest projects:", error);
  }
};
let sss = async () => {
  try {
    const response = await fetch("https://seif-sync-server.vercel.app/tech");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const latestProjects = await response.json();
    return latestProjects;
  } catch (error) {
    console.error("Error fetching latest projects:", error);
  }
};

TechApi = await TechApi();
proApi = await proApi();

const ApiContext = createContext({});
export { TechApi, proApi, ss, sss, ApiContext };
