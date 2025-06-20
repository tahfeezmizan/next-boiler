import React from "react";
import heroBg from "../../assets/hero-bg.png";

export default function HeroSection() {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh)",
      }}
    >
      <div className="container mx-auto px-4 ">
        <div className="">
          <h2 className="text-7xl font-bold leading-32 ">
            Trusted <span className="bg-black text-white rounded-xl px-2">Partner</span> for
            Your Website <span className="bg-black text-white rounded-xl px-2">Develop.</span>
          </h2>
          <div className="">
            <p className="">
              Building the worlds best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
