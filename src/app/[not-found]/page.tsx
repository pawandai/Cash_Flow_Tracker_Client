import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className=" text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <div>
              <Image src="/404.svg" alt="404" width={631} height={379} />
            </div>
            <p className="text-sm md:text-base text-[#F6009B] p-2 mb-4">
              The page you were looking for does&apos;t exist
            </p>
            <a
              href="/"
              className="bg-transparent hover:bg-[#F6009B] text-[#F6009B] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#F6009B] hover:border-transparent"
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
