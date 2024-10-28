import Image from "next/image";
import React from "react";

export default function FactoryLandscape() {
  return (
    <div className="relative">
      <Image
        src="https://as1.ftcdn.net/v2/jpg/02/70/53/64/1000_F_270536411_ixKMXZ5yh6sTpZzmjF7iYQ0SQhOTT3R2.jpg"
        alt="factory landscape"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="md:absolute top-0 right-0 bottom-0 md:flex md:items-center md:justify-center bg-cyan-700 bg-opacity-55 md:w-1/2 flex-col p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-6xl pb-2 text-start">
          About Bahar Holding
        </h1>
        <p className="text-white text-base md:text-2xl text-justify p-2 md:p-4">
          Bahar Holding is a diversified conglomerate with multiple companies in
          various industries, operating as an influential distribution channel
          across Iraq and the UAE. Its advanced ERP system, wealth of
          international experience, rich history, multi-disciplinary team, and
          vast network of warehousing facilities in Iraq and UAE, all stand as a
          testament to Bahar Holding’s high standards and ethical reputation.
        </p>
      </div>
    </div>
  );
}
