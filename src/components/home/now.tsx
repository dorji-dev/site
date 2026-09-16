import SectionHeading from "@/components/home/section-heading";
import { profile } from "@/lib/profile";

const Now = () => {
  return (
    <section className="space-y-4">
      <SectionHeading label="now" />
      <p className="text-[17px] leading-[1.65] text-foreground/90">
        {profile.now}
      </p>
    </section>
  );
};

export default Now;
