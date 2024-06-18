import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";

type Props = {
  children: React.ReactNode;
};

const Layouts = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default Layouts;
