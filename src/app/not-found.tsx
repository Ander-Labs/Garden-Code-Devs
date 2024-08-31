import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-full flex justify-center flex-col items-center h-screen text-center">
        <h2 className="text-green-800 dark:text-green-500 text-5xl font-bold mb-4">
          Not Found
        </h2>
        <Image src={"/img/404.png"} width={400} height={400} alt="404" />
        <p className="text-2xl font-semibold mb-8">
          No se ha podido encontrar el recurso solicitado
        </p>
        <Link
          href="/"
          className="bg-green-600 hover:underline p-4 rounded-xl text-white"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
