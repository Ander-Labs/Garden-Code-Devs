import dynamic from "next/dynamic";


const SignIn = dynamic(() => import('@/components/UI/auth/SignIn'))


export default function Page() {
  return (
    <>
    <SignIn/>
    </>
  );
}
