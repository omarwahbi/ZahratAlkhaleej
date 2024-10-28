import Image from "next/image";
import FactoryLandscape from "./components/FactoryLandscape";
import LogoCarousel from "./components/LogoCarousel";
import { Button } from "@nextui-org/react";
import Industries from "./components/Industries";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row mx-auto justify-center">
        <div className="w-full md:w-1/2 md:text-left text-center">
          <h1 className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl mt-8 sm:mt-12 md:mt-16 leading-tight">
            <span className="font-semibold text-blue-600">Diversified</span>{" "}
            <br /> Operating Holding <br /> Company
          </h1>
          <p className="max-w-lg mt-6 sm:mt-8 md:mt-12 md:mx-0 mx-auto leading-loose text-center md:text-left">
            A versatile and dynamic multidisciplinary powerhouse with more than
            30 years of business expertise across various industries that
            contribute to the economy and wellbeing of the community.
          </p>
          <Button size="lg" className="button-hover mt-3">
            Discover Our Journey
          </Button>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <Image
            src={"/assets/preview.webp"}
            width={500}
            height={500}
            alt="company"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      <LogoCarousel />
      <FactoryLandscape />
      <div className="flex flex-col md:flex-row w-full h-full mt-12">
        <Image
          width={500}
          height={500}
          alt="Perfect Guide to Meetings"
          className="w-full md:w-1/2 h-full rounded-lg object-cover"
          src="https://cdn.prod.website-files.com/629997f37bd997702e98c3b9/656dd3f2e10fc8bf1e6d3faf_Perfect%20Uigde%20to%20Meetings.png"
        />
        <div className="w-full md:w-1/2 md:p-4 py-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What We Do
          </p>
          <p className="text-justify text-base sm:text-lg md:text-xl pt-6 sm:pt-8 md:pt-12 w-full md:w-10/12">
            We focus on sustainable growth for our stakeholders and positive
            community engagement. Our commitment to responsible and balanced
            development is guided by our core values. <br /> <br /> Through
            careful planning and execution, we strive to create lasting impact,
            enriching both the business landscape and the lives of those we
            touch.
          </p>
        </div>
      </div>
      <Industries />
    </div>
  );
}
