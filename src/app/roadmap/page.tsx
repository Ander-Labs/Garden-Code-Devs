import dynamic from "next/dynamic";
import type { Metadata } from "next";

const HeroRoadmap = dynamic(
  () => import("@/components/Pages/roadmap/HeroRoadmap")
);
const Roadmap = dynamic(() => import("@/components/Pages/roadmap/Roadmap"));

 
export const metadata: Metadata = {
  title: "Roadmap",
  description: "Roadmap Garden Code",
};


export default function page() {
  return (
    <>
      <HeroRoadmap />
      <Roadmap />
      
    </>
  );
}
