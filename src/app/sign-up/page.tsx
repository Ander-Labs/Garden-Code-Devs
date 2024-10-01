
import dynamic from "next/dynamic";


const SignUp = dynamic(() => import("@/components/Pages/auth/SignUp"));

export default function page() {
  return (
    <>
      <SignUp />
    </>
  );
}