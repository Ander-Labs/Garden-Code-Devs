
import dynamic from "next/dynamic";


const SignUp = dynamic(() => import("@/components/UI/auth/SignUp"));

export default function page() {
  return (
    <>
      <SignUp />
    </>
  );
}