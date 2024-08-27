import dynamic from "next/dynamic";

const Acount = dynamic(() => import("@/components/UI/dashboard/Acount"));

export default function page() {
  return (
    <>
      <Acount />
    </>
  );
}
