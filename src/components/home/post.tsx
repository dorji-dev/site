import type { ReactNode } from "react";
import Engagement from "@/components/home/engagement";
import PostHeader from "@/components/home/post-header";

type PostProps = {
  children: ReactNode;
};

const Post = ({ children }: PostProps) => {
  return (
    <article className="mx-auto w-full max-w-xl px-6 pt-16 pb-16 sm:px-8 sm:pt-24">
      <PostHeader />
      <div className="mt-10 flex flex-col gap-9">{children}</div>
      <Engagement />
    </article>
  );
};

export default Post;
