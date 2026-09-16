import Portrait from "@/components/home/portrait";
import { profile } from "@/lib/profile";

const formatPostedAt = (isoDate: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));

const PostHeader = () => {
  const { name, role, postedAt } = profile;

  return (
    <header className="flex items-stretch justify-between gap-4 border-b border-rule pb-4 sm:gap-5">
      <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
        <h1 className="font-display text-3xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-[2.05rem]">
          {name}
        </h1>
        <p className="max-w-sm text-[14px] leading-snug text-foreground/75 sm:text-[15px]">
          {role}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-muted">
          Posted on {formatPostedAt(postedAt)}
        </p>
      </div>

      <Portrait className="w-21 shrink-0 sm:w-24" />
    </header>
  );
};

export default PostHeader;
