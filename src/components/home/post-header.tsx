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
      <h1 className="text-3xl font-medium tracking-tight text-ink">{name}</h1>
      <p className="mt-2 text-base text-neutral-600">{role}</p>
      <p className="mt-1 text-sm text-neutral-500">
        Posted on {formatPostedAt(postedAt)}
      </p>
    </header>
  );
};

export default PostHeader;
