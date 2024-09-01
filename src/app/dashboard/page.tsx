import dynamic from "next/dynamic";


const DashboardLoanding = dynamic(
  () => import("@/components/Skeletons/DashboardLoanding"),
  {
    loading: () => (
      <section className="w-full h-screen flex justify-center items-center">
        Loading...
      </section>
    ),
  }
);

const Acount = dynamic(() => import("@/components/UI/dashboard/Acount"), {
  loading: () => <DashboardLoanding />,
});

export default function page() {
  return (
    <>
      <Acount />
    </>
  );
}
