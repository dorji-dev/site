import SectionHeading from "@/components/home/section-heading";
import { profile } from "@/lib/profile";

const Now = () => {
  return (
    <section className="space-y-3 border-b border-neutral-200 pb-8">
      <SectionHeading label="now" />
      <p className="text-base leading-7">{profile.now}</p>
    </section>
  );
};

export default Now;
