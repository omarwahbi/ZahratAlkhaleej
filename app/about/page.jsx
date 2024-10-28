"use client";
import React, { useState } from "react";
import Image from "next/image";
import TimeLine from "../components/TimeLine";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="mx-auto">
      <div className="flex flex-wrap mx-auto w-[88%]">
        <div className="w-full md:w-1/2">
          <Image
            src="https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_1280.jpg"
            width={600}
            height={300}
            alt="About Us"
            className="w-full rounded-lg md:scale-85 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 pt-8">
          <p className="text-4xl pt-16 pb-8 font-bold">About Bahar</p>
          <p className="text-xl text-justify mb-16">
            Bahar Holding is a leading multidisciplinary powerhouse with over 30
            years of business success. We currently employ more than 1,500
            employees and operate in 6 industries, representing 7 international
            brands and 7 private label brands. Our operations include more than
            15 warehouses, 15 branches in Iraq, and 3 factories. At Bahar
            Holding, we&apos;re proud to be a versatile and dynamic holding
            company, with a wide range of business lines that operate across
            various industries. After more than 30 years of business success,
            Bahar Holding has established itself as a leading player in various
            sectors, including retail, FMCG, construction, energy, and more. We
            are committed to delivering exceptional quality and value across all
            our business lines, and our team is constantly exploring new
            opportunities for growth and expansion. As a family business, we are
            deeply invested in the communities we serve, and we work hard to
            create opportunities for growth and development for our employees,
            partners, and customers. We believe in building long-term
            relationships based on trust, integrity, and a shared commitment to
            excellence.
          </p>
        </div>
      </div>
      <TimeLine />
      <div className="bg-black h-screen w-screen flex items-center justify-center mx-auto">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <p className="text-3xl text-white pb-5">Bahar Philosophy</p>
            <p className="text-white text-xl text-justify w-full md:w-5/6">
              At Bahar Holding, we believe that it is our responsibility to
              contribute to the greater good of society. We have a strong
              commitment to Environmental, Social, and Governance (ESG)
              principles and Corporate Social Responsibility (CSR) initiatives,
              and we strive to make a positive impact on the communities where
              we operate.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <div className="buttons mb-4">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-4 rounded-lg py-2 m-2 ${
                  activeTab === "vision" ? "bg-gray-400" : "bg-white"
                } text-black`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-4 rounded-lg py-2 m-2 ${
                  activeTab === "mission" ? "bg-gray-400" : "bg-white"
                } text-black`}
              >
                Mission
              </button>
            </div>
            <div className="desc text-xl text-white text-center md:text-left">
              {activeTab === "vision" && (
                <p>
                  Our Vision is to actively contribute to the development and
                  growth of our community.
                </p>
              )}
              {activeTab === "mission" && (
                <p>
                  Our Mission is to consistently deliver the highest caliber of
                  products and services.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
