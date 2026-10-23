import CommitHistory from "@/components/home/commit-history";
import LifeDiff from "@/components/home/life-diff";
import MergeBox from "@/components/home/merge-box";
import PrHeader from "@/components/home/pr-header";
import PrTabs from "@/components/home/pr-tabs";
import Reviewers from "@/components/home/reviewers";
import SiteFooter from "@/components/home/site-footer";
import SiteHeader from "@/components/home/site-header";

const Home = () => {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-4xl px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-24">
        <SiteHeader />
        <main>
          <PrHeader />
          <PrTabs />
          <CommitHistory />
          <LifeDiff />
          <MergeBox />
          <Reviewers />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default Home;
