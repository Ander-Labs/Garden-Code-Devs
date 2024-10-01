import dynamic from "next/dynamic";

const FormPost = dynamic(
  () => import("@/components/Pages/resource/category/FormPost")
);
const DialogForm = dynamic(
  () => import("@/components/Pages/resource/category/DialogFormCategory")
);

export default function page() {
  return (
    <>
      <section className=" w-full flex flex-col justify-center items-center gap-8">
        <h2>Resource</h2>
        {/* <DialogForm /> */}
        {/* <FormPost /> */}
      </section>
    </>
  );
}
