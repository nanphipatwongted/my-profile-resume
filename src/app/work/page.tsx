"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WorkExperience {
  job_title: string;
  company: string;
  year: string;
  description: string;
  experiences_gained: string[];
}

export default function Work() {
  const router = useRouter();
  const [dataWork, setDataWork] = useState<WorkExperience[] | null>(null);

  useEffect(() => {
    fetch("/api/work")
      .then((res) => res.json())
      .then(({ data }: { data: WorkExperience[] }) => {
        setDataWork(data);
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
          <div className="bg-white w-3/4 rounded-2xl flex flex-col p-6 relative text-black">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center p-2 bg-gray-100 rounded-2xl"
            >
              Work Experience
            </motion.div>

            <AnimatePresence>
              {dataWork ? (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.5 }}
                >
                  <ul className="timeline timeline-horizontal timeline-snap-icon max-md:timeline-compact w-full">
                    {dataWork.map((item, index) => (
                      <li key={index} className="w-1/2">
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-teal-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div
                          className={`${
                            (index + 1) % 2 !== 0
                              ? "timeline-start"
                              : "timeline-end"
                          } mb-10 md:text-end`}
                        >
                          <time className="font-mono italic">{item.year}</time>
                          <div className="text-lg font-black">
                            {item.job_title}
                          </div>
                          <div className="text-sm">{item.description}</div>
                          <div className="font-bold">Experiences Gained</div>
                          {item.experiences_gained?.length > 0 && (
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 text-xs">
                              {item.experiences_gained.map(
                                (exp: string, i: number) => (
                                  <li key={i}>{exp}</li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                        <hr className="w-full" />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <div className="flex w-full flex-col gap-4 opacity-30 px-6">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className=""
            >
              <div className="text-lg font-black pb-2">Career Objective</div>
              <textarea
                className="textarea bg-gray-100 rounded-2xl w-full"
                placeholder=" My goal is to join a larger development team where I can collaborate
            more closely with other professionals and further develop my
            experience in mobile application development."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 2 }}
              className="flex w-full justify-center space-x-4 pt-5"
            >
              <div className="w-64 flex items-center justify-center text-black">
                <button
                  onClick={() => router.push("/profile")}
                  className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                >
                  Profile
                </button>
              </div>
              <div className="w-64 flex items-center justify-center text-black">
                <button
                  onClick={() => router.push("/education")}
                  className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
                >
                  Education
                </button>
              </div>
            </motion.div>

            <button
              onClick={() => router.push("/")}
              style={{ bottom: "-1rem" }}
              className="absolute left-1/2 transform -translate-x-1/2 px-10 py-1 rounded-md text-white bg-teal-700 hover:text-black hover:bg-white hover:shadow-2xl cursor-pointer"
            >
              Main
            </button>
          </div>
        </motion.div>
      </div>

      <div className="min-h-screen flex md:hidden flex-col items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-100"
          style={{ backgroundImage: "url('/profile.jpeg')" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="relative text-black bg-white w-3/4 rounded-2xl flex flex-col p-4 space-x-4 my-10"
        >
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center p-2 bg-gray-100 rounded-2xl w-full mb-2"
          >
            Work Experience
          </motion.div>
          <AnimatePresence>
            {dataWork ? (
              <motion.div
                initial={{ opacity: 0, x: 100, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full">
                  {dataWork.map((item, index) => (
                    <li key={index}>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5 text-teal-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${
                          (index + 1) % 2 !== 0
                            ? "timeline-start"
                            : "timeline-end"
                        } mb-10 md:text-end`}
                      >
                        <time className="font-mono italic">{item.year}</time>
                        <div className="text-lg font-black">
                          {item.job_title}
                        </div>
                        <div className="text-xs">{item.description}</div>
                        <div className="font-bold text-sm pt-2">
                          Experiences Gained
                        </div>
                        {item.experiences_gained?.length > 0 && (
                          <ul className="list-disc list-inside mt-2 text-gray-600 text-xs">
                            {item.experiences_gained.map(
                              (exp: string, i: number) => (
                                <li key={i}>{exp}</li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                      <hr />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <div className="flex w-full flex-col gap-4 opacity-30 p-6">
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className=""
          >
            <div className="text-lg font-black pb-2">Career Objective</div>
            <textarea
              className="textarea bg-gray-100 rounded-2xl h-36"
              placeholder=" My goal is to join a larger development team where I can collaborate
            more closely with other professionals and further develop my
            experience in mobile application development."
            />
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
                onClick={() => router.push("/profile")}
                className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
              >
                Profile
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-black">
              <button
                onClick={() => router.push("/education")}
                className="border border-black rounded-md hover:text-white hover:bg-black cursor-pointer w-full hover:shadow-2xl"
              >
                Education
              </button>
            </div>
          </motion.div>

          <button
            onClick={() => router.push("/")}
            className="absolute left-1/2 transform -translate-x-1/2 px-10 py-1 rounded-md text-white bg-teal-700 hover:text-black hover:bg-white hover:shadow-2xl cursor-pointer"
            style={{ bottom: "-1rem" }}
          >
            Main
          </button>
        </motion.div>
      </div>
    </>
  );
}
