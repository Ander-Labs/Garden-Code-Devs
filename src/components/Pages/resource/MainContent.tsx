import dynamic from "next/dynamic";

const BreadcrumbRoute = dynamic(
  () => import("@/components/global/BreadcrumbRoute")
);

const AddButton = dynamic(() => import("./addButton"));

const SheetAddWeb = dynamic(() => import("./web/FormPost/SheetAddWeb"), {
  loading: () => <p>Loading...</p>,
});

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <BreadcrumbRoute />
            <SheetAddWeb />
            <AddButton />
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
