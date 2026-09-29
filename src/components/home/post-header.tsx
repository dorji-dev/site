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
    <header>
      <h1 className="font-display text-[4.25rem] leading-[0.85] text-ink sm:text-8xl">
        {name}
      </h1>
      <p className="mt-4 text-[1.45rem] leading-snug text-balance italic sm:text-3xl">
        {role}
      </p>
      <p className="mt-2 text-xl italic text-ink/75">
        Posted on {formatPostedAt(postedAt)}
      </p>
    </header>
  );
};

export default PostHeader;
