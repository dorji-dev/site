import Image from "next/image";
import { profile } from "@/lib/profile";
import type { ReviewNote } from "@/lib/life-diff";

type ReviewThreadProps = {
  notes: ReviewNote[];
  onOpenPhoto: () => void;
};

const ReviewThread = ({ notes, onOpenPhoto }: ReviewThreadProps) => {
  return (
    <aside className="border-y border-line bg-background px-3 py-3 font-sans sm:px-4">
      <div className="max-w-2xl divide-y divide-line overflow-hidden rounded-lg border border-line sm:ml-[5.15rem]">
        {notes.map((note) => (
          <div key={note.id} className="flex gap-3 px-4 py-3.5">
            <button
              type="button"
              onClick={onOpenPhoto}
              className="mt-0.5 size-7 shrink-0 overflow-hidden rounded-full bg-surface ring-1 ring-line"
              aria-label={`View photo of ${profile.name}`}
            >
              <Image
                src={profile.image.src}
                alt=""
                width={28}
                height={28}
                className="size-full object-cover"
              />
            </button>
            <div className="min-w-0">
              <p className="text-sm text-mist">
                <span className="font-medium text-ink">dorji</span>
                {" · author note "}
                <span className="tabular-nums">
                  {note.index}/{note.total}
                </span>
              </p>
              <p className="mt-1 text-sm leading-6 text-ink sm:text-[15px]">
                {note.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ReviewThread;
