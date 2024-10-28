"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xqakagkd");
  if (state.succeeded) {
    return <p>We will contact you soon!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg md:mt-0 mt-5"
    >
      <div className="mb-4 w-full">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full py-2 px-3 border rounded"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="email" className="block mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full py-2 px-3 border rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full py-2 px-3 border rounded"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mb-4 w-full">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
