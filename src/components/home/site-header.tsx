import Link from "next/link";
import LocalTime from "@/components/home/local-time";
import { getAvailability, profile } from "@/lib/profile";

const SiteHeader = () => {
  const availability = getAvailability();

  return (
    <header className="grid grid-cols-2 items-center gap-x-4 gap-y-3 text-sm text-mist sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Link href="/" className="justify-self-start hover:text-ink">
        dorji.dev
      </Link>
      <p className="col-start-2 justify-self-end whitespace-nowrap sm:col-start-3">
        <span>{profile.location}</span>
        <span aria-hidden className="text-line">
          {" "}
          ·{" "}
        </span>
        <span>
          <LocalTime /> BTT
        </span>
      </p>
      <a
        href="#remotes"
        className="col-span-2 inline-flex items-center justify-self-center rounded-full bg-success-emphasis px-3 py-1 text-sm font-medium text-white hover:brightness-110 sm:col-span-1 sm:col-start-2 sm:row-start-1"
      >
        Open to work
        <span className="ms-1.5 font-normal">
          · {availability.headerWhen}
        </span>
      </a>
    </header>
  );
};

export default SiteHeader;
