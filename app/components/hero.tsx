import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Build <span className="italic">Happiness</span> Into Every Corner
          </h1>
          <p className="md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            From construction to renovation, we design spaces that feel right.
            Thoughtful layouts, smart storage, and finishes that last.
          </p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/hero-image.png"
          alt="Interior Design"
          width={5120}
          height={2880}
          priority
          className="w-full h-auto"
        />

        <Link href="/">
          <Image
            src="/images/cta-button.svg"
            alt="Get in touch"
            width={160}
            height={160}
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
