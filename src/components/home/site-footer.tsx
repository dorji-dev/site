import Engagement from "@/components/home/engagement";
import { profile } from "@/lib/profile";

const SiteFooter = () => {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-line pt-8 text-sm text-mist sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Engagement />
        <span aria-hidden className="hidden sm:inline">
          ·
        </span>
        <p>working tree clean-ish · open to work</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
