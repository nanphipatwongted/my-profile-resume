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
import { useRouter } from "next/navigation";

type ContactItemProps = {
  icon: ReactNode;
  text: string;
};

const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-white bg-gray-700 p-2 rounded-full">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [seeMore, setSeeMore] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const shortText =
    "A dedicated Web Developer with hands-on experience in building modern web applications using React and Next.js...";
  const fullText =
    "A dedicated Web Developer with hands-on experience in building modern web applications using React and Next.js. Familiar with backend development using Node.js, Express.js, and Fastify, along with a solid understanding of both SQL and MongoDB databases. Also experienced in developing with Flutter and Dart. Known for strong research skills and the ability to effectively troubleshoot and solve complex technical issues.";

  return (
    <>
      <div className="md:flex hidden min-h-screen">
        <div className="w-1/3 relative overflow-hidden group rounded-xl">
          <Image
            src="/profile.jpeg"
            alt="Profile Image"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-200"
            priority
          />
        </div>

        <div className="w-2/3 flex flex-col relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-right filter blur-sm scale-100 pointer-events-none"
            style={{ backgroundImage: "url('/profile.jpeg')" }}
          ></div>

          <div className="relative flex flex-col space-y-4 p-20 flex-1 justify-center text-white z-10">
            {!showContact ? (
              <button
                className="absolute top-4 right-4 border text-white rounded-md hover:text-black cursor-pointer px-4"
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
                transition={{ duration: 1 }}
                className="absolute top-4 right-4 rounded-md p-4 shadow-lg w-80 text-black bg-white flex flex-col justify-between z-20"
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
                    className="border border-black text-black hover:text-gray-700 hover:border-gray-700 font-semibold px-4 py-1 rounded cursor-pointer"
                    onClick={() => setShowContact(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-8xl font-bold text-white"
            >
              NANPHIPAT WONGTED
            </motion.div>

            <div className="h-px bg-white my-4"></div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl text-right font-bold text-white"
            >
              Frontend Developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg font-light indent-8 bg-white text-black p-4 rounded-2xl"
            >
              {seeMore ? fullText : shortText}
              <button
                onClick={() => setSeeMore(!seeMore)}
                className="ml-2 text-sm underline text-black hover:text-gray-700"
              >
                {seeMore ? "Show Less" : "Read More"}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="flex h-20 absolute bottom-0 w-full z-10"
          >
            <div className="flex-1 flex items-center justify-center text-white">
              <button
                onClick={() => router.push("/profile")}
                className="border border-white w-1/2 h-1/2 rounded-md hover:text-black hover:bg-white cursor-pointer"
              >
                Profile
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-white">
              <button
                onClick={() => router.push("/education")}
                className="border border-white w-1/2 h-1/2 rounded-md hover:text-black hover:bg-white cursor-pointer"
              >
                Education
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-white">
              <button
                onClick={() => router.push("/work")}
                className="border border-white w-1/2 h-1/2 rounded-md hover:text-black hover:bg-white cursor-pointer"
              >
                Work Experience
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex md:hidden min-h-screen relative w-full h-full">
        <div className="w-full">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-sm scale-100 pointer-events-none"
            style={{ backgroundImage: "url('/profile.jpeg')" }}
          />

          <div className="flex flex-col min-h-screen relative">
            <AnimatePresence>
              {!showContact ? (
                <button
                  className="absolute top-4 right-4 border rounded-md px-4 text-white"
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
                  transition={{ duration: 1 }}
                  className="absolute top-4 right-4 rounded-md p-4 shadow-lg w-65 text-black bg-white flex flex-col justify-between text-xs z-10"
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
                      className="border border-black text-black font-semibold px-4 py-1 rounded"
                      onClick={() => setShowContact(false)}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="w-full h-52 relative overflow-hidden group mt-20">
              <Image
                src="/profile.jpeg"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col space-y-4 py-5 px-5 flex-1">
              <motion.div
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl font-bold text-white"
              >
                NANPHIPAT WONGTED
              </motion.div>
              <div className="h-px bg-white my-4"></div>

              <motion.div
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg text-right font-bold text-white"
              >
                Frontend Developer
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="text-sm font-light text-black indent-8 bg-white p-4 rounded-2xl"
              >
                {seeMore ? fullText : shortText}
                <button
                  onClick={() => setSeeMore(!seeMore)}
                  className="ml-2 text-sm underline text-black hover:text-amber-200"
                >
                  {seeMore ? "Show Less" : "Read More"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="flex h-20 absolute bottom-0 w-full z-10 space-x-2 px-2"
        >
          <div className="flex-1 flex items-center justify-center text-sm text-white">
            <button
              onClick={() => router.push("/profile")}
              className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer"
            >
              Profile
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center text-sm text-white">
            <button
              onClick={() => router.push("/education")}
              className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer"
            >
              Education
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center text-sm text-white">
            <button
              onClick={() => router.push("/work")}
              className="border border-white w-full h-1/2 rounded-md hover:text-white hover:bg-teal-700 cursor-pointer"
            >
              Work Experience
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
