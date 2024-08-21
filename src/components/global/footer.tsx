const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="w-full flex justify-center mt-10 py-4 border-t flex-col">
        <p className="text-center text-muted-foreground  pt-4">
          {" "}
          &copy; {Year} Garden Code. All rights reserved.
        </p>
      </footer>
    </>
  );
}
