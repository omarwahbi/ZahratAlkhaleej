"use client";
import Image from "next/image";
import React from "react";

const LogoCarousel = () => {
  return (
    <main className="relative flex flex-col justify-center bg-transparent overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
          {/* Logo Carousel animation */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden relative">
            <ul className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll">
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Facebook"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Disney"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Airbnb"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Apple"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Spark"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Samsung"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Quora"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Sass"
                />
              </li>
              {/* Duplicate the logos for seamless scrolling */}
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Facebook"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Disney"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Airbnb"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Apple"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Spark"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Samsung"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Quora"
                />
              </li>
              <li className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg"
                  alt="Sass"
                />
              </li>
            </ul>
          </div>
          {/* End: Logo Carousel animation */}
        </div>
      </div>
    </main>
  );
};

export default LogoCarousel;
