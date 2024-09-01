"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DialogFormTags = dynamic(
  () => import("@/components/UI/resource/tags/DialogFormTags")
);
const DialogFormCategory = dynamic(
  () => import("@/components/UI/resource/category/DialogFormCategory")
);

const DialogFormLenguage = dynamic(
  () => import("@/components/UI/resource/Devlanguage/DialogFormLenguage")
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
