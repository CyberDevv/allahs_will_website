"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";

type ImageModalProps = {
  src: string;
  label: string;
};

export function ImageModal({ src, label }: ImageModalProps) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn w-full h-full p-0">
          <Image
            src={src}
            width={320}
            height={450}
            alt="image"
            className="object-cover w-full max-h-[500px] rounded-xl group-hover/modal-btn:translate-x-96 transition duration-500 grayscale"
          />
          <Image
            src={src}
            width={320}
            height={450}
            alt="image"
            className="object-cover w-full max-h-[500px] rounded-xl -translate-x-[400px] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20"
          />
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div>
              <Image
                src={src}
                width={320}
                height={450}
                alt="image"
                className="w-full min-h-[800ox] h-[80vh] object-cover"
              />
              <h2 className="text-xl mt-5 font-kanit font-medium tracking-wider">{label}</h2>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
