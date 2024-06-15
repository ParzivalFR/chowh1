"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <section className="w-full h-svh">
      <h1 className="text-white">404 - Page Not Found</h1>
      <p className="text-center text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="btn btn-primary text-white"
        onClick={() => router.push("/")}
      >
        Go Back
      </button>
    </section>
  );
};

export default NotFound;
