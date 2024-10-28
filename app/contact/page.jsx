import React from "react";
import Form from "../components/Form";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="text-center md:text-left mb-6 md:w-2/4 md:mx-auto my-10 mx-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          We’re Here to Help!
        </h2>
        <p className="text-lg text-white">
          Whether you have a question, feedback, or need assistance, our team is
          here for you. Just fill out the form below, and we’ll get back to you
          as soon as possible. Let’s make it a great experience together!
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row my-10 px-4">
        <div className="md:w-1/2 flex align-baseline items-center justify-center">
          <Image
            src="https://images.javatpoint.com/difference/images/difference-between-firm-and-company.png"
            alt="Contact Us"
            width={600}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <Form />
        </div>
      </div>
    </>
  );
}
