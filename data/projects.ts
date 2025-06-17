"use server";

import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "public", "images", "projects");

export async function getProjects() {
  return fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const folder = dirent.name;
      const images = fs
        .readdirSync(path.join(projectsDir, folder))
        .filter((file) => /\.(jpe?g|png|gif|webp|svg)$/i.test(file));
      return {
        title: folder
          .replace(/_/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        src: images.length
          ? `/images/projects/${folder}/${images[0]}`
          : "/images/placeholder.jpg",
        folder,
      };
    });
}
