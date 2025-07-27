"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Profile {
  name: string;
  position: string;
  image: string;
  skill: string[];
  about_me: string;
}

export default function Profile() {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<Profile | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then(({ data }: { data: Profile }) => {
        setDataUser(data);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen md:flex hidden relative items-center">
        <div
          className="fixed inset-0 bg-cover bg-center filter blur-sm z-0"
          style={{ backgroundImage: "url('/profile.jpeg')" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full overflow-y-auto max-h-screen flex justify-center items-start p-6"
        >
          <div className="bg-white w-3/4 rounded-2xl flex flex-wrap p-6 relative items-center">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center p-2 bg-gray-100 rounded-2xl text-black w-full"
            >
              Profile
            </motion.div>

            <div className="w-1/2 relative aspect-square p-10">
              <div className="relative aspect-square overflow-hidden rounded-full group">
                <Image
                  src="/profile-2.jpeg"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {dataUser ? (
              <div className="w-full md:w-1/2 pt-5 text-black">
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="text-xl font-bold text-center"
                >
                  {dataUser.name}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="text-lg text-center"
                >
                  {dataUser.position}
                </motion.div>
                <div className="h-px bg-black my-6" />
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="text-xl font-bold pb-1">About Me</div>
                  <div className="text-sm text-gray-700">
                    {dataUser.about_me}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="mt-6"
                >
                  <div className="text-xl font-bold pb-1">Skill</div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {dataUser.skill.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* ปุ่มลิงก์ */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 2 }}
                  className="flex w-full justify-center space-x-4 py-5"
                >
                  <button
                    onClick={() => router.push("/education")}
                    className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => router.push("/work")}
                    className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                  >
                    Work Experience
                  </button>
                </motion.div>
              </div>
            ) : (
              <div className="flex w-1/2 flex-col gap-4 opacity-30 p-6">
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                {/* ... */}
              </div>
            )}

            <button
              onClick={() => router.push("/")}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] px-10 py-1 rounded-md text-white bg-teal-700 hover:text-black hover:bg-white hover:shadow-2xl cursor-pointer"
            >
              Main
            </button>
          </div>
        </motion.div>
      </div>

      <div className="min-h-screen flex md:hidden flex-col items-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-100"
          style={{ backgroundImage: "url('/profile.jpeg')" }}
        />

        <div className="relative text-black bg-white w-3/4 rounded-2xl flex flex-col p-4 space-x-4 my-10">
          <div className="w-full relative aspect-square">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center p-2 bg-gray-100 rounded-2xl w-full mb-4"
            >
              Profile
            </motion.div>

            <div className="relative aspect-square overflow-hidden rounded-full group">
              <Image
                src="/profile-2.jpeg"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {dataUser ? (
            <div className="w-full pt-5">
              <motion.div
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1.1 }}
                className="text-xl font-bold text-center"
              >
                {dataUser.name}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1.3 }}
                className="text-lg text-center"
              >
                {dataUser.position}
              </motion.div>
              <div className="h-px bg-black my-6"></div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="text-xl font-bold pb-1">About Me</div>
                <div className="text-sm text-gray-700">{dataUser.about_me}</div>
              </motion.div>
              <motion.div
                className="w-full mt-6"
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="text-xl font-bold pb-1">Skill</div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {dataUser.skill.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
                className="flex w-full justify-center space-x-4 py-5"
              >
                <div className="flex-1 flex items-center justify-center text-black">
                  <button
                    onClick={() => router.push("/education")}
                    className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                  >
                    Edudation
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center text-black">
                  <button
                    onClick={() => router.push("/work")}
                    className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                  >
                    Work Experience
                  </button>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-4 opacity-30 p-6">
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          )}
          <button
            onClick={() => router.push("/")}
            className="absolute left-1/2 transform -translate-x-1/2 px-10 py-1 rounded-md text-white bg-teal-700 hover:text-black hover:bg-white hover:shadow-2xl cursor-pointer"
            style={{ bottom: "-1rem" }}
          >
            Main
          </button>
        </div>
      </div>
    </>
  );
}
