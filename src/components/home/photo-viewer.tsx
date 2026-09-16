"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/lib/profile";

type PhotoViewerProps = {
  onClose: () => void;
};

const PhotoViewer = ({ onClose }: PhotoViewerProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { src, alt } = profile.image;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 border border-white/25 bg-foreground/40 px-3 py-1.5 font-mono text-[11px] tracking-wide text-white uppercase transition-colors hover:bg-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Close
      </button>

      <div
        className="relative h-[min(90dvh,900px)] w-[min(92vw,720px)]"
        onClick={(event) => event.stopPropagation()}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 720px) 92vw, 720px"
            className="object-contain"
            priority
          />
        ) : null}
      </div>
    </div>
  );
};

export default PhotoViewer;
