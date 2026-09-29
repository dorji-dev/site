import type { ReactNode } from "react";
import Engagement from "@/components/home/engagement";
import PostHeader from "@/components/home/post-header";

type PostProps = {
  children: ReactNode;
};

const Post = ({ children }: PostProps) => {
  return (
    <article className="relative z-10 mx-auto w-full max-w-xl px-6 pt-14 pb-6 sm:px-8 sm:pt-20">
      <PostHeader />
      <div className="mt-10 flex flex-col gap-9">{children}</div>
      <Engagement />
    </article>
  );
};

export default Post;
