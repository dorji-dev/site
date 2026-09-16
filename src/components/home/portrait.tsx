"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoViewer from "@/components/home/photo-viewer";
import { profile } from "@/lib/profile";

type PortraitProps = {
  className?: string;
};

const Portrait = ({ className = "" }: PortraitProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { src, alt } = profile.image;

  if (!src) {
    return (
      <div
        className={`min-h-0 self-stretch bg-surface ${className}`.trim()}
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
        className={`relative min-h-0 self-stretch cursor-zoom-in overflow-hidden border border-rule transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`.trim()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="96px"
          className="object-cover object-center grayscale"
        />
      </button>

      {isOpen ? <PhotoViewer onClose={() => setIsOpen(false)} /> : null}
    </>
  );
};

export default Portrait;
