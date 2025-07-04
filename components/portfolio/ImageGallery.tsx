"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ModalProvider,
  ModalBody,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function ImageGallery({
  images,
  projectType,
}: {
  images: string[];
  projectType: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const prevImage = () =>
    setCurrentIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const nextImage = () =>
    setCurrentIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  return (
    <ModalProvider>
      <section className="container_fluid ~py-[3rem]/[5rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.length > 0 ? (
            images.map((img, idx) => (
              <ModalTrigger key={img + idx}>
                <div
                  className="relative w-full aspect-[4/3] rounded overflow-hidden cursor-pointer"
                  onClick={() => openModal(idx)}
                >
                  <Image
                    src={`/images/projects/${projectType}/${img}`}
                    alt={img}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ModalTrigger>
            ))
          ) : (
            <p>No images found for this project type.</p>
          )}
        </div>

        {modalOpen && images.length > 0 && (
          <ModalBody className="flex flex-col items-center justify-center !max-w-screen-xl">
            <div className="flex items-center justify-center w-full">
              {/* Desktop: arrows outside image, Mobile: arrows on image */}
              {/* Left Arrow */}
              <button
                className="hidden sm:block text-black text-5xl mr-4 z-10 p-2 hover:bg-black/30 rounded-full"
                onClick={prevImage}
                aria-label="Previous"
                type="button"
              >
                &#8592;
              </button>
              <div className="relative w-[95vw] max-w-5xl aspect-[4/3] rounded overflow-hidden flex items-center justify-center bg-black">
                {/* Mobile arrows */}
                <button
                  className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-2 bg-black/40 rounded-full"
                  onClick={prevImage}
                  aria-label="Previous"
                  type="button"
                >
                  &#8592;
                </button>
                <Image
                  src={`/images/projects/${projectType}/${images[currentIdx]}`}
                  alt={images[currentIdx]}
                  fill
                  className="object-cover"
                  sizes="95vw"
                />
                <button
                  className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-2 bg-black/40 rounded-full"
                  onClick={nextImage}
                  aria-label="Next"
                  type="button"
                >
                  &#8594;
                </button>
              </div>
              {/* Right Arrow */}
              <button
                className="hidden sm:block text-black text-5xl ml-4 z-10 p-2 hover:bg-black/30 rounded-full"
                onClick={nextImage}
                aria-label="Next"
                type="button"
              >
                &#8594;
              </button>
            </div>
          </ModalBody>
        )}
      </section>
    </ModalProvider>
  );
}