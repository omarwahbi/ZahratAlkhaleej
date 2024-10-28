"use client";
import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-white py-10">
      <hr className="rounded-lg bg-gray-600 text-gray-600" />
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Brand and Get in Touch Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-primary font-bold text-2xl mt-5">ACME</p>
            <p className="text-md text-gray-300 mt-5">
              Leading the way in quality services and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="w-full text-lg mx-auto text-gray-300  mb-3">
              How can we help you? Get in touch
            </p>

            <Link
              href="/contact"
              className="bg-primary text-white rounded-lg shadow px-8 py-2 text-md flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 mt-10 mb-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-400 hover:text-primary transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Media Section */}
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-400 hover:text-primary transition duration-300"
            />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-400 hover:text-primary transition duration-300"
            />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-400 hover:text-primary transition duration-300"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-400 hover:text-primary transition duration-300"
            />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; {currentYear} ACME. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
