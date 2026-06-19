import Link from "next/link";
import HeaderComponent from "@/components/header";
import Footer from "@/components/footer";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-8 xl:max-w-3xl">
      <div className="pt-6">
        <Link
          href="/"
          className="text-xs font-bold text-muted-foreground transition-all duration-200 hover:text-primary"
        >
          ← BACK TO JOURNEY
        </Link>
      </div>
      <HeaderComponent />
      <main className="flex-1 pb-16">{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
