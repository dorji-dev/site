import Bio from "@/components/home/bio";
import Connect from "@/components/home/connect";
import Now from "@/components/home/now";
import Philosophy from "@/components/home/philosophy";
import Post from "@/components/home/post";

const Home = () => {
  return (
    <div className="relative z-10 flex h-dvh items-center justify-center overflow-hidden px-3 py-3 sm:px-6 sm:py-5">
      <div className="flex h-full max-h-full w-full max-w-xl min-h-0 items-stretch">
        <Post>
          <Bio />
          <Now />
          <Philosophy />
          <Connect />
        </Post>
      </div>
    </div>
  );
};

export default Home;
