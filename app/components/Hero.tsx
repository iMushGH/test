import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1280px]">
      <Image
        src="https://plus.unsplash.com/premium_photo-1676203407945-c77f57cd3ccc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        quality={100}
        width={1920}
        height={720}
      />
    </div>
  );
};

export default Hero;
