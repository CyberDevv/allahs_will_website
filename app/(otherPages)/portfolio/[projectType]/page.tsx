import fs from "fs";
import path from "path";
import ImageGallery from "@/components/portfolio/ImageGallery";

export default function Page({ params }: { params: { projectType: string } }) {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    params.projectType
  );

  let images: string[] = [];
  try {
    images = fs
      .readdirSync(imagesDir)
      .filter((file) => /\.(jpe?g|png|gif|webp|svg)$/i.test(file));
  } catch (e) {
    images = [];
  }

  return <ImageGallery images={images} projectType={params.projectType} />;
}
