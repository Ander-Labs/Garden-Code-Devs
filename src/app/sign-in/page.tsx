import dynamic from "next/dynamic";


const SignIn = dynamic(() => import("@/components/Pages/auth/SignIn"));


export default function Page() {
  return (
    <>
    <SignIn/>
    </>
  );
}
