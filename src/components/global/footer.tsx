const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="w-full flex justify-around items-center mt-10 py-4 border-t flex-col md:flex-wrap md:flex-row">
        <p className="text-center text-muted-foreground font-bold pt-4 dark:text-white">
          {" "}
          &copy; {Year} Garden Code. All rights reserved.
        </p>
        <p className="text-center text-muted-foreground pt-4 font-bold dark:text-white">
          Version: <span className="text-primary">0.1.0</span>
        </p>
      </footer>
    </>
  );
}
