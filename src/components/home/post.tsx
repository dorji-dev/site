import type { ReactNode } from "react";
import Engagement from "@/components/home/engagement";
import PostHeader from "@/components/home/post-header";

type PostProps = {
  children: ReactNode;
};

const Post = ({ children }: PostProps) => {
  return (
    <article className="flex h-[calc(100dvh-1.5rem)] max-h-[calc(100dvh-1.5rem)] min-h-0 w-full min-w-0 flex-col overflow-hidden border border-rule bg-post sm:h-[calc(100dvh-2.5rem)] sm:max-h-[calc(100dvh-2.5rem)]">
      <div className="shrink-0 px-5 pt-4 sm:px-6 sm:pt-5">
        <PostHeader />
      </div>
      <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex min-w-0 flex-col gap-8 sm:gap-9">{children}</div>
      </div>
      <div className="shrink-0 bg-post px-5 pb-4 sm:px-6 sm:pb-5">
        <Engagement />
      </div>
    </article>
  );
};

export default Post;
