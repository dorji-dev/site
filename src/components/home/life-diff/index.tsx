"use client";

import { useState, useSyncExternalStore } from "react";
import PhotoViewer from "@/components/home/photo-viewer";
import SectionLabel from "@/components/home/section-label";
import FileHeader from "@/components/home/life-diff/file-header";
import Hunk from "@/components/home/life-diff/hunk";
import { getLifeDiff } from "@/lib/life-diff";

const subscribeHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};

const getHash = () => window.location.hash.slice(1) || null;

const LifeDiff = () => {
  const hash = useSyncExternalStore(subscribeHash, getHash, () => null);
  const [notesHidden, setNotesHidden] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [photoOpen, setPhotoOpen] = useState(false);
  // Session-only, so returning visitors never land on a collapsed file.
  const [viewed, setViewed] = useState(false);
  const [copiedLine, setCopiedLine] = useState<string | null>(null);

  const lifeDiff = getLifeDiff();
  const activeLine = selectedLine ?? hash;

  const onToggleExpand = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const onSelectLine = (id: string) => {
    setSelectedLine(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const onCopyLink = async (id: string) => {
    onSelectLine(id);
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLine(id);
      window.setTimeout(() => setCopiedLine(null), 1600);
    } catch {
      setCopiedLine(null);
    }
  };

  return (
    <section id="files" className="scroll-mt-8 pt-12" aria-label={lifeDiff.path}>
      <SectionLabel aside={`1 file changed · +${lifeDiff.additions} −${lifeDiff.deletions}`}>
        what changed
      </SectionLabel>
      <div className="mt-6 overflow-hidden rounded-lg border border-line bg-background">
        <FileHeader
          path={lifeDiff.path}
          additions={lifeDiff.additions}
          deletions={lifeDiff.deletions}
          notesHidden={notesHidden}
          viewed={viewed}
          onToggleNotes={() => setNotesHidden((value) => !value)}
          onToggleViewed={() => setViewed((value) => !value)}
        />
        <div className={viewed ? "hidden" : undefined}>
          {lifeDiff.hunks.map((hunk) => (
            <Hunk
              key={hunk.id}
              hunk={hunk}
              notesHidden={notesHidden}
              expandedIds={expandedIds}
              selectedLine={activeLine}
              onSelectLine={onSelectLine}
              onToggleExpand={onToggleExpand}
              copiedLine={copiedLine}
              onCopyLink={(id) => void onCopyLink(id)}
              onOpenPhoto={() => setPhotoOpen(true)}
            />
          ))}
        </div>
      </div>
      {photoOpen ? (
        <PhotoViewer onClose={() => setPhotoOpen(false)} />
      ) : null}
    </section>
  );
};

export default LifeDiff;
