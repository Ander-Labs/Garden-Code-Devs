//src/components/Skeleton/HomeSkeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
  return (
    <>
      <section className="w-full py-16 md:py-32 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Skeleton className="w-5/6 md:w-3/5 h-[40px] rounded-full my-2 bg-primary/55 " />
          <Skeleton className="w-5/6 md:w-3/5 h-[40px] rounded-full my-2 bg-primary/55 " />
          <Skeleton className="w-5/6 md:w-3/5 h-[40px] rounded-full my-2 bg-primary/55 " />
          <Skeleton className="w-5/6 md:w-3/5 h-[40px] rounded-full my-2 bg-primary/55 " />

          <Skeleton className="w-3/5 md:w-2/5 h-[20px] rounded-full bg-primary/55 mt-6" />
          <Skeleton className="w-3/5 md:w-2/5 h-[20px] rounded-full bg-primary/55 mt-6" />
          <Skeleton className="w-3/5 md:w-2/5 h-[20px] rounded-full bg-primary/55 mt-6" />
        </div>
        <div className="flex flex-wrap md:flex-grow my-6 justify-center ">
          <Skeleton className="w-40 h-[40px] rounded-full my-2 bg-primary/55" />
          <Skeleton className="w-40 h-[40px] rounded-full my-2 bg-primary/55 ml-2" />
        </div>

        <Skeleton className="w-1/2 h-[10px] rounded-full bg-primary/55" />
      </section>
    </>
  );
}
