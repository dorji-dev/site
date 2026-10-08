import { profile } from "@/lib/profile";

const PostHeader = () => {
  const { name, role } = profile;

  return (
    <header>
      <h1 className="text-3xl font-bold tracking-tight text-ink">{name}</h1>
      <p className="mt-2 text-base text-neutral-500">{role}</p>
    </header>
  );
};

export default PostHeader;
