"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  text: string;
};

const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-teal-600 bg-amber-100 p-2 rounded-full">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

const ContactItemMobile = ({ icon, text }: ContactItemProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-white bg-gray-700 p-2 rounded-full">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default function Home() {
  const [seeMore, setSeeMore] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const shortText =
    "A dedicated Web Developer with hands-on experience in building modern web applications using React and Next.js...";
  const fullText =
    "A dedicated Web Developer with hands-on experience in building modern web applications using React and Next.js. Familiar with backend development using Node.js, Express.js, and Fastify, along with a solid understanding of both SQL and MongoDB databases. Also experienced in developing with Flutter and Dart. Known for strong research skills and the ability to effectively troubleshoot and solve complex technical issues.";

  return (
    <>
      <div className="xl:flex hidden min-h-screen">
        <div className="w-1/3 relative">
          <Image
            src="/profile.jpeg"
            alt="Profile Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="w-2/3 bg-amber-100 flex flex-col relative">
          <AnimatePresence>
            {!showContact ? (
              <button
                className="absolute top-4 right-4 border text-amber-100 bg-teal-700 rounded-md hover:text-white cursor-pointer px-4"
                onClick={() => setShowContact(true)}
              >
                Contact
              </button>
            ) : (
              <motion.div
                key="contact-box"
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-4 right-4 rounded-md p-4 shadow-lg w-80 text-amber-100 bg-teal-700 flex flex-col justify-between"
              >
                <div className="flex flex-col space-y-4">
                  <ContactItem
                    icon={<PhoneIcon className="w-6 h-6" />}
                    text="0926258828"
                  />
                  <ContactItem
                    icon={<EnvelopeIcon className="w-6 h-6" />}
                    text="nanphipat.wongted@icloud.com"
                  />
                  <ContactItem
                    icon={<MapPinIcon className="w-6 h-6" />}
                    text="Samutprakarn Thailand"
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-amber-100 text-teal-700 font-semibold px-4 py-1 rounded hover:bg-amber-200"
                    onClick={() => setShowContact(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col space-y-4 p-20 flex-1 justify-center">
            <div className="text-8xl font-bold text-teal-700">
              NANPHIPAT WONGTED
            </div>
            <div className="h-px bg-teal-700 my-4"></div>

            <div className="text-2xl text-right font-bold text-teal-700">
              Frontend Developer
            </div>

            <div className="text-lg font-light text-white indent-8 bg-teal-700 p-4 rounded-2xl">
              {seeMore ? fullText : shortText}
              <button
                onClick={() => setSeeMore(!seeMore)}
                className="ml-2 text-sm underline text-white hover:text-amber-200"
              >
                {seeMore ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          <div className="flex h-20">
            <div className="flex-1 flex items-center justify-center text-xl text-teal-700">
              <button className="border border-teal-700 w-1/2 h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                Profile
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-xl text-teal-700">
              <button className="border border-teal-700 w-1/2 h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                Education
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-xl text-teal-700">
              <button className="border border-teal-700 w-1/2 h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                Work Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex xl:hidden min-h-screen">
        <div className="w-full">
          <Image
            src="/profile.jpeg"
            alt="Profile Image"
            fill
            style={{ objectFit: "cover", filter: "blur(6px)" }}
            priority
          />

          <div className="flex flex-col min-h-screen relative">
            <AnimatePresence>
              {!showContact ? (
                <button
                  className="absolute top-4 right-4 border rounded-md px-4"
                  onClick={() => setShowContact(true)}
                >
                  Contact
                </button>
              ) : (
                <motion.div
                  key="contact-box"
                  initial={{ opacity: 0, x: 50, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 50, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-4 right-4 rounded-md p-4 shadow-lg w-65 text-black bg-white flex flex-col justify-between text-xs"
                >
                  <div className="flex flex-col space-y-4">
                    <ContactItemMobile
                      icon={<PhoneIcon className="w-6 h-6" />}
                      text="0926258828"
                    />
                    <ContactItemMobile
                      icon={<EnvelopeIcon className="w-6 h-6" />}
                      text="nanphipat.wongted@icloud.com"
                    />
                    <ContactItemMobile
                      icon={<MapPinIcon className="w-6 h-6" />}
                      text="Samutprakarn Thailand"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      className="border border-black text-black font-semibold px-4 py-1 rounded"
                      onClick={() => setShowContact(false)}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col space-y-4 py-20 px-5 flex-1">
              <div className="text-4xl font-bold text-white">
                NANPHIPAT WONGTED
              </div>
              <div className="h-px bg-white my-4"></div>

              <div className="text-2xl text-right font-bold text-white">
                Frontend Developer
              </div>

              <div className="text-lg font-light text-black indent-8 bg-white p-4 rounded-2xl">
                {seeMore ? fullText : shortText}
                <button
                  onClick={() => setSeeMore(!seeMore)}
                  className="ml-2 text-sm underline text-black hover:text-amber-200"
                >
                  {seeMore ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="flex h-20 space-x-2 px-2">
              <div className="flex-1 flex items-center justify-center text-base text-white">
                <button className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                  Profile
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center text-base text-white">
                <button className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                  Education
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center text-base text-white">
                <button className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer">
                  Work Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
