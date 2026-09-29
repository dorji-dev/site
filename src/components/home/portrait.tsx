"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoViewer from "@/components/home/photo-viewer";
import { profile } from "@/lib/profile";

const Portrait = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { src, alt } = profile.image;

  if (!src) {
    return (
      <div
        className="aspect-square w-full max-w-[220px] bg-ink/10"
        role="img"
        aria-label="Portrait placeholder"
      />
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full photo of ${alt}`}
        className="relative block aspect-square w-full max-w-[220px] cursor-zoom-in overflow-hidden shadow-[0_10px_18px_rgba(74,42,16,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="220px"
          className="object-cover object-center"
        />
      </button>
      {isOpen ? <PhotoViewer onClose={() => setIsOpen(false)} /> : null}
    </>
  );
};

export default Portrait;
