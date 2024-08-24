import dynamic from "next/dynamic";
import type { Metadata } from "next";

const HeroRoadmap = dynamic(
  () => import("@/components/UI/roadmap/HeroRoadmap")
);
const Roadmap = dynamic(() => import("@/components/UI/roadmap/Roadmap"));

 
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
