import Image from "next/image";
import dynamic from "next/dynamic";

// iport components dynamic
const Hero = dynamic(() => import("@/components/UI/home/Hero"));

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>hello </h1>
      </main>
    </>
  );
}
