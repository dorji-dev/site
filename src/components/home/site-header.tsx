import Link from "next/link";
import LocalTime from "@/components/home/local-time";
import { profile } from "@/lib/profile";

const SiteHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4 text-sm text-mist">
      <Link href="/" className="hover:text-ink">
        dorji.dev
      </Link>
      <p className="flex items-center gap-2 text-right">
        <span>{profile.location}</span>
        <span aria-hidden className="text-line">
          ·
        </span>
        <span>
          <LocalTime /> BTT
        </span>
      </p>
    </header>
  );
};

export default SiteHeader;
