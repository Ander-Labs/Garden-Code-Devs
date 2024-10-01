"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DialogFormTags = dynamic(
  () => import("@/components/Pages/resource/tags/DialogFormTags")
);
const DialogFormCategory = dynamic(
  () => import("@/components/Pages/resource/category/DialogFormCategory")
);

const DialogFormLenguage = dynamic(
  () => import("@/components/Pages/resource/Devlanguage/DialogFormLenguage")
);

export default function AddButton() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/resources/web" ? (
        <>
          <DialogFormCategory />
          <DialogFormTags />
        </>
      ) : pathname === "/resources/github" ? (
        <>
          <DialogFormTags />
          <DialogFormLenguage />
        </>
      ) : null}
    </>
  );
}
