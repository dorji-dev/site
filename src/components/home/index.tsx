import Bio from "@/components/home/bio";
import Connect from "@/components/home/connect";
import Now from "@/components/home/now";
import Philosophy from "@/components/home/philosophy";
import Portrait from "@/components/home/portrait";
import Post from "@/components/home/post";

const Ring = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="46" fill="none" stroke="#c4a06a" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="28" fill="none" stroke="#a67c52" strokeWidth="1" />
    </svg>
  );
};

const Arc = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden viewBox="0 0 160 80" className={className}>
      <path
        d="M8 64C28 18 88 8 152 36"
        fill="none"
        stroke="#c4a06a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SidePanel = ({ side }: { side: "left" | "right" }) => {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 hidden w-[calc((100%-var(--container-xl))/2)] overflow-hidden lg:block ${isLeft ? "left-0" : "right-0"}`}
    >
      <div className={`sand-drift-soft absolute top-[14%] w-28 ${isLeft ? "left-[16%]" : "right-[18%]"}`}>
        {isLeft ? <Ring className="w-full" /> : <Arc className="w-full" />}
      </div>
      <div className={`sand-drift-soft absolute top-[48%] w-32 ${isLeft ? "right-[10%]" : "left-[12%]"}`}>
        {isLeft ? <Arc className="w-full" /> : <Ring className="w-full opacity-80" />}
      </div>
      <span
        className={`sand-drift absolute top-[32%] size-2 rounded-full bg-[#c4a06a]/80 ${isLeft ? "left-[42%]" : "right-[36%]"}`}
      />
      <span
        className={`sand-drift sand-drift-late absolute top-[72%] size-1.5 rounded-full bg-[#a67c52] ${isLeft ? "left-[28%]" : "right-[24%]"}`}
      />
      <span
        className={`sand-drift-soft absolute top-[78%] h-px w-10 bg-[#c4a06a]/70 ${isLeft ? "left-[18%]" : "right-[16%]"}`}
      />
    </div>
  );
};

const Decor = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
      <span className="sand-drift absolute top-5 right-3 size-2.5 rounded-full bg-[#c4a06a]/70 sm:right-6 sm:size-3" />
      <span className="sand-drift sand-drift-late absolute top-14 right-6 h-0.5 w-8 rounded-full bg-[#c4a06a]/55 sm:right-10" />
      <span className="sand-drift sand-drift-slow absolute bottom-32 left-3 size-2 rounded-full bg-[#a67c52]/80" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="sand relative min-h-dvh overflow-x-clip">
      <Decor />
      <SidePanel side="left" />
      <SidePanel side="right" />
      <Post>
        <Bio />
        <Now />
        <Philosophy />
        <Connect />
        <Portrait />
      </Post>
    </div>
  );
};

export default Home;
