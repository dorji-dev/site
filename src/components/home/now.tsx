import SectionHeading from "@/components/home/section-heading";
import { profile } from "@/lib/profile";

const Now = () => {
  return (
    <section className="space-y-3 border-b border-ink/30 pb-8">
      <SectionHeading label="now" />
      <p className="sand-copy">{profile.now}</p>
    </section>
  );
};

export default Now;
