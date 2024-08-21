import dynamic from "next/dynamic";

// iport components dynamic
const Hero = dynamic(() => import("@/components/UI/home/Hero"));
const About = dynamic(() => import("@/components/UI/home/About"));
const Resources = dynamic(() => import("@/components/UI/home/Resource"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resources />
    </>
  );
}
