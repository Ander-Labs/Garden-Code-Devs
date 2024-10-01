import dynamic from "next/dynamic";

// iport components dynamic
const HomeSkeleton = dynamic(
  () => import("@/components/Skeletons/HomeSkeleton")
);

const Hero = dynamic(() => import("@/components/Pages/home/Hero"), {
  loading: () => <HomeSkeleton />,
});
const About = dynamic(() => import("@/components/Pages/home/About"));
const Resources = dynamic(() => import("@/components/Pages/home/Resource"));


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resources />
    </>
  );
}
