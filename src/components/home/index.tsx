import type { ReactNode } from "react";
import Bio from "@/components/home/bio";
import Connect from "@/components/home/connect";
import Now from "@/components/home/now";
import Philosophy from "@/components/home/philosophy";
import Portrait from "@/components/home/portrait";
import Post from "@/components/home/post";

const Shell = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <svg aria-hidden viewBox="0 0 64 48" className={`text-[#f3e2b8] ${className}`}>
      {children}
    </svg>
  );
};

const Decor = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="sand-drift absolute top-5 right-3 size-2.5 rounded-full bg-[#fff4d6]/70 sm:right-6 sm:size-3" />
      <span className="sand-drift sand-drift-late absolute top-14 right-6 h-0.5 w-8 rounded-full bg-[#fff4d6]/55 sm:right-10" />
      <span className="sand-drift sand-drift-slow absolute bottom-32 left-3 size-2 rounded-full bg-[#f6e2b0]/80" />

      <div className="sand-drift absolute top-24 left-[5%] hidden lg:block">
        <Shell className="w-10 -rotate-12">
          <path
            d="M8 30c8-16 18-22 24-22s16 6 24 22c-8 4-16 6-24 6s-16-2-24-6Z"
            fill="currentColor"
            stroke="#c4a06a"
            strokeWidth="1.2"
          />
          <path d="M32 10v26" fill="none" stroke="#c4a06a" strokeWidth="1" />
        </Shell>
      </div>
      <div className="sand-drift sand-drift-slow absolute top-[38%] right-[6%] hidden lg:block">
        <Shell className="w-8 rotate-12">
          <path
            d="M10 34c6-18 14-24 22-24 2 8 2 16 0 24-6 2-14 2-22 0Z"
            fill="currentColor"
            stroke="#c4a06a"
            strokeWidth="1.2"
          />
        </Shell>
      </div>
      <div className="sand-drift sand-drift-late absolute bottom-40 left-[8%] hidden lg:block">
        <Shell className="w-7 rotate-6">
          <path
            d="M12 32c7-14 14-18 20-18s13 4 20 18c-7 3-13 4-20 4s-13-1-20-4Z"
            fill="currentColor"
            stroke="#c4a06a"
            strokeWidth="1.2"
          />
        </Shell>
      </div>

      <span className="sand-drift sand-drift-late absolute top-36 left-[9%] hidden size-4 rounded-full bg-[#fff6dc]/50 lg:block" />
      <span className="sand-drift absolute top-[28%] right-[8%] hidden h-0.5 w-12 -rotate-6 rounded-full bg-[#fff4d6]/50 lg:block" />
      <span className="sand-drift sand-drift-slow absolute bottom-52 right-[10%] hidden size-3 rounded-full bg-[#f3d7a2]/70 lg:block" />
      <span className="sand-drift sand-drift-late absolute bottom-28 left-[14%] hidden h-0.5 w-10 rotate-3 rounded-full bg-[#fff4d6]/45 lg:block" />
    </div>
  );
};

const Foam = () => {
  return (
    <div aria-hidden className="relative z-10 -mt-8 h-36 overflow-hidden sm:h-44">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="sand-foam-wave absolute top-0 -left-[8%] h-full w-[116%]"
      >
        <path
          fill="#f7f1e4"
          d="M0 120c120 40 200-20 320-10s180 50 300 30 200-60 320-40 220 50 320 30 120-40 180-20v110H0Z"
        />
      </svg>
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="sand-foam-wave-slow absolute top-3 -left-[8%] h-full w-[116%]"
      >
        <path
          fill="#fffaf2"
          opacity="0.9"
          d="M0 150c140 30 220-10 340 0s180 40 300 16 210-46 330-20 200 40 300 18 110-30 170-10v66H0Z"
        />
      </svg>
    </div>
  );
};

const Home = () => {
  return (
    <div className="sand relative min-h-dvh overflow-x-clip">
      <Decor />
      <Post>
        <Bio />
        <Now />
        <Philosophy />
        <Connect />
        <Portrait />
      </Post>
      <Foam />
    </div>
  );
};

export default Home;
