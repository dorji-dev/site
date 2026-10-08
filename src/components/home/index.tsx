import Bio from "@/components/home/bio";
import Connect from "@/components/home/connect";
import Now from "@/components/home/now";
import Philosophy from "@/components/home/philosophy";
import Post from "@/components/home/post";

const Home = () => {
  return (
    <div className="min-h-dvh">
      <Post>
        <Bio />
        <Now />
        <Philosophy />
        <Connect />
      </Post>
    </div>
  );
};

export default Home;
