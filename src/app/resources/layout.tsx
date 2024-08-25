import dynamic from "next/dynamic";

const Sidemap = dynamic(() => import("@/components/UI/resource/Sidemap"));
const MainContent = dynamic(
  () => import("@/components/UI/resource/MainContent")
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidemap >
              {children}
          </Sidemap>
    </>
  );
}
