import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen text-center">
        <h2>Not Found</h2>
        <p>No se ha podido encontrar el recurso solicitado</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}
